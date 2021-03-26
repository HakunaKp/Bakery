import React, {Component} from "react";
import { Button } from 'react-bootstrap';
import Carousel from "react-elastic-carousel";
import Item from "../components/Item";
import history from '../components/History';

export default class Home extends Component {
    render() {
        return(
            <div className='home'>
                <h1>Monica's Specialty Pastry Cakes</h1>
                <Carousel disableArrowsOnEnd={false}>
                    <div className="item">
                        <Item className="homeCarousel">
                            <div className="home-content">
                                <p>Everyone's favorite for sweet treats handmade with love.</p>
                                <p>No party is complete without a decorated cake.</p>
                                <p>Perfect for birthdays, weddings, anniversaries or any other special event.</p>
                            </div>
                        </Item>
                    </div>
                    <div className="item">
                        <Item className="homeCarousel">
                            <div className="order-content">
                                <h1>Ready to place an order?</h1>
                                <p>Placing an order has never been easier! Simply click below to customize your cake and begin your order.</p>
                                <Button  className="home-buttons" variant="btn btn-success" onClick={() => history.push('/order')}>Begin Order</Button>
                            </div>
                        </Item>
                    </div>
                    <div className="item">
                        <Item className="homeCarousel">
                            <div className="gallery-content">
                                <h1>Featured Cakes:</h1>
                                <p>Want to see more? Click below to view the full portfolio.</p>
                                <Button className="home-buttons" variant="btn btn-success" onClick={() => history.push('/gallery')}>View Portfolio</Button>
                            </div>
                        </Item>
                    </div>
                </Carousel>
            </div>
        )
    }
}
