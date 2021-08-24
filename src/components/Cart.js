const Cart = (props) => {
  const { currentCart, changeQuantity, removeFromCart } = props;

  const handleChange = (e, product) => {
    e.preventDefault();

    const value = e.target.value || 0;
    changeQuantity('fixed', product, parseInt(value));
  };

  const handleDecrease = (product) => {
    if (product.quantity === 1 || product.quantity === 0)
      return removeFromCart(product);
    changeQuantity('decrease', product);
  };

  const handleOnBlur = (e, product) => {
    if (e.target.value === '') return changeQuantity('fixed', product, 1);
  };

  return (
    <div className="cart">
      {currentCart.map((product, index) => {
        return (
          <div key={`product${index + 1}`}>
            <img src={product.image} alt="" />
            <p>{product.name}</p>
            <div>
              <span
                className="material-icons-outlined"
                onClick={() => changeQuantity('increase', product)}
              >
                add
              </span>
              <input
                type="text"
                value={product.quantity || ''}
                onChange={(e) => handleChange(e, product)}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onBlur={(e) => handleOnBlur(e, product)}
              />
              <span
                className="material-icons-outlined"
                onClick={(e) => handleDecrease(product)}
              >
                remove
              </span>
            </div>
            <p>{product.price * product.quantity}$</p>
            <span
              className="material-icons-outlined"
              onClick={() => removeFromCart(product)}
            >
              delete
            </span>
          </div>
        );
      })}
      <div className="cart-footer">
        <p>
          Total:{' '}
          {currentCart.reduce(
            (total, previous) => total + previous.price * previous.quantity,
            0
          )}
          $
        </p>
        <button
          disabled={currentCart.length === 0}
          onClick={() => alert('Your order has been placed!')}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Cart;
