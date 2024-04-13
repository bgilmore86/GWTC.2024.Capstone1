import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Products.css';
//import { LoginButton } from '../components/LoginButton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to false to prompt for login
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();

      console.log('Done FETCHING  PRODUCTS from API...', data);
      setProducts(data);
    };

    const fetchCategories = async () => {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const data = await response.json();

      console.log('Done FETCHING CATEGORIES from API', data);
      setCategories(data);
    };

    fetchProducts();
    fetchCategories();
  }, []);

  console.log('Products Rendered Successfully', products);
  console.log('Categories Rendered Successfully', categories);

  const handleSearch = (event) => {
    console.log('Searching for:', event.target.value);
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogin = () => {
    console.log('Logging in');
    //check if the username and password are correct; if not alert pop up
    if (username === 'mor_2314' && password === '83r5^_') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h2>Travel Gift Shop</h2>
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout}>Logout</button>
          <select value={searchTerm} onChange={handleSearch}>
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Search by category"
            value={searchTerm}
            onChange={handleSearch}
          />

          <div className="products">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product">
                <Link to={`/product/${product.id}`}>
                  <h3>{product.title}</h3>
                </Link>

                <img src={product.image} alt={product.title} width="222" height="222" />

                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Products;
