import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import history from '../components/History';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

var extra_eggless = "No";
var extra_fondant = "No";
var extra_topper = "No";
var extra_characters = "No";

const Cart = () => {

  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext)
  if (!cart.length) {
    return <h1>Empty Cart</h1>
  }

  if (cart.eggless) extra_eggless = "Yes";
  if (cart.fondant) extra_fondant = "Yes";
  if (cart.topper) extra_topper = "Yes";
  if (cart.characters) extra_characters = "Yes";

  return (
    <section className="cart">
      <h1>Shopping Cart</h1>
      <div className="cart-form">
        <Table>
          <Thead>
            <Tr className="cart-tablerows">
              <Th className="cart-theader">Flavor</Th>
              <Th className="cart-theader">Shape</Th>
              <Th className="cart-theader">Tier</Th>
              <Th className="cart-theader">Extras</Th>
              <Th className="cart-theader">Description</Th>
              <Th className="cart-theader">Price</Th>
              <Th className="cart-theader">Quantity</Th>
            </Tr>
          </Thead>
          <Tbody>
          {cart.map(({ id, flavor, shape, tier, description, price, amount }) => (
            <Tr className="cart-tablerows" key={id}>
              <Td className="cart-tablecells">{flavor}</Td>
              <Td className="cart-tablecells">{shape}</Td>
              <Td className="cart-tablecells">{tier}</Td>
              <Td className="cart-tablecells">
                Eggless: {extra_eggless}<br></br>
                Fondant: {extra_fondant}<br></br>
                Topper: {extra_topper}<br></br>
                Characters: {extra_characters}<br></br>
              </Td>
              <Td>{description}</Td>
              <Td>{price}</Td>
              <Td>
                  <button onClick={() => increaseAmount(id)}><FiChevronUp /></button>
                  <p>{amount}</p>
                  <button onClick={() => decreaseAmount(id, amount)}><FiChevronDown /></button>
              </Td>
            </Tr>
            ))}
          </Tbody>
        </Table>
      </div>

      <div>
        <h3>Total: ${total}.00</h3>
      </div>

      <div>
        <button className="btn" onClick={() => history.push("/checkout")}>Checkout</button>
      </div>
      
    </section>
  );
};

export default Cart;
