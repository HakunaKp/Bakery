import React from 'react';
import CheckoutForm from "../checkout/CheckoutForm";
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51IM5y6EcRjwmm3FOJTIEGQff1laUdhHNCsVTmaykpyThI9ojJtavYZbbqKisCPTQKotAzksDHwtZwZ8lcGKq4xcX00VutKfps4');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <br></br>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                        <br></br>
                        <br></br>
                        <h3>Be sure to save the PDF invoice of your order.</h3>
                        <h3>It will be downloaded after successful processing of your payment.</h3>
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout;
