import React from 'react';

export default function printText(cart){
    for (var i = 0; i <= cart.length; i++) {
        const description = cart[i].description;
        const allergies = cart[i].allergies;

        if (description && allergies) {
            return(
            <div className="cart-text">
                <h3>Noted Description: {description}</h3>
                <h3>Noted Allergies: {allergies}</h3>
            </div>
            );
        } else if (description && !allergies){
            return(
            <div className="cart-text">
                <h3>Noted Description: {description}</h3>
            </div>
            );
        } else if (allergies){
            return(
            <div className="cart-text">
            <h3>Noted Allergies: {allergies}</h3>
            </div>
            )
        } else return;
    }
}
