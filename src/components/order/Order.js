import React, { useContext, useState, useEffect } from 'react';
import { API, graphqlOperation } from "aws-amplify";
import { createProduct } from '../../api/mutations';
import { CartContext } from '../../context/cart';
import { useHistory } from "react-router-dom";
import { Tooltip } from '@varld/popover';
import { Link } from 'react-scroll';
import AutoScroll from '../order/AutoScroll';
import GenericSection from '.././sections/GenericSection';
import SectionHeader from '../sections/partials/SectionHeader';
import Button from '../elements/Button';
import ReactNotifications from 'react-notifications-component';
import CreateNotification from '../notifications/Notification';
import Carousel from '../elements/Carousel';
import CarouselItem from '../elements/CarouselItem';
import Accordion from '../elements/Accordion';
import AccordionItem from '../elements/AccordionItem';
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
import ToIcon from '../icons/ToIcon';
import 'react-notifications-component/dist/theme.css';

var review_ready = false;

const Order = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    const [reviewState, setReviewState] = useState(false);
    const reviewRef = React.useRef();
    useEffect(() => {
        if (reviewState && reviewRef.current) {
          reviewRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
          setReviewState(false);
        }
    }, [reviewState]);

    const history = useHistory();

    const FLAVORS = ['Strawberry', 'Blueberry', 'Mango', 'Pineapple', 'Black Forest', 'Butterscotch', 'Chocolate Ganache'];
  
    const rand = Math.random().toString(16).substr(2, 8); // 6de5ccda

    const [productDetails, setProductDetails] = useState({ id: rand, flavor: "", shape: "", tier: "", eggless: false, fondant: false, topper: false, 
        characters: false, description: "", allergies: "", price: "0.00" });

    const { addToCart } = useContext(CartContext);
    
    const genericSectionHeader = {
        title: 'Review Selections'
    }

    function PickFlavor(e) {

        document.getElementById("flavor-selected").style.color = "white";

        //Set Product Details
        if (e.target.className === "m-0") {
            setProductDetails({ ...productDetails, flavor: e.target.innerHTML });
            CreateNotification("Saved Flavor", e.target.innerHTML);
        } else {
            setProductDetails({ ...productDetails, flavor: e.target.alt });
            CreateNotification("Saved Flavor", e.target.alt);
        }
        return;
    }

    
    function Flavor() {
        return (
                <div id="flavor" className="flavor-form">
                    <h2 class="mt-0 mb-16">Flavor</h2>
                    <p class="m-0">Select from seven of our most popular flavors.</p>
                    <br></br>
                    <Carousel>
                        {FLAVORS.map((flavor) => {

                            const flavorImg = ToIcon(flavor);

                            return(
                                <CarouselItem >
                                    <Link to="shape" onClick={(e) => PickFlavor(e)} spy={true} smooth={true}>{flavorImg}</Link>
                                    <Link to="shape" spy={true} smooth={true}>
                                        <p class="m-0" onClick={(e) => PickFlavor(e)} style={{fontSize:"80%"}}>{flavor}</p>
                                    </Link>
                                </CarouselItem>
                            );

                        })}
                    </Carousel>
                </div>
        );
    }

    function Shape() {
        return (
            <GenericSection topDivider id="shape" className="center-content">
                <div className="shape-form">
                    <h2 class="mt-0 mb-16">Shape</h2>
                    <p class="m-0">Select from circle, square or rectangle, and heart options.</p>
                    <br></br>
                    <OptionsShape render/>
                </div>
            </GenericSection >
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
            extrasReady = false;
        }
    }

    function Description() {
        return (
            <GenericSection topDivider id="description" className="center-content">
                <div className="description-form">
                    <h2 class="mt-0 mb-16">Description</h2>
                    <p class="m-0">Themes, color choices, written messages, extra details, etc.</p>
                    <br></br>
                    <textarea 
                        type="text" 
                        rows="7" 
                        placeholder="Optional field."
                        name="description"
                        id="description-box"
                        onChange={() => document.getElementById("description-selected").style.color = "white"}
                    />
                </div>
            </GenericSection>
        );
    }

    function Allergies() {
        return (
            <div>
                <GenericSection topDivider id="allergies" className="center-content">
                    <div className="allergies-form">
                        <h2 class="mt-0 mb-16">Allergies</h2>
                        <p class="m-0">Please list any allergies or dietary restrictions.</p>
                        <br></br>
                        <textarea 
                            type="text" 
                            rows="3" 
                            placeholder="Optional field."
                            name="allergies"
                            id="allergies-box"
                            onChange={() => document.getElementById("allergies-selected").style.color = "white"}
                        />
                    </div>
                </GenericSection >

                <GenericSection topDivider className="center-content" />
                    <Button tag="a" color="secondary" onClick={SaveChoices} wideMobile>
                        Review Selections
                    </Button>
                <GenericSection bottomDivider className="center-content" />
            </div>
        );
    }

    function Review() {
        if (review_ready) {
            return(
                <GenericSection topDivider className="center-content">
                    <div id="review-selections" className="container-xs" ref={reviewRef}>
                        <SectionHeader data={genericSectionHeader} className="center-content" />
                        <Accordion>
                            <AccordionItem title={"Flavor - " + productDetails.flavor} active>
                                {FlavorDescription(productDetails.flavor)}
                            </AccordionItem>
                            <AccordionItem title={"Shape - " + productDetails.shape}>
                                {ShapeDescription(productDetails.shape)}
                            </AccordionItem>
                            <AccordionItem title={TierTitle(productDetails.tier)}>
                                {TierDescription(productDetails.shape, productDetails.tier)}
                            </AccordionItem>
                            <AccordionItem title={ExtrasTitle(productDetails.eggless, productDetails.fondant, productDetails.topper, productDetails.characters)}>
                                {ExtrasDescription(productDetails.eggless, productDetails.fondant, productDetails.topper, productDetails.characters)}
                            </AccordionItem>
                            <AccordionItem title={DescriptionTitle(productDetails.description)}>
                                {DescriptionDescription(productDetails.description)}
                            </AccordionItem>
                            <AccordionItem title={AllergiesTitle(productDetails.allergies)}>
                                {AllergiesDescription(productDetails.allergies)}
                            </AccordionItem>
                        </Accordion>
                        <br></br>
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
        review_ready = true;
        setReviewState(true);
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
            <GenericSection topDivider className="center-content" id="extras">
                <div className="optional-form">
                    <h2 class="mt-0 mb-16">Extras</h2>
                    <p class="m-0" style={{textAlign: "center"}}>
                        <Tooltip  style={{textAlign: "center"}} content={"Eggless: Yogurt-based substite. Fondant: A delicious icing accessory made with 100% edible ingredients. Topper: Non-edible props, birthday messages, accessories. Character: Non-edible figurine and collectible characters."}>
                            May incur an additional charge.
                        </Tooltip>
                    </p>
                    <br></br>
                    <Options render/>
                </div>
            </GenericSection >
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
                review_ready = false;
                return history.push('/cart');
            }
        } catch (err) {
            console.log('error creating todo:', err);
        }
    }

    return (
        <form className="form-wrapper" onSubmit={handleSubmit}>
            <ReactNotifications />
            <AutoScroll />
            <Flavor/>
            <Shape />
            <Optional />
            <Description />
            <Allergies />
            <Review />
        </form>
    );
}

export default Order;