import Product from './Product';
import uniqid from 'uniqid';

const Shop = (props) => {
  const { data, addToCart } = props;
  return (
    <div className="shop">
      {data.map((product, index) => (
        <Product key={uniqid()} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Shop;
