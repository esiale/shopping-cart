import { HashRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import data from '../data';

const Main = () => {
  const [currentCart, setCurrentCart] = useState([]);

  const addToCart = (product) => {
    if (
      currentCart === [] ||
      !currentCart.some((item) => item.id === product.id)
    ) {
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
            if (item.id !== product.id) return item;
            return { ...item, quantity: item.quantity + 1 };
          })
        );
        break;
      case 'decrease':
        setCurrentCart(
          currentCart.map((item) => {
            if (item.id !== product.id) return item;
            return { ...item, quantity: item.quantity - 1 };
          })
        );
        break;
      case 'fixed':
        setCurrentCart(
          currentCart.map((item) => {
            if (item.id !== product.id) return item;
            return { ...item, quantity: value };
          })
        );
        break;
      default:
    }
  };

  const removeFromCart = (product) => {
    setCurrentCart(currentCart.filter((item) => item.id !== product.id));
  };

  const clearCart = () => {
    setCurrentCart([]);
  };

  return (
    <HashRouter>
      <div className="wrapper">
        <div className="top-overlay" />
        <div className="top">
          <Header />
          <Nav currentCart={currentCart} />
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/Shop"
            render={() => <Shop data={data} addToCart={addToCart} />}
          />
          <Route
            exact
            path="/Cart"
            render={() => (
              <Cart
                currentCart={currentCart}
                changeQuantity={changeQuantity}
                removeFromCart={removeFromCart}
                clearCart={clearCart}
              />
            )}
          />
        </Switch>
      </div>
    </HashRouter>
  );
};

export default Main;
