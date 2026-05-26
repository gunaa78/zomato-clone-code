import { fooditems } from "./fooditems";
import { useSelector } from "react-redux";
import { useParams, useSearchParams} from "react-router-dom";
import {addToCart, decrementQty,  openCart, findfavourate } from "./cardslice"
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import  Key from "./Key"
function FAvourate(){

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    

 const collect = useSelector((state) => state.click.favourates)

 console.log("redux fav", collect)

 const favitems = fooditems.filter(item =>
    collect.find(fav => fav.id === item.id)
 )


//  const dnsn  = JSON.parse(localStorage.getItem("FAV")) || []
//  console.log('dddsa',dnsn)


//  const { id } = useParams()

//  const Item = fooditems.find(i => i.id === Number(id))
//  console.log('dasn',Item)
const navigate = useNavigate()

const [favouratee, setfavouratee] = useState("dasj")





// const favourate = ()=>{

//     // const fix = localStorage.getItem("logo")
//     // if(adsa !== null  ){
    
//     dispatch(findfavourate(item));
//      console.log("dispatch running", item)
//     // }
    

//  }
const dispatch = useDispatch()


 






 return(
   <div>
    <div className="max-w-[1100px] mx-auto mt-6   gap-4   grid grid-cols-1  md:grid md:grid-cols-3   ">

    {favitems.map(item => (
        
      <div key={item.id}
      className="bg-white p-3 rounded-xl hover:shadow-2xl transition-all duration-300 space-y-2">
        <div className="relative">
        <img
        onClick={() =>  navigate(`/Order?id=${item.id}`)}
        src={item.img}
        className="w-full h-[200px] md:h-[200px] lg:h-[278px] object-cover rounded-xl"
        />


         <button onClick={()=>{ dispatch(findfavourate(item));
                    //     if(adsa === null){
                    // //    setShowLogin(true)
                    // //    navigate("/FAvourate")
                    // // iii(true)
        
                    //     }
                    //     else{
                    //         // alert("Please login first");
                    //         // navigate("/")
                            
                    //         favourate();
        
                    //     }
                 }}
                     className="absolute top-2 right-2 text-red-600">
                         { favouratee ? <FaHeart /> : <FaRegHeart /> }
                    </button> 
                
                    </div>
        
         <div className=" flex justify-between">

        <h2 className="text-[10px] md:text-[17px] font-bold truncate max-w-[200px]">{item.name}</h2>
         <p className="border bg-green-900 text-white text-[8px] md:text-[10px] lg:text-[13px] px-2 py-1 rounded-lg ">{item.rating}★</p>
         </div>
         <div className=" text-[10px] md:text-[14px] text-gray-400 flex justify-between">
         <p className="max-w-[150px]  md:max-w-[250px] truncate ">{item.dishes}</p>
         <p className=" ">{item.price}</p>
         </div>
         <div className="flex  justify-between ">
         <p className="text-[10px] md:text-[14px] text-gray-400">{item.state}</p>
         <p className="text-[10px] md:text-[14px]">{item.distance}</p>
         </div>
         <Key/>
         </div>
         
         

      



     ))} 
     </div>
     </div>

     
              
    





   
 )
}
export default FAvourate