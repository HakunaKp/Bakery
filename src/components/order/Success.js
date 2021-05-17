import React, { useEffect } from 'react';

const Success = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <h2 class="mt-0 mb-16">Success! Your order has been confirmed.</h2>
            <p class="m-0">A confirmation email has been sent to you with pick up instructions.</p>
            <p class="m-0">The email contains details of your selections.</p>
            <p class="m-0">Thank you for choosing our shop!</p>
        </div>
    );
}

export default Success;