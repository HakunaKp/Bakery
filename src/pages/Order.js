import React, { useState, useContext } from 'react'
import { AmplifyAuthenticator } from '@aws-amplify/ui-react'
import { API, graphqlOperation } from "aws-amplify"
import { createProduct } from '../api/mutations'
import 'react-notifications-component/dist/theme.css'
import 'animate.css'
import Carousel from "react-elastic-carousel"
import Item from "../components/Item"
import { ProductContext } from '../context/products'
import { CartContext } from "../context/cart";
import Options from '../components/ToggleSwitch/Options'
import OptionsShape from '../components/ToggleSwitch/OptionsShape'
import ReactNotifications from 'react-notifications-component'
import { store } from 'react-notifications-component'
import Accordion from '../components/Accordion/Accordion'
import "../components/Accordion/Accordion.css"
import history from '../components/History'

var reviewReady = false

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

    const rand = Math.random().toString(16).substr(2, 8); // 6de5ccda
    const [productDetails, setProductDetails] = useState({ id: rand, flavor: "", shape: "", tier: "", eggless: false, fondant: false, topper: false, 
        characters: false, description: "", price: "0.00" })

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 900, itemsToShow: 3 },
    ]
    
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
                <Item className="Flavor" id="Strawberry" onClick={(e) => PickFlavor(e)} >Strawberry</Item>
                <Item className="Flavor" id="Blueberry" onClick={(e) => PickFlavor(e)} >Blueberry</Item>
                <Item className="Flavor" id="Mango" onClick={(e) => PickFlavor(e)} >Mango</Item>
                <Item className="Flavor" id="Pineapple" onClick={(e) => PickFlavor(e)} >Pineapple</Item>
                <Item className="Flavor" id="Black-Forest" onClick={(e) => PickFlavor(e)} >Black Forest</Item>
                <Item className="Flavor" id="Butterscotch" onClick={(e) => PickFlavor(e)} >Butterscotch</Item>
                <Item className="Flavor" id="Chocolate-Ganache" onClick={(e) => PickFlavor(e)} >Chocolate Ganache</Item>
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
        if (extrasReady && document.getElementById("description-box") && document.getElementsByClassName("tier-button")) {
            var tiers = document.getElementsByClassName("tier-button")
            var has_eggs = ((document.getElementById("Eggless").className) === "extra-choices text-custom")
            var has_fondant = ((document.getElementById("Fondant").className) === "extra-choices text-custom")
            var has_topper = ((document.getElementById("Topper").className) === "extra-choices text-custom")
            var has_characters = ((document.getElementById("Characters").className) === "extra-choices text-custom")
            for (var i = 0; i < tiers.length; i++) {
                if (tiers[i].checked) setProductDetails({...productDetails, tier: tiers[i].id, eggless: has_eggs, fondant: has_fondant, topper: has_topper, 
                characters: has_characters, description: document.getElementById("description-box").value, price: tiers[i].value })
            }

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
                    rows="8" 
                    placeholder="Enter Cake Description and list any dietary restrictions."
                    name="description"
                    id="description-box"
                />
                <input type="button" value="Review" onClick={SaveChoices} />
            </div>
        )
    }

    function getDescription(string) {
        if (string === "Blueberry") {
            return "A rich inner-filling topped with blueberry flavored whipped topping and fresh blueberries"
        } else if (string === "Strawberry") {
            return "A rich inner-filling topped with strawberry flavored whipped topping and fresh strawberry slices"
        } else if (string === "Mango") {
            return "A rich inner-filling topped with mango flavored whipped topping and fresh mango slices"
        } else if (string === "Pineapple") {
            return "A rich inner-filling topped with pineapple flavored whipped topping and fresh mango slices"
        } else if (string === "Black Forest") {
            return "A rich inner-filling topped with whipped topping and maraschino cherries in syrup"
        } else if (string === "Butterscotch") {
            return "A rich inner-filling topped with butterscotch flavored whipped topping"
        } else if (string === "Chocolate Ganache") {
            return "A rich inner-filling coated with a delicious layer of melted chocolate"
        } else return
    }

    function Review() {
        if (reviewReady) {
            return(
                <div className="review-form">
                    <h1 id="review-header">Review Selections</h1>
                    <Accordion
                        title= {"Flavor - " + productDetails.flavor}
                        content= {getDescription(productDetails.flavor)}
                    />
                    <Accordion
                        title= {"Shape - " + productDetails.shape}
                    />
                    <Accordion
                        title= {"Tier - " + productDetails.tier}
                        content= {productDetails.tier}
                    />
                    <Accordion
                        title= "Extras"
                        content= {"Eggs: " + productDetails.eggless + "Fondant: " + productDetails.fondant
                        + "Toppers: " + productDetails.topper + "Characters: " + productDetails.characters}
                    />
                    <Accordion
                        title= "Description"
                        content= {productDetails.description}
                    />
                    <input
                        id="submit-button" 
                        type="submit" 
                        value="Submit" 
                    />
                </div>
            )
        } else return <></>
    }

    // Goes to review
    function SaveChoices() {
        SaveForm(true)
        reviewReady = true
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
                <h1>Extras (Optional)</h1>
                <Options render/>
            </div>
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!productDetails.flavor || !productDetails.shape || !productDetails.tier) return;
            await API.graphql(graphqlOperation(createProduct, { input: productDetails }))
            history.push(`/pickup/${productDetails.id}`)
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
                            <Review />
                        </div>
                    </form>
                </AmplifyAuthenticator>
            </section>
        </div>
    )
}

export default Order