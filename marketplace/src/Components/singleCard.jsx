import React from "react";
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const SingleCard = ({products}) =>{
    
    return(
<>
    
    {products.map((e)=>
<Card max-width="100px">
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{e.name}</Card.Title>
    console.log(e.name)
    <Card.Text>
      {e.description}
    </Card.Text>
<Link to={`/details/${e.title}`}>
    <Button variant="primary">Show details</Button>
</Link>
    
  </Card.Body>
</Card>
    
    )}
    
</>
    )
}

export default SingleCard