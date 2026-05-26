import { useDispatch, useSelector } from "react-redux";
import { set, setSelectedCard} from "./cardslice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { fooditems } from "./fooditems";
import { addToCart, decrementQty ,openCart, findfavourate } from "./cardslice";
import Order from "./Order ";
// import Four from "./Four";

// const[showLogin, setShowLogin] = useState(false);




import { FaHeart, FaRegHeart } from "react-icons/fa";
function Three({ Show , adsa, iii } ){
  

const dispatch = useDispatch();



   
const Filter = fooditems.filter((items) =>
items.name.toLowerCase(). includes(Show.toLowerCase())
)
console.log(Filter,'kcbk')





// const fav = favourate.includes(Filter.id)
// console.log('nkn',fav)
// const handle = () =>{
//     if(fav){
//         setfavourate(favourate.filter (id => id !== Filter.id))
//     } else {
//         setfavourate([...favourate,Filter.id])
//     }

// }
// console.log('ddb',handle)

const Favourate = useSelector(state => state.click.favourates)
console.log(Favourate,'ddjo')

 

const navigate = useNavigate()

      

    return(
        <>
       
        
        <div className="max-w-[1100px] mx-auto mt-6   gap-4   grid grid-cols-1  md:grid md:grid-cols-3   ">
         {Filter.map((card) => {


           const isfavourate  = Favourate .includes(card);
           console.log('dbka',isfavourate)


//            const click = (id) =>{
//   dispatch(findfavourate(id))
//   navigate("/FAvourate")

// }
// console.log(' dsa',click)
 

 const favourate = ()=>{

    // const fix = localStorage.getItem("logo")
    if(adsa !== null  ){
    
    dispatch(findfavourate(card));
     console.log("dispatch running", card)
    }
    

 }




 
        






         return(
        <div key={card.id}
        className="  p-3   rounded-xl
                 hover:shadow-2xl 
                 transition-all duration-300 space-y-2    "
        >
            <div className="relative">

                
            <img src={card.img} 
           onClick={() =>  navigate(`/Order?id=${card.id}`)}
           
  




            className="  w-full h-[200px]  md:h-[200px]  lg:h-[278px] object-cover rounded-xl"/>
           
            <button onClick={()=>{
                if(adsa === null){
            //    setShowLogin(true)
            //    navigate("/FAvourate")
            iii(true)

                }
                else{
                    // alert("Please login first");
                    // navigate("/")
                    
                    favourate();

                }
         }}
             className="absolute top-2 right-2 text-red-600">
                 { isfavourate ? <FaHeart /> : <FaRegHeart /> }
            </button> 
        
            </div>
            
            
            <div className=" flex justify-between">

        <h2 className="text-[10px] md:text-[17px] font-bold truncate max-w-[200px]">{card.name}</h2>
         <p className="border bg-green-900 text-white text-[8px] md:text-[10px] lg:text-[13px] px-2 py-1 rounded-lg ">{card.rating}★</p>
         </div>
         <div className=" text-[10px] md:text-[14px] text-gray-400 flex justify-between">
         <p className="max-w-[100px]  lg:max-w-[250px] truncate ">{card.dishes}</p>
         <p className="  ">{card.price}</p>
         </div>
         <div className="flex  justify-between ">
         <p className="text-[10px] md:text-[14px] text-gray-400">{card.state}</p>
         <p className="text-[10px] md:text-[14px]">{card.distance}</p>
         </div>
         </div>
         )
})}
    
    
    </div>
    

    
    
    
    {/* <Four /> */}
    
        </>
    

    );

}

export default Three; 