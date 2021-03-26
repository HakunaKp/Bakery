import React from 'react';
import { useParams } from "react-router-dom";

const Success = () => {

    const { date, time } = useParams();

    return (
        <div>
            <h2>Success! Your order has been confirmed.</h2>
            <p>Pick Up Date: {date}</p>
            <p>Pick Up Time: {time}</p>
        </div>
    );
}

export default Success
