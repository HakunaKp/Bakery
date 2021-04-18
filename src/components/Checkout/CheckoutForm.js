import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import emailjs from 'emailjs-com';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import formatProducts from './FormatProducts';
import generateInvoiceTable from './GenerateInvoice';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      }
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  }
};

var customer_username;
var customer_email;
var date;
var time;

const CheckoutForm = () => {

  const history = useHistory();

  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(ProductContext);

  Auth.currentAuthenticatedUser().then((user) => {
    customer_username = user.username;
    customer_email = user.attributes.email;
  })

  const date_element = document.getElementById("date-picker");
  const time_element = document.getElementById("time-picker");
  if (date_element && time_element) {
    date = date_element.value;
    time = time_element.value;
  }

  const [orderDetails, setOrderDetails] = useState({ cart, username: customer_username, email: customer_email, total, pickupDate: date, pickupTime: time, token: null });

  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (orderDetails.token) {
      checkout(orderDetails);
      clearCart();
    }
  }, [orderDetails, checkout, clearCart]);

  // Handle real-time validation errors from the card Element.
  const handleChange = (event) => {
    if (event.error) {
      setError(event.error.message);
    } else {
      setError(null);
    }
  };

  // Handle form submission.
  const handleSubmit = async (event) => {
    event.preventDefault();

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);

    const products = orderDetails.cart.map(formatProducts);
    const doc = new jsPDF();

    products.forEach(product => generateInvoiceTable(product, doc));

    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, username: customer_username, email: customer_email, pickupDate: date, pickupTime: time, token: token.id });
      doc.save('Order Invoice - Customer Copy.pdf')
      emailjs.init("user_HZRLM4jHPO8XyqGT96zFF");
      emailjs.send("service_cn2ng8a","template_upcguss",{
        receipient_email: customer_email,
        pickupDate: date,
        pickupTime: time,
        total: orderDetails.total
      });
      history.push('/success');
    }
  };

  return (
    <AmplifyAuthenticator>
      <form onSubmit={handleSubmit}>
        <div className="checkout-form">
          <div className="stripe-section">
            <label htmlFor="stripe-element"> Credit or debit card </label>
            <CardElement id="stripe-element" options={CARD_ELEMENT_OPTIONS} onChange={handleChange} />
          </div>
          <div className="card-errors" role="alert">
            {error}
          </div>
        </div>
        <button type="submit" className="btn">
          Submit Payment
        </button>
      </form>
    </AmplifyAuthenticator>
  );
};

export default CheckoutForm;
