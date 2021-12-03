const Backoffice = () => {
  return (
    <>
      <div className="container">
        <h2 className="my-4 text-center page-heading">Add A New Product</h2>
        <div className="alertMsg d-none" role="alert" />
        <form>
          <div className="form-group">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description">Product Description</label>
            <textarea
              className="form-control"
              id="description"
              placeholder="Description..."
              rows={3}
              required
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <label htmlFor="brand">Brand</label>
            <input
              type="text"
              className="form-control"
              id="brand"
              placeholder="Brand"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="image">Product Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              placeholder="Image Link - https://source.unsplash.com/random/800x600"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              className="form-control"
              id="price"
              placeholder="£10"
              required
            />
          </div>
          <div className="d-flex justify-content-between btn-area">
            <div className="creation">
              <button className="btn btn-success create-edit">Create</button>
              <button type="reset" className="btn btn-warning ml-auto">
                Clear
              </button>
            </div>
            <div className="deletion"></div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Backoffice;
