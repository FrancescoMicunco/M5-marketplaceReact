import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Cart from "./Cart";

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
        console.log(pDet);
      }
    } catch (error) {
      console.log("server error!");
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const modifyCart = async () => {
    console.log("this is the object", pDet)
    console.log("this is the quantity", quantity)
    const objectToAdd = {pDet, quantity}
    console.log(objectToAdd)
    try {
      const res = await fetch(`http://localhost:3001/cart`, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(objectToAdd),
      });
          } catch (error) {
      console.log("server error!");
    }
  };

  

  return (
    <Container>
      <Row>
        {pDet && (
          <>
            <Col md="3">
              <img
                src={pDet.image}
                alt={pDet.name}
                className="img-fluid mb-2"
              />
            </Col>
            <Col md="9">
              <h2>{pDet.name}</h2>
              <p>{pDet.description}</p>
              <p>$ {pDet.price}</p>
              <p>Quantity in cart {quantity}</p>
            </Col>

            <Col md="2">
              <Button
                onClick={() => {
                  alert("are you shure?")
                  let q = quantity + 1;
                  console.log(q)
                  setQuantity(q);
                  console.log(quantity)
                  modifyCart();
                  
                }}
                variant="success"
              >
                Add to cart
              </Button>
            </Col>
            <Col md="2">
              <Button
                onClick={() => {
                  if (quantity <= 0) {
                    alert("This product is not in the cart");
                  } else {
                    let q = quantity - 1;
                    setQuantity(q);
                    modifyCart()
                  }
                }}
                variant="success"
              >
                Reduce to cart
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default DetailsProduct;
