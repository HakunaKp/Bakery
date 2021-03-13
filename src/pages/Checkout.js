import React from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../components/CheckoutForm";
import history from '../components/History'

const Checkout = () => {
    const stripePromise = loadStripe('pk_test_51IM5y6EcRjwmm3FOJTIEGQff1laUdhHNCsVTmaykpyThI9ojJtavYZbbqKisCPTQKotAzksDHwtZwZ8lcGKq4xcX00VutKfps4');

    return (
        <section className="checkout-wrapper">
            <AmplifyAuthenticator>
                <Elements stripe={stripePromise}>
                    <section>
                        <h2>Time to Checkout?</h2>
                        <CheckoutForm />
                    </section>
                </Elements>
            </AmplifyAuthenticator>
        </section>
    )
}

export default Checkout
