import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import { CartContext } from "../context/cart";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { Button } from 'react-bootstrap';
import history from '../components/History';

var cake;
var extra_eggless = "No";
var extra_fondant = "No";
var extra_topper = "No";
var extra_characters = "No";

const PickUp = () => {

  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  products.forEach(product => {
    if (product.id === id) {
      cake = product;
      if (cake.eggless) extra_eggless = "Yes";
      if (cake.fondant) extra_fondant = "Yes";
      if (cake.topper) extra_topper = "Yes";
      if (cake.characters) extra_characters = "Yes";
    }
  });

  if (!cake) {
    return <h1>Error fetching cake data - please try placing another cake order</h1>;
  }

  return (
    <section className="pickup">
      <h1>Select Pick Up Time & Date</h1>
      <div className="pickup-form">
        <Table>
          <Thead>
            <Tr className="pickup-tablerows">
              <Th className="pickup-theader">Flavor</Th>
              <Th className="pickup-theader">Shape</Th>
              <Th className="pickup-theader">Tier</Th>
              <Th className="pickup-theader">Extras</Th>
              <Th className="pickup-theader">Description</Th>
              <Th className="pickup-theader">Price</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr className="pickup-tablerows" key={id}>
              <Td className="pickup-tablecells">{cake.flavor}</Td>
              <Td className="pickup-tablecells">{cake.shape}</Td>
              <Td className="pickup-tablecells">{cake.tier}</Td>
              <Td className="pickup-tablecells">
                Eggless: {extra_eggless}<br></br>
                Fondant: {extra_fondant}<br></br>
                Topper: {extra_topper}<br></br>
                Characters: {extra_characters}<br></br>
              </Td>
              <Td>{cake.description}</Td>
              <Td>{cake.price}</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>

      <div>
        <Button className="home-buttons" variant="btn btn-success" onClick={() =>{
          addToCart({ ...cake, id });
          history.push("/cart");
        }}>Add To Cart</Button>
      </div>
      
    </section>
  );
};

export default PickUp;
