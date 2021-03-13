import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";

const Cake = () => {
    const history = useHistory();
    const { products } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const index = useParams();
    const product = products[index.id];

  if (!product) {
    return <h3>Loading...</h3>;
  }

  const { id, flavor, shape, tier, eggless, fondant, topper, characters, description, price } = product;

  return (
    <section className="product-details">
      <div className="detail-description">
        <h2>{flavor}</h2>
        <p>{shape, tier}</p>
        <p>{eggless, fondant, topper, characters, description}</p>
        <h4>Price - $ {price}</h4>
        <button
          className="btn"
          onClick={() => {
            addToCart({ ...product, id });
            history.push("/cart");
          }}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
};

export default Cake;
