export default function printText(description, allergies){
    if (description && allergies) {
        return(
        <div className="cart-text">
            <h3>Cake Description: {description}</h3>
            <h3>Allergies: {allergies}</h3>
        </div>
        );
    } else if (description && !allergies){
        return(
        <div className="cart-text">
            <h3>Cake Description: {description}</h3>
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
