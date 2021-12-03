import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailsPage = () => {
  const { productId } = useParams();

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/products/" + productId,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) throw new Error("Fetch Failed");
      const body = await response.json();
      console.log(body);
      setProducts(body);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      {products && (
        <>
          <div class="container">
            <div className="col-12 col-md-6">
              <img src={products.imageUrl} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-6">
              <div className="row">
                <div className="col-12 text-center">
                  <p>
                    <strong>Brand - </strong>
                    {products.brand}
                  </p>
                </div>
                <div className="col-12 text-center">
                  <p>
                    <strong>Description - </strong>
                    {products.description}
                  </p>
                </div>
                <div className="col-12 text-center">
                  <p>
                    <strong>Price - </strong>£$
                    {products.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DetailsPage;
