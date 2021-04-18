import React, { useEffect } from 'react';

const Success = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div>
            <h1>Success! Your order has been confirmed.</h1>
            <h2>A confirmation email has been sent to you with pick up instructions.</h2>
            <h2>Be sure to save your order invoice for details of your order.</h2>
        </div>
    );
}

export default Success;