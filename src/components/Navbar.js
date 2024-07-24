import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className='flex flex-row justify-between h-10'>
            <div>
                <NavLink to="/">
                    <img src="" alt="as" className='h-10' />
                </NavLink>
            </div>

            <div className='flex flex-row justify-between w-[100px] mx-5 items-center'>
                <div>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/cart">
                        <FaShoppingCart fontSize={25} />
                    </NavLink>
                </div>

            </div>
        </div>
    );
};

export default Navbar;