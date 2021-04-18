import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { Tooltip } from '@varld/popover';
import printTier from '../cart/PrintTier';
import printExtras from '../cart/PrintExtras';
import FlavorDescription from '../descriptions/FlavorDescription';

const Cart = () => {

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
                <Th className="cart-theader">Notes</Th>
                <Th className="cart-theader">Price</Th>  
                <Th className="cart-theader">Quantity</Th>             
              </Tr>
            </Thead>
            <Tbody>
            {cart.map(({ id, flavor, shape, tier, eggless, fondant, topper, characters, price, amount, description, allergies }) => (
              <Tr className="cart-tablerows" key={id}>
                <Td className="cart-tablecells">
                  <Tooltip content={FlavorDescription(flavor)}>
                    {flavor}
                  </Tooltip>
                </Td>
                <Td className="cart-tablecells">{shape}</Td>
                <Td className="cart-tablecells">{printTier(tier)}</Td>
                <Td className="cart-tablecells">
                  Eggless: {printExtras(eggless)}<br></br>
                  Fondant: {printExtras(fondant)}<br></br>
                  Topper: {printExtras(topper)}<br></br>
                  Character: {printExtras(characters)}<br></br>
                </Td>

                <Td>              
                  <Tooltip content={description}>
                    Description
                  </Tooltip>
                  <Tooltip content={allergies}>
                    Allergies
                  </Tooltip>
                </Td>

                <Td>${price}</Td>
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

      </section>
    </AmplifyAuthenticator>
  );
};

export default Cart;
