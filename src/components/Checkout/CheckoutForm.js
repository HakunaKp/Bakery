import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../../context/products";
import { CartContext } from "../../context/cart";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';
import history from '../History';
import emailjs from 'emailjs-com';
import formatDate from './FormatDate';
import formatTime from './FormatTime';

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

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const { checkout } = useContext(ProductContext);

  Auth.currentAuthenticatedUser().then((user) => {
    customer_username = user.username;
    customer_email = user.attributes.email;
  })

  // set pickupdate and time from url
  const { date, time } = useParams();

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

    if (result.error) {
      // Inform the user if there was an error.
      setError(result.error.message);
    } else {
      setError(null);
      // Send the token to your server.
      const token = result.token;
      setOrderDetails({ ...orderDetails, username: customer_username, email: customer_email, token: token.id });
      emailjs.init("user_HZRLM4jHPO8XyqGT96zFF");
      emailjs.send("service_cn2ng8a","template_upcguss",{
        receipient_email: customer_email,
        pickupDate: formatDate(date),
        pickupTime: formatTime(time),
        flavor: orderDetails.cart[0].flavor,
        shape: orderDetails.cart[0].shape,
        tier: orderDetails.cart[0].tier,
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
