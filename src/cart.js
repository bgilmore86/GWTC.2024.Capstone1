///api/cart.js --to bring up api/carts page or error
export default async function handler(req, res) {
    try {
      const response = await fetch('https://fakestoreapi.com/carts');
      const cartData = await response.json();
      res.status(200).json(cartData);
    } catch (error) {
      console.error('Error fetching cart data:', error);
      res.status(500).json({ error: 'Unable to fetch cart data' });
    }
  }
  