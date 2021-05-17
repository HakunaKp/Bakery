import React from 'react';
import CheckoutForm from "../checkout/CheckoutForm";
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51IM5y6EcRjwmm3FOJTIEGQff1laUdhHNCsVTmaykpyThI9ojJtavYZbbqKisCPTQKotAzksDHwtZwZ8lcGKq4xcX00VutKfps4');

    return (
        <Elements stripe={stripePromise}>
            <h2 class="mt-0 mb-16">Checkout</h2>
            <p class="m-0">Your order will be confirmed upon successful processing of your payment.</p>
            <br></br>
            <br></br>
            <CheckoutForm />
        </Elements>
    )
}

export default Checkout;
