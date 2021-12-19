import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleCard = ({props}) => {

return (
  <Link to={`/product/${props.id}`}>
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Card.Text>{props.price}</Card.Text>
        <Button variant="primary">More Details</Button>
      </Card.Body>
    </Card>
  </Link>
);
   };

export default SingleCard;

