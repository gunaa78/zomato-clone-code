import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { addToCart, decrementQty,  openCart } from "./cardslice";
import { useSearchParams } from "react-router-dom";
// import { fooditems } from "./fooditems";
import { useNavigate } from "react-router-dom";
 function Cartbar(){
  
  const dispatch = useDispatch()
  const {cartItems} = useSelector(state => state.click);
  
   const navigate = useNavigate();

  if( cartItems.length === 0 ) return null;

  const total = cartItems.reduce ((sum ,item) => sum +  item.quantity,0); 
  console.log('bkkdb',total)

  return(
    <div
    onClick={() => navigate("/cart")}
    className=" fixed bottom-0 bg-green-600 text-white 
      flex justify-between items-center px-6 py-3 cursor-pointer    left-1/2 -translate-x-1/2 w-[90%]  rounded-lg   ">
        <div>
       <h2 className="font-bold">Cart ({total} items)</h2>
       
       </div>
       <h1 className="font-bold">VIEW CART →</h1>
       

    </div>

  )
}

export default Cartbar;