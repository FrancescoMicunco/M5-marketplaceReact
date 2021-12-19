import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const DetailsProduct = () => {
  const { productId } = useParams();
  const [pDet, setPDet] = useState(null);
  const [quantity, setQuantity] = useState(0);

  const getDetail = async () => {
    try {
      const res = await fetch(`http://localhost:3001/product/${productId}`);
      if (res.ok) {
        const data = await res.json();
        setPDet(data);
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
        {pDet && (
          <>
            <Col md="3">
              <img src={pDet.image} alt={pDet.name} className="img-fluid mb-2" />
            </Col>
            <Col md="9">
              <h2>{pDet.name}</h2>
              <p>{pDet.description}</p>
              <p>$ {pDet.price}</p>
            </Col>

            <Col md="2">
              <Button
                onClick={() => {
                  let q = quantity + 1;
                  setQuantity(q);
                  console.log("The quantity is actually: ", quantity);
                }}
                variant="success"
              >
                Add to cart
              </Button>{" "}
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default DetailsProduct;
