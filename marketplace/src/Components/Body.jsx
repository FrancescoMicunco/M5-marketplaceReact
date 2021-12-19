import { useEffect, useState } from "react";
import SingleCard from "./singleCard";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useParams} from 'react-router-dom';
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom";

const Body = () => {
 
  let products = []
   
  // const [productsName, setProductsName] = useState([]);
  // const [productsId, setProductsId] = useState([]);

  const getProducts = async () => {
    
    try {
      const res = await fetch("http://localhost:3001/product");
      if (res.ok){
        const data = await res.json();
      // products = await data;
      console.log(data);
data.map((e)=>{
  return <h1>{e.name}</h1>
// (
// <>
//       <h2 className="my-4 text-center">Choose A Product To Buy</h2>
//       <Container>
//         <Row className="d-flexbox">
//           <Col className="col-md-3">
          
//             {/* <SingleCard products = {products}/> */}
//             {products.map((e) => (
//               <Card max-width="100px">
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>{e.name}</Card.Title>
//                    <Card.Text>{e.description}</Card.Text>
//                   <Link to={`/details/${e.title}`}>
//                     <Button variant="primary">Show details</Button>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             ))}
//           </Col>
//         </Row>
//       </Container>
//     </>
//   )
  
})

      }
      } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  };

export default Body;
