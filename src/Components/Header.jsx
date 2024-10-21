import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'
const Header = ({insideHome}) => {
  const userCart=useSelector(state=>state.cartReducer)
  const userWishlist=useSelector(state=>state.wishlistReducer)
  const dispatch=useDispatch()
  return (
    <>
   <nav className='flex bg-yellow-500 fixed w-full p-4'>
        <Link className='text-white text-2xl font-bold' to={'/'}> <i className="fa-solid fa-truck-fast me-1"></i> E Cart</Link>
        <ul className='flex-1 text-right'>
            { insideHome && <li className='list-none inline-block px-5'><input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} className='rounded p-1' style={{width:'300px'}} type="text" placeholder='Search Products' name="" id="" /></li>}
            <li className='list-none inline-block px-5'><Link className='text-white font-bold' to={'/wishlist'}> <i className="fa-solid fa-heart text-red-600"></i> WishList <span className='rounded bg-black p-1'>{userWishlist?.length}</span></Link></li>
            <li className='list-none inline-block px-5'><Link className='text-white font-bold' to={'/cart'}> <i className="fa-solid fa-cart-plus text-green-600"></i> Cart <span className='rounded bg-black p-1'>{userCart?.length}</span></Link></li>
        </ul>
    </nav>
    </>
    
  )
}

export default Header
