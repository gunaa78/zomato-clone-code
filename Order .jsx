import { useState } from "react";

// import { useLocation } from "react-router-dom";
import {   useDispatch ,useSelector } from "react-redux";
import React from "react";
import { addToCart, decrementQty } from "./cardslice";
import { useParams, useSearchParams} from "react-router-dom";
import { fooditems } from "./fooditems";
import { useNavigate } from "react-router-dom";
import Overview from "./Overview";
import Onlineorder from "./Onlineorder";

function Order( ){
    // const location = useLocation();
    // console.log('ddss',location)
    // const order = location.state;
    const [activetab , setactivetab]= useState("over");
    console.log('sab', activetab)
  //  const selectedCard = useSelector((state) => state.click.selectedCard);
  //  console.log(selectedCard,"hhhh")
   const [open ,setopen] = useState(false);
   const [click ,setclick] = useState("show")
   const maxlength = 200;
    // const text = selectedCard.des1 || "";
    // console.log('dbwd', text)
    const [less, setless] = useState(false);
     
     const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.click.cartItems
  );

  console.log(cartItems,"hiii")
// const cartItem1 = cartItems.find(item => item.id === selectedCard.id + "_1");
   
  
  
  
    // Find if this item is in cart
    // const cartItem = cartItems.find(c => c.id === selectedCard.hlo.id);
    
    const [SearchParams] = useSearchParams()
    const id = SearchParams.get("id");

   const selectedCard = fooditems.find(
    (item) => item.id === Number(id)
  );

  // const carditem = cartItems.find(c => c.id === item.id);

  console.log(selectedCard,"hdhh")
 
// {selectedCard?.hlo?.map((hlo,index)=>{
  // console.log(cartItems,'jjj')
  const cartItem = cartItems.find(c => c.id === selectedCard.hlo.id);
  console .log('ndsandd',cartItem)

  const navigate= useNavigate()

  //  const navi = () => {
  //   navigate("/Cart"); // page to navigate
  // };
   

  
   


    return(
        <>
       
        <div className="max-w-[1100px] mx-auto px-4 md:px-4 lg:px-0">
            <div className="text-[5px]  md:text-[12px] text-gray-500 flex gap-2 pt-14">
           <p>Home /</p>
           <p>India /</p>
           <p>Trichy /</p>
           <p>{selectedCard ?.place  }  </p>
           <p>{selectedCard ?.location } / </p>
           <p className="text-gray-400">{selectedCard ?. Nation}</p>
           </div>
        
           <h1 className="text-[20px] md:text-[40px] font-semibold pt-2">{selectedCard ?.name}</h1>
           <p className="text-gray-500 max-w-[350px] text-[12px] md:text-[16px]">{selectedCard ?.dishes}</p>
           <p className="text-gray-500 text-[12px] md:text-[16px]">{selectedCard ?.address}</p>
           <div className="flex-row  md:flex items-center   mt-2   gap-2 text-gray-500 ">
           <button className="border border-gray-400 inline rounded-full  px-2 py-1      text-[8px] md:text-[14px] ">open now   - {selectedCard ?.open}</button>
           <p className="text-[8px] md:text-[16px] ">| ₹{selectedCard ?.price} |</p>
           <p className="cursor-pointer text-[8px] md:text-[16px]">📞{selectedCard ?.phone}|</p> 
           <p className="text-[8px] md:text-[16px]">⭐{selectedCard ?.rating}</p>
           </div>
           <div className="flex mt-4 gap-2 ">
           <p className="border border-gray-400 px-2 py-1  text-[12px] md:text-[16px] rounded-lg ">Direction</p>
           <p className="border border-gray-400 px-2 py-1 text-[12px] md:text-[16px] rounded-lg">Share</p>
           <p className="border border-gray-400 px-2 py-1 text-[12px] md:text-[16px] rounded-lg">Reviews</p>
           <p className="border border-gray-400 px-2 py-1 text-[12px] md:text-[16px] rounded-lg">Book a Table</p>
           </div>
          
           <div className="flex gap-2 mt-4">
           
           <img src={selectedCard.img}  className="w-[700px] h-[320px] lg:object-cover lg:transition-transform lg:duration-300 lg:hover:scale-110"/>
          
           <div className="flex-row space-y-2 hidden lg:block ">
           <img src={selectedCard ?.image} className="w-[175.62px] h-[157px] object-cover transition-transform duration-300 hover:scale-110 "/>
           <img src={selectedCard ?.image2} className="w-[175.62px] h-[157px] object-cover transition-transform duration-300 hover:scale-110 "/>
           </div>
           <img src={selectedCard ?.image3} className="w-[175.6px] h-[320px] lg:object-cover lg:transition-transform lg:duration-300 lg:hover:scale-110 hidden md:block"/>
           </div>
           
           
           <div className="flex justify-between  lg:gap-20 md:gap-10 mt-6  text-[10px] md:text-[18px] text-gray-500 ">
            <p 
            type="button"
            onClick={() =>setactivetab("over")}
            className={`cursor-pointer ${activetab === "over" ? "text-red-500" : "text-gray-700" }`}
            >Over View</p>
            
            <p
             type="button"
             onClick={() => setactivetab("order")}
             className={`cursor-pointer ${activetab === "order" ? "text-red-500 " : "text-gray-700"}`}
            >Order Online</p>
            <p
            type="button"
            onClick={() => setactivetab("review")}
            className={`cursor-pointer ${activetab === "review" ?  "text-red-500" : "text-gray-700"}`}
            >Reviews</p>
            <p
            onClick={() => setactivetab("photo")}
            className={`cursor-pointer ${activetab === "photo" ? "text-red-500" : "text-gray-700"}`}
            >photos</p>
            <p
            onClick={() => setactivetab("menu")}
            className={`cursor-pointer ${activetab === "menu" ? "text-red-500" :"text-gray-700"}`}
            >Menu</p>
            <p
            onClick={() => setactivetab("book")}
            className={`cursor-pointer ${activetab === "book" ?"text-red-500" : "text-gray-700"}`}
            >Book a Table</p>
            
           </div>
           <div>
  {activetab === "over" && <Overview />}
  {activetab === "order" && <Onlineorder />}
</div>
           <div>
           {/* {activetab === "order" &&  (
    <div className="flex mt-2">
      <div className="text-[16px] border-r border-gray-300 pr-4 space-y-4 max-w-[200px]">
        <p onClick={() => setclick("show")} className={`cursor-pointer ${click === "show" ? "text-red-600" : "text-gray-700"}`}>
          {selectedCard?.onlineitem1}
        </p>
        <p onClick={() => setclick("hlo")} className={`cursor-pointer ${click === "hlo" ? "text-red-600" : "text-gray-700"}`}>
          {selectedCard?.onlineitem2}
        </p>
        <p onClick={() => setclick("s")} className={`cursor-pointer ${click === "s" ? "text-red-600" : "text-gray-700"}`}>
          {selectedCard?.onlineitem3}
        </p>
        <p onClick={() => setclick("h")} className={`cursor-pointer ${click === "h" ? "text-red-600" : "text-gray-700"}`}>
          {selectedCard?.onlineitem4}
        </p>
        <p onClick={() => setclick("j")} className={`cursor-pointer ${click === "j" ? "text-red-600" : "text-gray-700"}`}>
          {selectedCard?.onlineitem5}
        </p>
         
      </div> */}
     
      </div>
      <div>
        

        </div>
      
      </div>
     
           
           
                





  {/* )} */}
{/* </div> */}

</>
    )}

 

   



export default Order 
