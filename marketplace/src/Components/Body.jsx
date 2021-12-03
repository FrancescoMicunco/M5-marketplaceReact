import { useEffect, useState } from "react";

const Body = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
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

  return products.map((product) => {
    <div className="container">
      <h2 className="my-4 text-center">Choose A Product To Buy</h2>
      <div className="row product-container justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
              <a href="/detailsPage">
                <img className="card-img-top" src={product.imageUrl} alt="" />
              </a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="/detailsPage">{product.name}</a>
                </h4>
                <h5>{product.price}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.brand}</p>
                <p className="card-text">{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
  });
};

export default Body;
