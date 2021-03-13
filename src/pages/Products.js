import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ProductContext } from '../context/products';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Products = () => {
    const { products } = useContext(ProductContext);

    if (!products.length) {
        return <h3>No Products Available</h3>
    }
    return (
        <div className="products">
            <Carousel fade="true" className="carousel-container" transition="5000">
                {products.map(({ image: image, id, title }) => (
                    <Carousel.Item key={id} className="product">
                        <div className="product-image">
                            <img className="carousel-image" src={image} alt={title} />
                        </div>
                        <Link to={`products/${id}`} className="btn product-link">details</Link>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}
export default Products