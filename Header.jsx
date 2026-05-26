
// import { useState,useEffect } from "react";

// function Header(){

//     const[showLogin, setShowLogin] = useState(false);
//      const [showPopup, setShowPopup] = useState(false);
//      const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
    
//     const user = {
//     email: email,
//     password: password
//   };


//   const handleSignup = () => {
//       if (!email || !password) {
//       alert("Please fill all fields");
//       return;
//     }
        
//      const user = { email, password };
//      localStorage.setItem("user", JSON.stringify(user)); 
     
     
//      setEmail("");
//     setPassword("");

//   setShowPopup(false);
        
    
//     alert("Signup Successful ✅");
     
//   };


//   const handleLogin = () => {
   
//     // Get saved user from localStorage
//     const storedUser = JSON.parse (localStorage.getItem("user"));

    

//      if (!storedUser) {
//       alert("No account found. Please Sign Up first.");
//       return;
//     }

//     if (storedUser.email === email && storedUser.password === password) {
//       alert("Login Successful ✅");
//       setShowLogin(false);
//     } 
    
    
    
//     else {
//       alert("Invalid Email or Password ❌");
//     }

//     setEmail("");
//     setPassword("");
//   };




// return(
//     <div className="mt-4 items-center justify-between  md:px-4 lg:px-0 hidden md:flex  ">
//             <div className="flex gap-4 ">
//         <h1 className=" font-bold   text-[40px]  ">zomato</h1>
//         < input type="text " className=" px-4 py-2 shadow-md border border-white focus:outline-none hidden lg:block " placeholder="Trichy,india  "/>
//         <input type="search" 
        
//         className="px-4 py-2  lg:w-[450px]  shadow-md border border-white focus:outline-none hidden lg:block" 
//         placeholder="🔎︎  Search for restraunt,Cuisine or a dish "/>
//         </div>
        
//         <div 
//         className="flex gap-10">
//         <p 
//         // onClick={() => setShowLogin(true)}
//         className="text-[18px]  text-gray-500 ">Log in</p>
//         <p  
         
//         // onClick={() => setShowPopup(true)}
//         className="text-[18px]  text-gray-500">Sign Up</p>
//         </div>


//         {showPopup && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">

//           <div className="bg-white p-6 rounded-xl w-[350px] space-y-4 shadow-2xl">

//             <h2 className="text-xl font-bold text-center">Sign Up</h2>

//             <input
//               type="text"
              
//               placeholder="Enter Email"
            
//               className="w-full border px-3 py-2 rounded-lg"
//               onChange={(e) => setEmail(e.target.value)}
              

//             />

//             <input
//               type="password"
//               placeholder="Enter Password"
//               className="w-full border px-3 py-2 rounded-lg"
//               onChange={(e) => setPassword(e.target.value)}
//             />

//             <button
//               onClick={handleSignup}
//               className="w-full bg-red-500 text-white py-2 rounded-lg"
//             >
//               Create Account
//             </button>

//             <button
//               onClick={() => setShowPopup(false)}
//               className="w-full text-gray-500"
//             >
//               Cancel
//             </button>

//           </div>

//         </div>
//          )}

//          {showLogin && (
//         <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-xl w-[350px] space-y-4 shadow-2xl">
//             <h2 className="text-xl font-bold text-center">Login</h2>

//             <input
//               type="email"
//               placeholder="Enter Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border px-3 py-2 rounded-lg"
//             />

//             <input
//               type="password"
//               placeholder="Enter Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border px-3 py-2 rounded-lg"
//             />

//             <button
//               onClick={handleLogin}
//               className="w-full bg-blue-500 text-white py-2 rounded-lg"
//             >
//               Login
//             </button>

//             <button
//               onClick={() => setShowLogin(false)}
//               className="w-full text-gray-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </div>
//       )}
    

//         </div>



    
// );
// }

// export default Header;