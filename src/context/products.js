import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";
import { listProducts } from "../api/queries";
import { processOrder } from "../api/mutations";
import { Auth } from 'aws-amplify';

var customer_email, customer_username;

Auth.currentAuthenticatedUser().then((user) => {
  customer_username = user.username;
  customer_email = user.attributes.email;
});

const ProductContext = React.createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const checkout = async (orderDetails) => {

    const payload = {
      id: uuidv4(),
      username: customer_username,
      email: customer_email,
      ...orderDetails
    };
    try {
      await API.graphql(graphqlOperation(processOrder, { input: payload }));
      console.log("Order is successful");
    } catch (err) {
      console.log(payload)
      console.log(err)
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // Switch authMode to API_KEY for public access
      const { data } = await API.graphql({
        query: listProducts,
        authMode: "API_KEY"
      });
      const products = data.listProducts.items;
      setProducts(products);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading, checkout }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContext, ProductProvider };
