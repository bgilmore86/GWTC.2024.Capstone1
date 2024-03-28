import { useGetCartQuery } from '../redux/api';
import {Link} from 'react-router-dom';

export default function Cart() {

  const { data, isLoading } = useGetCartQuery();

  if (isLoading) return <p>Loading...</p> 

  return (
    <>
      <h2>Cart</h2>

      {data.map(item => (
        <div key={item.id}>
          {item.title} - ${item.price}  
        </div>
      ))}

      <Link to="/checkout">
        <button>Checkout</button>  
      </Link>
    </>
  )
}
