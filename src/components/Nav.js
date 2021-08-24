import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <nav>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
      <Link to="/cart">
        <div className="cart">
          <span className="material-icons-outlined">shopping_cart</span>
          <p>
            {props.currentCart.reduce(
              (total, prev) => total + prev.quantity,
              0
            )}
          </p>
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
