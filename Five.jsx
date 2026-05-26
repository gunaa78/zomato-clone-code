import { useDispatch } from "react-redux";
import { setSelectedCard } from "./cardslice";
import { useNavigate } from "react-router-dom";
function Five(){
    const cards = [
  { id: 1, 
   img: "card7.avif",
   name:"Thomboora Restaurant",
   rating:"3.6",
   dishes:"North Indian, Pizza, Pasta, Biryani, Chinese, Continental, Desserts, Beverages",
   price:"1,500 for two",
   state:"Main Guard Gate, Trichy",
   distance:"4.3km",
   place:"Main Guard Gate",
   Nation:"Thamboora Restaurant",
   open:"11:45am – 3:45pm, 6:45pm – 10:45pm (Today)",
   phone:"+912345345632",
   address:"C 27, North East Extension, Fort Station Road, Main Guard Gate, Trichy",
   image:"tableimg20.avif",
   image2:"tableimg21.avif",
   image3:"tableimg22.avif",
   Cuisines1:"North indian ",
    Cuisines2:"Pizza",
    Cuisines3: "Pasta", 
     Cuisines4:"biryani",
     Cuisines5:"Chinese",
    Cuisines6:"continental",
    Cuisines7: "Biryani", 
     Cuisines8:"Beverages",
     Image:"beverages4.avif",
   beverages:"deliverymenu.avif",
   thirdpart:"foodmenu6.avif",

   pages1:"1pages",
   pages2:"1pages",
   pages3:"17pages",
   menuname1:"Beverages",
   menuname2:"Delivery Menu",
   menuname3:"Food Menu",
   cost:"₹1,500 for two people (approx.)",
   digital:"Digital payments accepted",
   info1:"Lunch",
info2:" Dinner",
 info3:" Takeaway available",
 onlineitem1:"Soups  (4)",
 onlineitem2:"Tandoor Starters (3)",
 
 onlineitem3:"Oriental Starters (2)",
 onlineitem4:"Specilty Sizzlers  (2)",
 onlineitem5:"Special Roti & Rolls  (2)",
 firstitem:"Soups",
 orderimage1:"order55.jpg",
 orderitem1:"Chicken Burned Garlic Soup",
 des1:"Chicken Soup With Fried Garlic.",
 orderimage2:"order56.jpg",
 orderitem2:"Chicken Cracking Soup",
 des2:"Chef'S Special Soup Topped With Cracking Rice",
 orderimage3:"order57.jpg",
 orderitem3:"Chicken Manchow Soup",
 des3:"Chicken Soup With Fried Noodles",
  orderimage4:"order58.jpg",
 orderitem4:"Chicken Sichuan Hot & Sour Soup",
 des4:"Spiced Soup With Mushroom And Chicken",
 seconditem:" Tandoori Chicken",
 orderimage5:"order59.avif",
 orderitem5:"Chicken Hariyali Tikka",
 des5:"Tender Chicken Marinated in Spiced Mint and Coriander Cooked in Tandoor",
 orderimage6:"order60.jpg",
 orderitem6:"Chicken Lapeta Kebab",
 des6:"Breast Of Chicken Rolled In Mushroom And Cheese Stuffing Marinated In Green Herbs",

orderimage7:"order61.jpg",
 orderitem7:"Chicken Patiala [2 Leg Pieces]",
 des7:"Black Pepper Crusted, Cardamom Flavoured Mild Creamy Spiced Chicken Breast",
  thirditem:" Oriental Starters",
orderimage8:"order62.jpg",
 orderitem8:"BBQ Wings",
 des8:"Marinated chicken wings deep fried and tossed in BBQ sauce.",

orderimage9:"order63.jpg",
 orderitem9:"Butter Garlic Chicken",
 des9:"Chinese Style Tossed In Butter Garlic Sauce",
 fouritem:" Specilty Sizzlers",
orderimage10:"order65.jpg",
 orderitem10:"Chicken Oriental Sizzler",
 des10:"Tender Chicken And Vegetables Tossed In Chinese Brown Sauce Egg Fried Rice Fries Gravy And Chicken Drumstick",
orderimage11:"order64.jpg",
 orderitem11:"Tandoori Chicken Overload Sizzler",
 des11:"A Combination Of Assorted Chicken Kebab Served On Bed Of Jeera Coariander Rice Special Tomato Gravy Fries And Pakoda",
 fiveitem:" Special Roti & Rolls",
orderimage12:"order66.avif",
 orderitem12:"Chicken Baida Roti",
 des12:"An Awadhi Street food made with Roomali Roti, spiced chicken mince herbs and bitten eggs.",

orderimage13:"order67.avif",
 orderitem13:"Mutton Baida Roti",
 des13:"An Awadhi Street food made with Roomali roti, spiced mutton mince, herbs and bitten eggs."
 
 
 

  },
  {
  id: 2, 
   img: "card8.avif",
   name:"Grill Chicken",
   rating:"4.0",
   dishes:" Arabian, Chinese, BBQ, Rolls, Shake, Mughlai, Kerala",
   price:"500 for two",
   state:"Thilai Nagar, Trichy",
   distance:"4.6km",
   place:"Thillai Nagar",
   Nation:"Grill Chicken",
   open:"12noon – 10:30pm (Today)",
   phone:"+918769872345",
   address:"10, First Cross, Thillai Nagar, Trichy",
   image:"tableimg23.avif",
   image2:"tableimg24.avif",
   image3:"tableimg25.avif",
   Cuisines1:"Arabian ",
    Cuisines2:"Chinese",
    Cuisines3: "BBQ", 
     Cuisines4:"Rolls",
     Cuisines5:"Shake",
    Cuisines6:"Mughlai",
    Cuisines7:"Kerala",
     pages1:"5pages",
     menuname1:"menu",
     Image:"menu2.avif",
     cost:"₹500 for two people (approx.)",
     quality:"People Say This Place Is Known For",
   details:"Excellent Experience, Buffet Variety and Quality, Silent Place, Birthday Celebrations, Very Good Quality, Servicing",
   payment:"Cash and Cards accepted",
   digital:"Digital payments accepted",
   info1:"Dinner",
info2:" Lunch",
 info3:" Takeaway available",
 info4:"Free parking",
 onlineitem1:"Veg Soup  (4)",
 onlineitem2:"Non Veg Soup(3)",
 
 onlineitem3:"Veg Starter (2)",
 onlineitem4:"Non Veg Starter (2)", 
 onlineitem5:"Salad & Raita (2)",
 firstitem:"Veg Soup",
 orderimage1:"order68.jpg",
 orderitem1:"Clear Soup Veg",

 
 orderimage2:"order69.jpg",
 orderitem2:"Cream Of Mushroom Soup",
 orderimage3:"order70.jpg",
 orderitem3:"Cream Of Tomato Soup",
 
 orderimage4:"order71.jpg",
 orderitem4:"Hot & Sour Veg Soup",
  seconditem:" Non Veg Soup",
 orderimage5:"order72.avif",
 orderitem5:"Chicken Clear Soup",
 des5:"A delightfully flavor-packed clear soup with chopped veggies and chicken pieces - perfect to satiate your cravings.",

 orderimage6:"order73.avif",
 orderitem6:"Cream Of Chicken Soup",
 des6:"A creamy soup made from juicy chicken",
orderimage7:"order74.jpg",
 orderitem7:"Hot & sour Chicken Soup",
 thirditem:" Veg Starter",
orderimage8:"order75.avif",
 orderitem8:"Mushroom 65",
 des8:"A delightfully tasty dish with tender mushrooms coated in spicy sauces, assorted spices and tossed with veggies.",
orderimage9:"order76.avif",
 orderitem9:"Baby Corn 65",
 fouritem:"Non Veg Starter",
orderimage10:"order77.jpg",
 orderitem10:"Mutton Sukka",
orderimage11:"order78.jpg",
 orderitem11:"Crispy Chicken",
 fiveitem:" Salad & Raita",
orderimage12:"order79.jpg",
 orderitem12:"Arabian Salata",
 
 orderimage13:"order80.jpg",
 orderitem13:"Arabic Salad Non Veg",
 

   
 
 

  },

{
   id: 3, 
   img: "card9.avif",
   name:"Kanchana Kari Virunthu Restaurant",
   rating:"4.2",
   dishes:"South Indian, North Indian, Chinese, Chettinad, Fast Food",
   price:"1,400 for two",
   state:"cantonment, Trichy",
   distance:"2.7km",
   place:"cantonment",
   Nation:"Kanchana Kari Virunthu Restaurant",
   open:"11am – 11pm (Today)",
   phone:"+918434893241",
   address:"99, Shop 16 & 17, Sangillyandapuram, Tiruchirappalli, Williams Road, Cantonment, Trichy",
   image:"tableimg26.jpg",
   image2:"tableimg27.avif",
   image3:"tableimg28.avif",
   Cuisines1:"South Indian ",
    Cuisines2:"North Indian",
    Cuisines3: "Chinese", 
     Cuisines4:"Chettinad",
     Cuisines5:"Fast Food",
     pages1:"9pages",
     menuname1:" Food Menu",
     Image:"foodmenu7.avif",
     cost:"₹650 for two people (approx.)",
     quality:"People Say This Place Is Known For",
   details:"Excellent Experience, Buffet Variety and Quality, Silent Place, Birthday Celebrations, Very Good Quality, Servicing",
   payment:"Cash and Cards accepted",
   digital:"Digital payments accepted",
  
 
 info1:"Dinner",
info2:" Lunch",
 info3:" Home delivery",
 info4:"Takeaway available",
 info5:"Indoor seating",
 onlineitem1:"Soups Veg (4)",
 onlineitem2:"Soups Non - Veg (2)",
 
 onlineitem3:"Starters (2)",
 onlineitem4:"Tandoori / Bbq  (2)", 
 onlineitem5:"Meals (2)",
 firstitem:"Soups Veg",
 orderimage1:"order81.avif",
 orderitem1:"Veg Clear Soup",
  
 
 orderimage2:"order82.avif",
 orderitem2:"Hot & Sour Veg Soup",
 orderimage3:"order83.jpg",
 orderitem3:"Sweet Corn Veg Soup",
 
 orderimage4:"order84.jpg",
 orderitem4:"Mushroom Soup",

  seconditem:" Soups Non - Veg",
 orderimage5:"order85.jpg",
 orderitem5:"Hot & Sour Chicken Soup",
 
 orderimage6:"order86.jpg",
 orderitem6:"Chicken Clear Soup",

 thirditem:"Starters",
orderimage8:"order87.jpg",
 orderitem8:"Gobi 65",


orderimage9:"order88.jpg",
 orderitem9:"Mushroom 65",
 fouritem:"Tandoori / Bbq",
orderimage10:"order89.avif",
 orderitem10:"Tandoori",
 des10:"  Tandoor cooked chicken chunks marinated in a yogurt and chilli based masala",
orderimage11:"order90.avif",
 orderitem11:"Bbq",
 fiveitem:"Meals",
orderimage12:"order91.avif",
 orderitem12:"Veg Meals",
 des12:"( Rice, Kootu, Poriyal, Keerai, Sambar, Kara / Morr Kulambu, Rasam, Butter Milk, Appalam, Pickle, Kesari )",

 orderimage13:"order92.avif",
 orderitem13:"Non Veg Meal",
 des13:"( Rice, Kootu, Poriyal, Keerai, Boiled Egg, Mutton, Chicken, Fish Gravy, Rasam, Butter Milk, Pickle, Kesari )"

 
 

     

    




 }
  
];
const navigate= useNavigate();
const dispatch = useDispatch();



    return(
        
        
        <div className="max-w-[1100px] mx-auto mt-6 flex  justify-between  md:px-8 lg:px-0 ">
         {cards.map((card) => (
        <div key={card.id}
        className=" bg-white  p-3   rounded-xl
                 hover:shadow-2xl 
                 transition-all duration-300 space-y-2   ">
            <img src={card.img}
           onClick={() => {
  // dispatch(setSelectedCard(card));
  navigate("/Order");
}}
            className="w-[202px] h-[248px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[248px] rounded-xl"/>
            <div className=" flex  md:justify-between lg:justify-between ">
        <h2 className="text-[17px] font-bold md:max-w-[100px] lg:max-w-[200px] truncate">{card.name}</h2>
         <p className="border bg-green-900 text-white text-[13px] px-2 py-1 rounded-lg font-bold">{card.rating}★</p>
         </div>
         <div className="flex  md:justify-between lg:justify-between text-[14px] text-gray-400">
         <p className="max-w-[200px]  md:max-w-[100px] lg:max-w-[200px] truncate ]">{card.dishes}</p>
         <p className="md:max-w-[50px]  truncate lg:max-w-[200px]">{card.price}</p>
         </div>
         <div className="flex  md:justify-between lg:justify-between">
         <p className="text-[14px] text-gray-400">{card.state}</p>
         <p className="text-[13px]">{card.distance}</p>
         </div>
         </div>
      ))}
    </div>
    )

}


export default Five;