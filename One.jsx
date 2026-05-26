import { useState,useEffect } from "react";
import { fooditems } from "./fooditems";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { Theme} from  "./ThemeContent"



function One({share,get, update, wwdw, ddd }){
 
     const [showPopup, setShowPopup] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const navigate = useNavigate();
    // const[showLogin, setShowLogin] = useState(false);
    const [open, setopen] = useState(false)
    console.log('cnc',open)
    const [Menu,setMenu] = useState(false)
    // const [showlogin, setShowLogin] =useState(false)

    

    // const Search =[
    //   {id:1, name:"Barbeque Nation"},
    //   {id:2, name:"Chinese Wok"},
    //   {id:3, name:"Trichy Kitchen"},
    //   {id:4, name:"Sharief Bhai Biryani"},
    //   {id:5, name:"KMS Hakkim"},
    //   {id:6, name:"Suvai Briyani Family Restraurant"},
    //   {id:7, name:"Thomboora Restaurant"},
    //   {id:8, name:"Grill Chicken"},
    //   {id:9, name:"Kanchana Kari Virunthu Restaurant"}

    // ]
    // const [search, setsearch] = useState("")

    // const final = [];

    // for (let i=0; i< fooditems.length; i++ ){
    //   if(fooditems [i]. name.toLowerCase() .includes(search.toLowerCase()) ){
    //     final.push (fooditems[i]);
    //   }
    // }
    
    
    
    
    



    const user = {
    email: email,
    password: password
  };

   const  [placeholder ,setplaceholder] = useState("Email")
   const [holder,setholder] =useState("password")
   const [value ,setvalue] = useState("")
  
   

    const handleSignup = (e) => {
      e.preventDefault();
      
      
  


    
   

    const patternnn =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     const v = /^.{1,8}$/;

    if(!patternnn.test(email)){
      setEmail("");
      setplaceholder("Invalid Email");
      return;
      }

      if(!v.test(password)){
        setPassword("");
        setholder("maximum 8 digits");
        return;
      }

      


    // if(!v.test(password)){
    //   alert("Password must be max 8 characters")
    //   return;
    // }
    
    
        
     const user = {email, password };
     localStorage.setItem("user", JSON.stringify(user)); 
     
     
     setEmail("");
    setPassword("");

  setShowPopup(false);
        
    
    
     
  };


 
  


const [hold ,sethold]= useState("  Enter the password")
const [change,setchange]=useState("Enter the Email")


useEffect(()=>{
   const get = localStorage.getItem("logo")
   if(get){
    update(get)
   }
      })


//  const login =({update}) => {
  const handleLogin = () => {
    
    const storedUser = JSON.parse (localStorage.getItem("user"));
    console.log(storedUser,'ssncs')
    
    

   
     


    console.log(storedUser,'db')
    const pattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordpattern = /^.{1,8}$/;
    if(!pattern.test(email)){
      setEmail("");
      setchange("invalid email")
      
    return;

    }
    if(!passwordpattern.test(password)){
      setPassword("");
      sethold(" Maximum 8 Digits ")

    }

    // if(!Password.test(password)){
    //   // alert("Password must be max 8 characters ");
    //   return;
    // }


    

     if (!storedUser) {
      alert("No account found. Please Sign Up first.");
      return;
    }

    if (storedUser.email === email && storedUser.password === password) {

console.log(storedUser.email ,'fds')
// update(storedUser.email);
        
      // // alert("Login Successful ✅");
      wwdw(false);
      
      
      localStorage.setItem ("logo", storedUser.email);

      
      
      
      // setShowLogin(false);
      

      
    } 
    
    

    
    
    
    
    // else {
    //   alert("Invalid Email or Password ❌");
    // }

    setEmail("");
    setPassword("");
  };
// }



 


  const logout = () => {
  localStorage.removeItem("logo")
  window.location.reload()
  

};



  

 



// console.log('ddb',User)


const User = localStorage.getItem("logo")
console.log('ndks',User)


  const letter = User ? User.charAt(0).toUpperCase() :"";


  const navigate = useNavigate()

  const location = useLocation()

  const hide = location.pathname !== "/FAvourate"
  console.log('dln', hide)


  const {theme, settheme}  = useContext(Theme)
  console.log(theme,'dkkk')




  






   
  


   
    return(
        <>
        {/* <div className={
          theme === "dark"
          ? "bg-black min-h-screen"
          : "bg-white min-h- max-h-screen" 
        }> */}
        <div className="max-w-[1100px] mx-auto " >
        <div className="  items-center justify-between  md:px-4 lg:px-0 hidden md:flex  ">
            <div className="flex gap-4 ">
        <h1 className=" font-bold   text-[40px]  ">zomato</h1>
        < input type="text " className= "  px-4 py-2 shadow-md  focus:outline-none  mt-4  text-gray-800  " placeholder="Trichy,india  "/>
        <input 
         onChange={(e) => share(e.target.value)}
        type="search" 
        
        className="px-4 py-2  lg:w-[450px]  shadow-md border border-white focus:outline-none mt-4  text-gray-800 " 
        placeholder="🔎︎  Search for restraunt,Cuisine or a dish "/>
        </div>
        
          
        <div type="button" 
        className="flex gap-10">

<div className="hidden   md:block">
       { User ? (
        
        <div className="relative">
        <h1 
         onClick ={()=>setopen(!open)}
        className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold gap-2 cursor-pointer"> {letter}</h1>
        {open &&(
      <div className="absolute bg-white text-black right-0 mt-2 w-32 shadow-lg border rounded-lg px-4 py-4  text-center font-bold  space-y-4">
        <p>Profile</p>
        <p>Order</p>
        <p onClick={() => navigate ("/FAvourate")} className="cursor-pointer">Favourities</p>
        <p onClick={()=> settheme(theme === "light" ? "dark" :"light")} className="cursor-pointer">mode</p>
        <button 
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={logout}
        >
          Logout
        </button>

        </div>


        )}
        </div>
        ):(
          <>
          <div className="flex  md:gap-10 lg:gap-12">
        <p onClick={() => wwdw(true)}
        className="  text-gray-500 md:text-[14px] lg:text-[18px] ">Log in</p>

         <p  
        type="button" 
        onClick={() => setShowPopup(true)}
        className="md:text-[14px] lg:text-[18px]  text-gray-500">Sign Up</p>
        </div>
        </>
        )}

       
        </div>
        
         
      
      
        
       
        
          
        {/* <p  
        type="button" 
        onClick={() => setShowPopup(true)}
        className="text-[18px]  text-gray-500">Sign Up</p> */}
        </div>
        </div>
        <div className="p-4  bg-[#E23744] md:hidden  overflow-hidden   ">
        <button className=""
        onClick = {()=> setMenu(!Menu)}>☰</button>


        {Menu && (
          <div className="  mt-4  md:hidden">

           {User ? (
        
        <div className="relative ">
        <h1 
         onClick ={()=>setopen(!open)}
        className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold gap-2 cursor-pointer"> {letter}</h1>
        {open &&(
      <div className="fixed  mt-20 inset-0 w-full bg-black bg-opacity-100 shadow-lg border rounded-lg px-4 py-4  text-center font-bold  text-white space-y-4 border-none overflow-x-hidden z-50 ">
         <h1 >App Update available</h1>
         <p>Veg Mode</p>
         <p>Appearance</p>
         <p>payment Method</p>
         <p>your Orders</p>
         <p>Address Book</p>
         <p>Your Collection</p>
         <p>Manage Recommendations</p>
         <p>Order On Train</p>
         <p>Online Ordering help</p>
         
          <p onClick={() => navigate ("/FAvourate")} className="cursor-pointer">Favourities</p>
        <button 
          className="px-3 py-1 bg-red-500 text-white rounded"
          onClick={logout}
        >
          Logout
        </button>

        </div>
        )}
        </div>
        ):(
          <>
        <p onClick={() => wwdw(true)}
        className="text-[18px]  text-gray-500 ">Log in</p>

         <p  
        type="button" 
        onClick={() => setShowPopup(true)}
        className="text-[18px]  text-gray-500 ">Sign Up</p>
        </>
        

        )}
        

        
            

          </div>

         )}
          
  <div className=" flex ">
    <input type="text" className=" flex-1  px-4 py-2 shadow-md border  focus:outline-none rounded-lg mt-4 " placeholder="trichy,india  "/>
    <button></button>
  </div>

  <input 
    className="  w-full  mt-4 p-4 border rounded-lg shadow-sm focus:outline-none"
    onChange={(e) => share(e.target.value)}
    placeholder="Search for area, street name..."
  />

<div className=" text-center pt-6 text-white">
    <p className="text-[30px]">FLAT 50% OFF</p>
    <p  className="text-[20px]">with free delivery</p>
</div>
</div>

        <div className=" pt-4 gap-4 text-[12px] text-gray-500 px-4 md:px-4 lg:px-0  flex  ">
            <p>Home /</p>
            <p>india /</p>
            <p className="text-gray-300">Trichy Restaurants</p>
        </div>
        <div className="mt-6   text-[10px] md:text-[20px]   gap-10  md:gap-20  flex">
            <div className=" flex items-center mx-4 gap-2">
            <img src="season 1.avif" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] "/>
            <p className="hover:text-red-500 cursor-pointer text-nowrap">Dining Out</p>
            
            </div>
           
           <div className=" flex items-center gap-2">
           <img src="season2.webp" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <p className="hover:text-red-500 cursor-pointer">Delivery</p>
            </div>
            <div className=" flex items-center gap-2">
           <img src="season 3.webp" className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"/>
            <p className="hover:text-red-500 cursor-pointer">Nightlife</p>
            </div>
            <hr className="mt-6 hidden md:block "/>
        </div>
        
         
           
           <hr className="mt-6  "/> 
          <div className=" gap-4 mt-4 text-center text-[14px] text-gray-500 px-4 md:px-4 lg:px-0 hidden md:flex">
            <button className="border border-gray-400  px-2  rounded-md  ">Filter</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Offers</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Rating:4.5</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Pet Friendly</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Outdoor Seating</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Serves Alcohol</button>
            <button className="border border-gray-400  px-2  rounded-md  ">Open Now</button>
          </div>
          {hide &&  (
          <img src="offer bannner.avif" className="mt-6 hidden md:block  px-4 md:px-4 lg:px-0"/>
          )}
        </div>



        
      
      
         
         
        
        
       
        
 {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">

          <div className="bg-white p-6 rounded-xl w-[350px] space-y-4 shadow-2xl">

            <h2 className="text-xl font-bold text-center">Sign Up</h2>

            <input
              type="email"
              value={email}
              
              
              placeholder={placeholder}

              
            
              className="w-full border px-3 py-2 rounded-lg"
              onChange={(e) => setEmail(e.target.value)}
              

            />

            <input
              type="password"
              value ={password}
              placeholder={holder}
              // maxlength ="8"
              className="w-full border px-3 py-2 rounded-lg"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleSignup}
              className="w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Create Account
            </button>

            <button
              onClick={() => setShowPopup(false)}
              className="w-full text-gray-500"
            >
              Cancel
            </button>

          </div>

        </div>
         )}



         {ddd && (
        <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-xl w-[350px] space-y-4 shadow-2xl">
            <h2 className="text-xl font-bold text-center">Login</h2>

            <input
              type="email"
              value={email}
              placeholder={change}
             
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
            />

            <input
              type="password"
              value={password}
              placeholder={hold}
             
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded-lg"
            />

            <button
              onClick ={handleLogin}
              className="w-full bg-blue-500 text-white py-2 rounded-lg"
            >
              Login
            </button>

            <button
              onClick={() => wwdw(false)}
              className="w-full text-gray-500"
            >
              Cancel
            </button>
          </div>
        </div>
      )}


      

      

   

{/* </div> */}
</>


    );
}
export default One;