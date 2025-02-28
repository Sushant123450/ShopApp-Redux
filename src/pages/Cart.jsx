import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CartItem from "../components/CartItem.js";

const Cart = () => {
  const { cart } = useSelector(state => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart])
  return (
    <div >
      {cart.length > 0 ?
        (
          <div className='flex flex-row  '>

            <div className='flex flex-row h-[250px] flex-wrap gap-4 mx-4 '>
              {
                cart.map(
                  (item, index) =>
                    (<CartItem key={item.id} item={item} itemIndex={index} />)
                )
              }
            </div>

            <div>
              <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  <span>Total Items : {cart.length}</span>
                </p>
              </div>

              <div>
                <p>Total Amount : {totalAmount}</p>
              </div>

            </div>

          </div>) :
        (

          <div>
            <h1>There is Nothing in the Cart</h1>
            <Link to="/">
              <button>Shop Now</button>
            </Link>
          </div>

        )
      }
    </div >
  )
}

export default Cart;