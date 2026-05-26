
import { useSelector,useDispatch } from "react-redux";
// import { fooditems } from "./fooditems";
import  {addToCart, decrementQty } from  "./cardslice";
// import Shopname from "./Shopname";
import { useNavigate } from "react-router-dom";

function Cart(){
    const navigate = useNavigate();

const cartItems = useSelector(state => state.click.cartItems);
console.log('cc',cartItems)
const dispatch = useDispatch();
const total = cartItems.reduce(
    (sum,cartItems) => sum + cartItems.price * cartItems.quantity, 0
) ;
const fees = 35;
// const gst = 128.31;
const percentage = 10
const gstprice = total * percentage /100

const TOTAL = total + fees + gstprice ;




return(
   
 <div className="max-w-[1100px] mx-auto  grid grid-cols-1  md:grid-cols-2  gap-10 px-4 md:px-4 lg:px-0    ">
   {/* <h1>YOUR CART</h1>  */}
   <div>
    <div className="border bg-red-500  text-white px-4 md:px-10  mt-20  py-8">
    <p className="font-bold text-[21px]">Account</p>
    <p className="pt-4 text-[18px]">To place your order now, log in to your existing account or sign up.</p>
    <div className="flex gap-10 ">
    <p className="  border  text-center px-6  max-w-[170px] text-[13px] mt-6 font-semibold   text-black rounded-full  ">Have an account? LOG IN</p>
    <p className="border  text-center px-6  max-w-[170px] text-[13px] mt-6 bg-white text-black font-semibold rounded-full">New to Zomato?SIGN UP</p>
    </div>
    
    
    </div>
    <p className="border mt-6 py-6 px-6 text-[18px] bg-red-500 text-white font-bold">Delivery address</p>
    <p className="border mt-6 py-6 px-6 text-[18px] bg-red-500 text-white font-bold">Payment</p>
    </div>

    
    <div>
  <div className="border mt-20 px-6  py-10  bg-red-500 text-white font-bold ">
    {/* <Shopname /> */}
{cartItems?. map((item)=>(
  <div key={item.id} >
    
    
        {/* <img src={item.orderimage} className="w-[50px] h-[50px]"/> */}
       
       <div className="flex pt-4   items-center text-center justify-center gap-6  ">
        <img src={item.orderimage} className="w-[50px] h-[50px] rounded-md"/>
        <p className="max-w-[110px] truncate text-[15px] font-bold  ">{item.orderitem}</p>
        <div className="flex items-center gap-2 ">
            
        
        <button className="px-2 bg-red-600 text-white"  
            onClick ={()=>dispatch(decrementQty(item.id)) }
            >

                -

        </button>
        <p className="">{item.quantity}</p>
        <button className="px-2 bg-red-600 text-white"
        onClick ={()=> dispatch(addToCart(item))}
        >
            +

        </button>
        </div>
        
      
        <p className="">₹{item.price * item.quantity}</p>
        </div>
       
        
        
             
            
        
        
        </div>
        
        
       
        
    
   
 
))}
<p className="pt-10">BILL Details :</p>
<div className="flex justify-between pt-4">
<p>Item Total  </p>
<p>₹{total}</p>
</div>
<div  className="flex justify-between pt-4">
<p>Delivery Fees  </p>
<p>₹{ fees}</p>
</div>

<hr className="mt-4"/>
<div className="flex justify-between pt-4">
<p>GST & OtherCharges  </p>
<p>₹{gstprice}</p>
</div>
<hr className="border-t-2 border-black mt-4"/>
<div className="flex justify-between pt-4">
<p>TOPAY </p>
<p> ₹{TOTAL}</p>
</div>





</div>

<div className="border mt-6 px-6 py-6 bg-red-500 text-white text-[13px]">
    <p className="max-w-[250px] font-bold ">Review your order and address details to avoid cancellations</p>
    <p className="max-w-[300px] pt-6">Note: Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.</p>
</div>
</div>








<button onClick={() => navigate("/Check")}>
  nddd
</button>
</div>








)

}

export default Cart;