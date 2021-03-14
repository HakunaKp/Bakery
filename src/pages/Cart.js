import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import history from '../components/History';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

var found = false;
var cake;

const Cart = () => {

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext)

  products.forEach(product => {
    if (!found && product.id === id) {
      cake = product;
      addToCart({ ...product, id });
      found = true;
    }
  });

  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext)
  if (!cart.length) {
    return <h1>Empty Cart</h1>
  }
  
  return (
    <section className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-form">
        {cart.map(({ id, title, price, amount }) => (
        <Table>
          <Thead>
            <Tr className="cart-tablerows">
            <article key={id} className="cart-item">
                <Th className="cart-theader">Flavor</Th>
                <Th className="cart-theader">Shape</Th>
                <Th className="cart-theader">Tier</Th>
                <Th className="cart-theader">Extras</Th>
                <Th className="cart-theader">Description</Th>
                <Th className="cart-theader">Price</Th>
                <Th className="cart-theader">Quantity</Th>
            </article>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="cart-tablerows">
            <article key={id} className="cart-item">
              <Td className="cart-tablecells">{cake.flavor}</Td>
              <Td className="cart-tablecells">{cake.shape}</Td>
              <Td className="cart-tablecells">{cake.tier}</Td>
              <Td className="cart-tablecells">
                Eggless: {(cake.eggless).toString()}<br></br>
                Fondant: {(cake.fondant).toString()}<br></br>
                Topper: {(cake.topper).toString()}<br></br>
                Characters: {(cake.characters).toString()}<br></br>
              </Td>
              <Td>{cake.description}</Td>
              <Td>{cake.price}</Td>
              <Td>
                  <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
                  <p>{amount}</p>
                  <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
              </Td>
            </article>
            </Tr>
          </Tbody>
        </Table>
        ))}
      </div>

      <div>
        <h3>Total: $ {total}</h3>
      </div>

      <div>
        <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button>
      </div>
      
    </section>
  );
};

export default Cart;
