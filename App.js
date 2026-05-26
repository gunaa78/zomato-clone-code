 import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
 import One from "./component/One"; 
 import Two from "./component/Two";
 import Order from "./component/Order ";
 import { Provider } from "react-redux";
import { store } from "./component/store";
import Footer from "./component/Footer";
import Cart from "./component/cart";
import { useState } from "react";
import  FAvourate from "./component/FAvourate";
// import {Mode} from "./component/thememode";
import {Theme} from "./component/ThemeContent";
import { useContext } from "react";
// import Key from "./Component/Key";
import Check from "./component/Check " ;



function App() {

  const [search, setSearch] = useState("");
  console.log('nd', search)
  const [user ,setuser] =useState(null)
  console.log(user,'sfd')
  // const [look, setlook] =useState(null)
  //  const[showLogin, setShowLogin] = useState(false);
  const[showLogin, setShowLogin] = useState(false);

  const { theme } = useContext(Theme)
   
  return (
    <div className={
      theme === "dark"
      ? "bg-black text-white min-h-screen"
      : "bg-white text-black min-h-screen"
    }>
    
   
    <Provider store={store}>
      
    <Router>
      <One collect={search}   share={setSearch}  get={user}   update ={setuser}  ddd={showLogin}  wwdw={setShowLogin}   />

     
      
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <One collect={search}   share={setSearch}  get={user}   update ={setuser}  ddd={showLogin}  wwdw={setShowLogin}   /> */}
              <Two collect={search}  get={user}  ddw={setShowLogin}    />
            </>
          }
        />
        <Route
          path="/order"
          element={<Order />}
        />
         <Route path="/cart" element={<Cart />} />
          <Route path="/FAvourate" element={<FAvourate/>} />
           <Route path="/Check" element={<Check/>} /> 
           </Routes>
      
      <Footer />
      
    </Router>
    </Provider>
   </div>
   
  
  );
}

export default App;
