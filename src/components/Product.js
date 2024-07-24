import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({ post }) => {

    const { cart } = useSelector((state) => state);
    console.log(cart);
    const dispatch = useDispatch();

    function addToCart() {
        dispatch(add(post));
        toast.success("Item Added to Cart")
    }
    function removeFromCart() {
        dispatch(remove(post.id));
        toast.success("Removed from Cart");
    }
    return (
        <div className='border-black border-[2px] '>
            <div>
                <p>{post.title}</p>
            </div>

            <div>
                <p>{post.description}</p>
            </div>

            <div>
                <img src={post.image} alt="" width={150} />
            </div>

            <div>
                <p>{post.price}</p>
            </div>
            {
                cart.some((p) => (p.id === post.id)) ?
                    (
                        <button onClick={removeFromCart}>
                            Remove Item
                        </button>
                    )
                    :
                    (
                        <button onClick={addToCart}>
                            Add to cart
                        </button>
                    )
            }
        </div >
    );
};

export default Product;