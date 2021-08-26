const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <div className="product">
      <div className="product-main">
        <p>{product.name}</p>
        <img src={product.image} alt="" />
      </div>
      <div className="product-footer">
        <p>{product.price}$</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
