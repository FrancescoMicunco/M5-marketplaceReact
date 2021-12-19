import { useEffect, useState } from "react";
import SingleCard from "./singleCard";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";


const Body = () => {
  const [products, setProducts] = useState(null)
  const url = "http://localhost:3001/product";

const getProduct = async ()=>{
try {
  const res = await fetch(url)
  if(res.ok){
    const data = await res.json()
    console.log(data)
    setProducts(data)
    
  }
} catch (error) {
  console.log("server error")
}
  }
  
  useEffect(()=>{
getProduct()
  }, [])
  
return  (
  <Container>
    <Row>
      {products &&
      products.map(p=>(
        <Col key={products.id} md="3">
          <SingleCard props={p}/>
        </Col>
      ))
    }
    </Row>
    
  </Container>
)

};

export default Body;
