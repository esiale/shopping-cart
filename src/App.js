import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Cart from './components/Cart';
import data from './data';
import './styles/style.css';
const App = () => {
  const [currentCart, setCurrentCart] = useState([]);

  const addToCart = (product) => {
    if (currentCart === [] || !currentCart.includes(product)) {
      setCurrentCart([
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    } else changeQuantity('increase', product);
  };

  const changeQuantity = (type, product, value) => {
    switch (type) {
      case 'increase':
        setCurrentCart(
          currentCart.map((item) => {
            if (item !== product) return item;
            return { ...item, quantity: item.quantity + 1 };
          })
        );
        break;
      case 'decrease':
        setCurrentCart(
          currentCart.map((item) => {
            if (item !== product) return item;
            return { ...item, quantity: item.quantity - 1 };
          })
        );
        break;
      case 'fixed':
        setCurrentCart(
          currentCart.map((item) => {
            if (item !== product) return item;
            return { ...item, quantity: value };
          })
        );
        break;
      default:
    }
  };

  const removeFromCart = (product) => {
    setCurrentCart(currentCart.filter((item) => item !== product));
  };

  return (
    <BrowserRouter>
      <div>
        <Nav currentCart={currentCart} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Shop"
            render={() => <Shop data={data} addToCart={addToCart} />}
          />
          <Route exact path="/Contact" component={Contact} />
          <Route
            exact
            path="/Cart"
            render={() => (
              <Cart
                currentCart={currentCart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
