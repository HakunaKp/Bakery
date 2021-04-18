import React, { useContext, useState } from 'react';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from '../../api/mutations';
import { CartContext } from '../../context/cart';
import { useHistory } from "react-router-dom";
import { Tooltip } from '@varld/popover';

import Button from '../elements/Button';

import ReactNotifications from 'react-notifications-component';
import CreateNotification from '../notifications/Notification';

import Carousel from 'react-elastic-carousel';
import Item from './CarouselItem';

import Accordion from '../order/accordion/Accordion';
import FlavorDescription from '../descriptions/FlavorDescription';
import ShapeDescription from '../descriptions/ShapeDescription';
import TierTitle from '../descriptions/TierTitle';
import TierDescription from '../descriptions/TierDescription';
import ExtrasTitle from '../descriptions/ExtrasTitle';
import ExtrasDescription from '../descriptions/ExtrasDescription';
import DescriptionTitle from '../descriptions/DescriptionTitle';
import DescriptionDescription from '../descriptions/DescriptionDescription';
import AllergiesTitle from '../descriptions/AllergiesTitle';
import AllergiesDescription from '../descriptions/AllergiesDescription';
import Options from '../order/ToggleSwitch/Options';
import OptionsShape from '../order/ToggleSwitch/OptionsShape';

import 'react-notifications-component/dist/theme.css';
import './orderstyles.css'

import GenericSection from '.././sections/GenericSection';

var reviewReady = false;

const Order = () => {

    const history = useHistory();

    const FLAVORS = ['Strawberry', 'Blueberry', 'Mango', 'Pineapple', 'Black Forest', 'Butterscotch', 'Chocolate Ganache'];

    const rand = Math.random().toString(16).substr(2, 8); // 6de5ccda

    const [productDetails, setProductDetails] = useState({ id: rand, flavor: "", shape: "", tier: "", eggless: false, fondant: false, topper: false, 
        characters: false, description: "", allergies: "", price: "0.00" });

    const { addToCart } = useContext(CartContext);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 2 },
        { width: 900, itemsToShow: 3 },
    ];
    
    function PickFlavor(e) {
        //Set Product Details
        setProductDetails({ ...productDetails, flavor: e.target.innerHTML });
        //Jump to PickShape
        return document.getElementById("pick-shape").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    function Flavor() {
        return (
        <div className="flavor-form">
            <h2 class="mt-0 mb-16">Flavor (Required)</h2>
            <p class="m-0">Select from seven of our most popular flavors.</p>
            <br></br>
            <Carousel breakPoints={breakPoints} fade="true" transition="5000">
            {FLAVORS.map((flavor) => {
                if (flavor === 'Chocolate Ganache') return <Item className="Flavor" id='Chocolate-Ganache' onClick={(e) => PickFlavor(e)} >{flavor}</Item>;
                if (flavor === 'Black Forest') return <Item className="Flavor" id='Black-Forest' onClick={(e) => PickFlavor(e)} >{flavor}</Item>;
                return <Item className="Flavor" id={flavor} onClick={(e) => PickFlavor(e)} >{flavor}</Item>;
            })}
            </Carousel>
            <br></br>
        </div>
        );
    }

    function Shape() {
        return (
            <div className="shape-form" id="pick-shape">
                <h2 class="mt-0 mb-16">Shape (Required)</h2>
                <p class="m-0">Select from circle, square or rectangle, and heart options.</p>
                <br></br>
                <OptionsShape render/>
                <br></br>
            </div>
        );
    }

    function SaveForm(extrasReady){
        if (!productDetails.flavor) return CreateNotification("Error", "Flavor is Required!");
        
        if (extrasReady && document.getElementById("description-box") && document.getElementById("allergies-box") && document.getElementsByClassName("tier-button"))
        {
            var tiers = document.getElementsByClassName("tier-button");
            var tierSelected = false;
            var has_eggs = ((document.getElementById("Eggless").className) === "extra-choices text-custom");
            var has_fondant = ((document.getElementById("Fondant").className) === "extra-choices text-custom");
            var has_topper = ((document.getElementById("Topper").className) === "extra-choices text-custom");
            var has_characters = ((document.getElementById("Characters").className) === "extra-choices text-custom");       

            for (var i = 0; i < tiers.length; i++) 
            {
                if (tiers[i].checked) {
                    setProductDetails({...productDetails, tier: tiers[i].id, eggless: has_eggs, fondant: has_fondant, topper: has_topper, 
                        characters: has_characters, description: document.getElementById("description-box").value, 
                        allergies: document.getElementById("allergies-box").value, price: tiers[i].value 
                    });
                    tierSelected = true;
                }
            }

            if (!tierSelected && !productDetails.tier) return CreateNotification("Error", "Tier is required!");

            // Jump to review
            if (document.getElementById("review-header")) document.getElementById("review-header").scrollIntoView({behavior: "smooth", block: "start", inline: "start"}); 
            extrasReady = false;
        }
    }

    function Description() {
        return (
            <div className="description-form">
                <h2 class="mt-0 mb-16">Description (Optional)</h2>
                <textarea 
                    type="text" 
                    rows="7" 
                    placeholder="- Theme&#10;- Color Choices&#10;- Written Messages&#10;- Fondant Details&#10;- Desired Toppers&#10;- Desired Characters&#10;- Etc."
                    name="description"
                    id="description-box"
                />
                <br></br>
                <br></br>
            </div>
        );
    }

    function Allergies() {
        return (
            <div>
                <div className="allergies-form">
                    <h2 class="mt-0 mb-16">Allergies (Optional)</h2>
                    <textarea 
                        type="text" 
                        rows="3" 
                        placeholder="Please list any allergies or dietary restrictions (Leave blank if not applicable)"
                        name="allergies"
                        id="allergies-box"
                    />
                </div>
                <br></br>
                <Button tag="a" color="secondary" onClick={SaveChoices} wideMobile>
                    Save & Review
                </Button>
            </div>
        );
    }

    function Review() {
        if (reviewReady) {
            return(
                <GenericSection topDivider className="center-content">
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
                        <Button tag="a" color="primary" onClick={handleSubmit} wideMobile>
                            Add To Cart
                        </Button>
                    </div>
                </GenericSection>
            );
        } else return <></>;
    }

    // Goes to review
    function SaveChoices() {
        SaveForm(true);
        reviewReady = true;
        if (document.getElementById("review-selections")){
            document.getElementById("review-selections").scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
        }
        return;
    }

    function SaveShape(){
        if (document.getElementById("Circle") && document.getElementById("Rectangle") && document.getElementById("Heart")){
            if (document.getElementById("Circle").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({...productDetails, shape: "Circle"});
            }
            if (document.getElementById("Rectangle").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({ ...productDetails, shape: "Rectangle" });
            }
            if (document.getElementById("Heart").className === "switch-toggle switch-toggle--on") {
                return setProductDetails({ ...productDetails, shape: "Heart" });
            }
        }
        return;
    }

    function Optional(){
        SaveShape();
        return (
            <div className="optional-form" id="pick-option">
                <h2 id= "pick-extras" class="mt-0 mb-16">Extras (Optional)</h2>
                <p class="m-0">
                    <Tooltip content={"Eggless: Yogurt-based substite. Fondant: A delicious icing accessory made with 100% edible ingredients. Topper: Non-edible props, birthday messages, accessories. Character: Non-edible figurine and collectible characters."}>
                        For an extra charge.
                    </Tooltip>
                </p>
                <br></br>
                <Options render/>
                <br></br>
            </div>
        );
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if ((!productDetails.flavor) || (!productDetails.shape) || (!productDetails.tier)) {
                return;
            }
            else
            {
                await API.graphql(graphqlOperation(createProduct, { input: productDetails }));
                addToCart(productDetails);
                reviewReady = false;
                return history.push('/cart');
            }
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }

    return (
                <AmplifyAuthenticator>
                    <ReactNotifications />
                    <form className="form-wrapper" onSubmit={handleSubmit}>
                        <div>
                            <Flavor />
                            <Shape />
                            <Optional />
                            <Description />
                            <Allergies />
                            <Review />
                        </div>
                    </form>
                </AmplifyAuthenticator>
    );
}

export default Order;