const Body = () => {
  return (
    <div className="container">
      <h2 className="my-4 text-center">Choose A Product To Buy</h2>
      <div className="row product-container justify-content-center">
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-primary text-center"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
