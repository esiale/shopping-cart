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
        <li>
          <a href="https://github.com/esiale" target="_blank" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
      <div className="nav-cart">
        <Link to="/cart">
          <span className="material-icons-outlined">shopping_cart</span>
        </Link>
        <p>
          {props.currentCart.reduce((total, prev) => total + prev.quantity, 0)}
        </p>
      </div>
    </nav>
  );
};

export default Nav;
