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
        <span
          className="material-icons-outlined"
          onClick={() => addToCart(product)}
        >
          add_shopping_cart
        </span>
      </div>
    </div>
  );
};

export default Product;
