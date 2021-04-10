import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import history from '../components/History';
import printTier from '../components/Cart/PrintTier';
import printExtras from '../components/Cart/PrintExtras';
import printText from '../components/Cart/PrintText';

const Cart = () => {

  const { date, time } = useParams();
  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart.length) {
    return <h1>Empty Cart</h1>
  }

  return (
    <AmplifyAuthenticator>
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
                <Th className="cart-theader">Price</Th>
                <Th className="cart-theader">Quantity</Th>
              </Tr>
            </Thead>
            <Tbody>
            {cart.map(({ id, flavor, shape, tier, eggless, fondant, topper, characters, price, amount }) => (
              <Tr className="cart-tablerows" key={id}>
                <Td className="cart-tablecells">{flavor}</Td>
                <Td className="cart-tablecells">{shape}</Td>
                <Td className="cart-tablecells">{printTier(tier)}</Td>
                <Td className="cart-tablecells">
                  Eggless: {printExtras(eggless)}<br></br>
                  Fondant: {printExtras(fondant)}<br></br>
                  Topper: {printExtras(topper)}<br></br>
                  Characters: {printExtras(characters)}<br></br>
                </Td>
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

        {printText(cart[0].description, cart[0].allergies)}

        <div>
          <h3>Total: ${total}.00</h3>
        </div>

        <div>
          <button className="btn" onClick={() => history.push(`/order`)}>Add Another Cake to Order</button>
        </div>

        <div>
          <button className="btn" onClick={() => history.push(`/checkout/${date}/${time}/`)}>Checkout</button>
        </div>

      </section>
    </AmplifyAuthenticator>
  );
};

export default Cart;
