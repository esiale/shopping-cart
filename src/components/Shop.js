import Product from './Product';
import uniqid from 'uniqid';

const Shop = (props) => {
  const { data, addToCart } = props;
  return (
    <div className="shop-wrapper">
      <div className="shop-content">
        {data.map((product, index) => (
          <Product key={uniqid()} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
