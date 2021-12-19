import React from "react";
import { Container, Button } from "react-bootstrap";
import { useState, useEffect } from "react";

const Cart = () => {
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  const getCart = async () => {
    try {
      const res = await fetch("http://localhost:3001/cart");
      if (res.ok) {
        const data = await res.json();
const pId=data.productId
console.log(pId)
const quan=data.quantity
        setProductId(data.productId);
          setQuantity(data.quantity);
        console.log("those are the values", productId, quantity)
        } else {
          console.log("error in the cart")
        }
      
    } catch (error) {}
  };

  useEffect(() => {
    getCart();
  }, []);

  useEffect(() => {
    return;
  }, [quantity]);

  return (
    <Container>
      {
        <>
          <h2>This is You Shopping Cart {quantity} </h2>
          

          {/* <Button variant="outline-primary">add</Button>
            <Button variant="outline-primary">reduce</Button>
            <Button variant="outline-danger">delete</Button> */}
        </>
      }
    </Container>
  );
};

export default Cart;
