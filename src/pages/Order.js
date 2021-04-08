import React, { useContext, useState } from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from "aws-amplify"
import { createProduct } from '../api/mutations'
import { store } from 'react-notifications-component'
import { CartContext } from "../context/cart"
import FlavorDescription from '../components/Accordion/Descriptions/FlavorDescription'
import ShapeDescription from '../components/Accordion/Descriptions/ShapeDescription'
import TierTitle from '../components/Accordion/Descriptions/TierTitle'
import TierDescription from '../components/Accordion/Descriptions/TierDescription'
import ExtrasTitle from '../components/Accordion/Descriptions/ExtrasTitle'
import ExtrasDescription from '../components/Accordion/Descriptions/ExtrasDescription'
import DescriptionTitle from '../components/Accordion/Descriptions/DescriptionTitle'
import DescriptionDescription from '../components/Accordion/Descriptions/DescriptionDescription'
import AllergiesTitle from '../components/Accordion/Descriptions/AllergiesTitle'
import AllergiesDescription from '../components/Accordion/Descriptions/AllergiesDescription'
import Accordion from '../components/Accordion/Accordion'
import Carousel from "react-elastic-carousel"
import Item from "../components/Item"
import Options from '../components/ToggleSwitch/Options'
import OptionsShape from '../components/ToggleSwitch/OptionsShape'
import ReactNotifications from 'react-notifications-component'
import history from '../components/History'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import "../components/Accordion/Accordion.css"

var reviewReady = false;

// Function to Create notification
function CreateNotification(title_string, message_string) {
    store.addNotification({
        title: title_string,
        message: message_string,
        type: "default",                         // 'default', 'success', 'info', 'warning'
        container: "top-full",                // where to position the notifications
        insert: "top",
        animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
        dismiss: {
        duration: 2250,
        showIcon: true
        },
    })
}

const Order = () => {

    const FLAVORS = ['Strawberry', 'Blueberry', 'Mango', 'Pineapple', 'Black Forest', 'Butterscotch', 'Chocolate Ganache'];

    const rand = Math.random().toString(16).substr(2, 8); // 6de5ccda

    const [productDetails, setProductDetails] = useState({ id: rand, flavor: "", shape: "", tier: "", eggless: false, fondant: false, topper: false, 
        characters: false, description: "", allergies: "", price: "0.00" })

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 900, itemsToShow: 3 },
    ]
    
    const { addToCart } = useContext(CartContext);

    function PickFlavor(e) {
        //Set Product Details
        setProductDetails({ ...productDetails, flavor: e.target.innerHTML })
        //Jump to PickShape
        document.getElementById("pick-shape").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        return
    }

    function Flavor() {
        return (
        <div className="flavor-form">
            <h1>Select Flavor (Required)</h1>
            <Carousel breakPoints={breakPoints} fade="true" transition="5000">
            {FLAVORS.map((flavor) => {
                if (flavor === 'Chocolate Ganache') return ( <Item className="Flavor" id='Chocolate-Ganache' onClick={(e) => PickFlavor(e)} >{flavor}</Item> )
                if (flavor === 'Black Forest') return ( <Item className="Flavor" id='Black-Forest' onClick={(e) => PickFlavor(e)} >{flavor}</Item> )
                return ( <Item className="Flavor" id={flavor} onClick={(e) => PickFlavor(e)} >{flavor}</Item> )
            })}
            </Carousel>
        </div>
        )
    }

    function Shape() {
        return (
            <div className="shape-form" id="pick-shape">
                <h1>Select Shape (Required)</h1>
                <OptionsShape render/>
            </div>
        )
    }

    function SaveForm(extrasReady){
        if (!productDetails.flavor) return CreateNotification("Error", "Flavor is Required!");
        
        if (extrasReady && document.getElementById("description-box") && document.getElementById("allergies-box") && document.getElementsByClassName("tier-button")) {
            var tiers = document.getElementsByClassName("tier-button")
            var tierSelected = false
            var has_eggs = ((document.getElementById("Eggless").className) === "extra-choices text-custom")
            var has_fondant = ((document.getElementById("Fondant").className) === "extra-choices text-custom")
            var has_topper = ((document.getElementById("Topper").className) === "extra-choices text-custom")
            var has_characters = ((document.getElementById("Characters").className) === "extra-choices text-custom")          

            for (var i = 0; i < tiers.length; i++) {
                if (tiers[i].checked) {
                    setProductDetails({...productDetails, tier: tiers[i].id, eggless: has_eggs, fondant: has_fondant, topper: has_topper, 
                        characters: has_characters, description: document.getElementById("description-box").value, 
                        allergies: document.getElementById("allergies-box").value, price: tiers[i].value 
                    })
                    tierSelected = true
                }
            }

            if (!tierSelected && !productDetails.tier) return CreateNotification("Error", "Tier is required!")

            // Jump to review
            if (document.getElementById("review-header")) document.getElementById("review-header").scrollIntoView({behavior: "smooth", block: "start", inline: "start"}); 
            extrasReady = false
        }
    }

    function Description() {
        return (
            <div className="description-form">
                <h1>Description (Optional)</h1>
                <textarea 
                    type="text" 
                    rows="7" 
                    placeholder="- Theme&#10;- Color Choices&#10;- Written Messages&#10;- Fondant Details&#10;- Desired Toppers&#10;- Desired Characters&#10;- Etc."
                    name="description"
                    id="description-box"
                />
            </div>
        )
    }

    function Allergies() {
        return (
            <div className="allergies-form">
                <h1>Allergies (Optional)</h1>
                <textarea 
                    type="text" 
                    rows="3" 
                    placeholder="Please list any allergies or dietary restrictions (Leave blank if not applicable)"
                    name="allergies"
                    id="allergies-box"
                />
                <input type="button" value="Save &amp; Review" onClick={SaveChoices} />
            </div>
        )
    }

    function Review() {
        if (reviewReady) {
            return(
                <div className="review-form">
                    <br></br>
                    <p id="review-selections" styling="align-content: left">The selections below will be added to cart</p>
                    <br></br>
                    <Accordion
                        title= {"Flavor - " + productDetails.flavor}
                        content= {FlavorDescription(productDetails.flavor)}
                    />
                    <Accordion
                        title= {"Shape - " + productDetails.shape}
                        content= {ShapeDescription(productDetails.shape)}
                    />
                    <Accordion
                        title= {TierTitle(productDetails.tier)}
                        content= {TierDescription(productDetails.shape, productDetails.tier)}
                    />
                    <Accordion
                        title= {ExtrasTitle(productDetails.eggless, productDetails.fondant, productDetails.topper, productDetails.characters)}
                        content= {ExtrasDescription(productDetails.eggless, productDetails.fondant, productDetails.topper, productDetails.characters)}
                    />
                    <Accordion
                        title= {DescriptionTitle(productDetails.description)}
                        content= {DescriptionDescription(productDetails.description)}
                    />
                    <Accordion
                        title= {AllergiesTitle(productDetails.allergies)}
                        content= {AllergiesDescription(productDetails.allergies)}
                    />
                    <input
                        id="submit-button" 
                        type="submit" 
                        value="Date &amp; Time Selection" 
                    />
                </div>
            )
        } else return <></>
    }

    // Goes to review
    function SaveChoices() {
        SaveForm(true)
        reviewReady = true
        if (document.getElementById("review-selections")){
            document.getElementById("review-selections").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }
        return
    }

    function SaveShape(){
        if (document.getElementById("Circle") && document.getElementById("Rectangle") && document.getElementById("Heart")){
            if (document.getElementById("Circle").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({...productDetails, shape: "Circle"})
            }
            if (document.getElementById("Rectangle").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({ ...productDetails, shape: "Rectangle" })
            }
            if (document.getElementById("Heart").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({ ...productDetails, shape: "Heart" })
            }
        }
        return
    }

    function Optional(){
        SaveShape()
        return (
            <div className="optional-form" id="pick-option">
                <h1 id="pick-extras">Extras (Optional)</h1>
                <Options render/>
                <div>
                    <h3>Eggless: Yogurt-based substite.</h3>
                    <h3>Fondant: A delicious icing accessory made with 100% edible ingredients.</h3>
                </div>
                <div>
                    <h3>Topper: Non-edible props, birthday messages, accessories.</h3>
                    <h3>Character: Non-edible figurine and collectible characters.</h3>
                </div>
            </div>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if ((!productDetails.flavor) || (!productDetails.shape) || (!productDetails.tier)) {
                return;
            }
            else {
                await API.graphql(graphqlOperation(createProduct, { input: productDetails }))
                addToCart(productDetails)
                return history.push(`/pickup`);
            }
        } catch (err) {
            console.log('error creating todo:', err)
        }
    }

    return (
        <div className="order">
            <section className="admin-wrapper">
                <AmplifyAuthenticator>
                    <ReactNotifications />
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div className="form-fields">
                            <Flavor />
                            <Shape />
                            <Optional />
                            <Description />
                            <Allergies />
                            <Review />
                        </div>
                    </form>
                </AmplifyAuthenticator>
            </section>
        </div>
    )
}

export default Order