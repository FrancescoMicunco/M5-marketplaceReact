
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

const DetailsProduct = () => {
  const { productId } = useParams();
const [pDet, setPDet] = useState(null)

  const getDetail = async () => {
    try {
      const res = await fetch(`http://localhost:3001/product/${productId}`);
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setPDet(data)
      }
    } catch (error) {
      console.log("server error!");
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
  <Container>
      <Row>
          {
              pDet &&
              <>
              <Col md="6">
              <img src={pDet.image} alt={pDet.name}/>
              </Col>
              <Col md="6">
                  <h2>{pDet.name}</h2>
                  <p>{pDet.description}</p>
                  <p>{pDet.price}</p>
              </Col>
              </>
          }
      </Row>
  </Container>
  )
};

export default DetailsProduct;
