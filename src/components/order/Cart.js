import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/cart";
import { FiChevronUp } from "react-icons/fi";
import { FiChevronDown } from "react-icons/fi";
import { Tooltip } from '@varld/popover';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Link } from 'react-router-dom';
import printTier from '../cart/PrintTier';
import printExtras from '../cart/PrintExtras';
import FlavorDescription from '../descriptions/FlavorDescription';

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { cart, total, increaseAmount, decreaseAmount } = useContext(CartContext);

  if (!cart.length) {
    return <h2 class="mt-0 mb-16">Empty Cart</h2>
  }

  return (
      <section className="cart">
          <h2 class="mt-0 mb-16">Shopping Cart</h2>
          <div className="cart-form">
          <Table>
            <Thead>
              <Tr className="cart-tablerows">
                <Th className="cart-theader" style={{textAlign: "center"}}>Flavor</Th>
                <Th className="cart-theader" style={{textAlign: "center"}}>Shape</Th>
                <Th className="cart-theader" style={{textAlign: "center"}}>Tier</Th>
                <Th className="cart-theader" style={{textAlign: "center"}}>Extras</Th>
                <Th className="cart-theader" style={{textAlign: "center"}}>Notes</Th>
                <Th className="cart-theader" style={{textAlign: "center"}}>Price</Th>  
                <Th className="cart-theader" style={{textAlign: "center"}}>Quantity</Th>             
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
                <Td className="cart-tablecells">{printExtras(eggless, fondant, topper, characters)}
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
          <h3 className="mt-0 mb-12">Total: ${total}.00</h3>
        </div>

        <Link to="/order/" className="button button-primary button-wide-mobile button-sm">Add Another Item</Link>

      </section>
  );
};

export default Cart;
