import React from "react";
import { Container, Button } from "react-bootstrap";

const Cart = ({props})=>{


    return (
      <Container>
        <h2>This is You Shopping Cart</h2>
        <h3>
          {props.name} quantity 
        </h3>
        <Button variant="outline-primary">add</Button>
        <Button variant="outline-primary">reduce</Button>
        <Button variant="outline-danger">delete</Button>
      </Container>
    );
}

export default Cart