import React from 'react'
import Header from '../Components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
const Wishlist = () => {
  const userCart=useSelector(state=>state.cartReducer)
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)

  const handleCart=(product)=>
    {
      dispatch(addToCart(product))
      const existingProduct=userCart?.find(item=>item.id==product.id)
      dispatch(removeWishlistItem(product.id))
      if(existingProduct)
      {
        alert("Product quantity incrementing")
      }
     
    }
  return (
    <>
    <Header/>
    <div style={{paddingTop:'100px'}} className='container px-4 auto'>
    {
        userWishlist?.length>0?
        <>
        <div className="grid grid-cols-4 gap-4 mt-5">
       {
          userWishlist?.map(product=>(
            <div className="rounded border p-2 shadow">

            <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
            <div key={product?.id} className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <div className='flex justify-evenly mt-3'>
                      <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
                      <button onClick={()=>handleCart(product)} className='text-xl'><i className='fa-solid fa-cart-plus text-green-600'></i></button>
                    </div>
  
            </div>
          </div>
          ))

       }

        </div>
      
      </>
      :
      <div className="text-center mt-5 flex flex-col justify-center items-center">
              <img className='w-100 h-1/2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaENUrBAXMMwu5WYmDzzJI2RJHd5129CmWqA&s" alt="" />
              <h1 className='text-red-500 font-bold text-3xl'>Your wish list is empty!!!!</h1>
        </div>






    }


    </div>
    </>
  )
}

export default Wishlist