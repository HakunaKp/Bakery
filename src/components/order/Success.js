import React, { useEffect } from 'react';

const Success = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <h2 class="mt-0 mb-16">Success! Your order has been confirmed.</h2>
            <p class="m-0">A confirmation email has been sent to you with pick up instructions.</p>
            <p class="m-0">Be sure to save your order invoice for details of your order.</p>
        </div>
    );
}

export default Success;