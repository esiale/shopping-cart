import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-content">
        <h2>Browse through our exquisite selection of guitars</h2>
        <h3>Handcrafted with passion by the finest artisans</h3>
        <Link to="/shop">
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
