import { useDispatch } from "react-redux";
import { setSelectedCard } from "./cardslice";
import { useNavigate } from "react-router-dom";
// import Five from "./Five";
function Four(){
   const cards = [
  { id: 1, 
   img: "card4.avif",
   name:"Sharief Bhai Biryani",
   rating:"4.1",
   dishes:"Briyani shawarma,Kebab, Arabian, Rolls,Tea,Deserts,Beverages  ",
   price:"700 for two",
   state:"Woraiyur, Trichy",
   distance:"4.7km",
    place:"woraiyur",
   Nation:"Sharief Bhai Biryani",
   open:"11:30am – 11:30pm (Today)",
   phone:"+9184380470",
   address:"3/1, 1st Floor, Ward 56, Annamalai Nagar, Woraiyur, Trichy",
   image:"tableimg11.avif",
   image2:"tableimg12.avif",
   image3:"tableimg13.avif",
   Cuisines1:"Briyani ",
    Cuisines2:"shawarma",
    Cuisines3: "Kebab", 
     Cuisines4:"Arabian",
     Cuisines5:"Rolls ",
    Cuisines6:"tea",
    Cuisines7: "Desserts", 
     Cuisines8:"beverages",
     Image:"food menu 3.avif",
   beverages:"beverages2.avif",
   pages1:"15pages",
   pages2:"1pages",
   menuname1:"Food Menu",
   menuname2:"beverages",
   cost:"₹700 for two people (approx.)",
   digital:"Digital payments accepted",
   info1:"Lunch",
info2:" Dinner",
 info3:" Home delivery",
 info4:" Takeaway available",
 onlineitem1:"Ramzan Specials  (4)",
 onlineitem2:"Hyderabadi Dum Biryani (Newly Launched)  (3)",
 
 onlineitem3:"Biryani - Dakhni Style  (2)",
 onlineitem4:"Party Combo Meals (2)",
 onlineitem5:"Starters  (2)",
 firstitem:"Ramzan Specials",
 orderimage1:"order27.avif",
 orderitem1:"All day Ramzan Combo (Chicken) (Serves 1)",
 des1:"Combo Consists of Onion Samosa-1 Nos, Chicken Kheema Samosa-1 Nos, Chicken Sheek-1 Nos, Chicken Biryani with one Piece of Chicken, Chicken Haleem, Gulab Jamun-1 No, Raita And Mint Chutney , packed in an 8 compartment meal tray.(Serve 1). Our exclusive ramadan offering! Energy(Kcal) : 1734.22, Protein(g) : 64.29, Carbs(g) : 94.34, Fat(g) : 123.24, Fibre(g) : 10.34, Sugars (g) : 30.95, Sodium (mg) : 3322.98",
 orderimage2:"order28.avif",
 orderitem2:"Mutton Iftar Box (Serves 3)",
 des2:"Consists of A Large Portion of Mutton Dum Biryani, Mutton Haleem, Chicken 65-Boneless, 3 Mutton Kheema Samosa, 3 Onion Samosa, 3 Rose Sharbath, 4 Gulab Jamun, 4 Dates, and 2 Water Bottle.( Serves 3). Our exclusive Ramadan offering!",
  orderimage3:"order29.avif",
 orderitem3:"Mutton Mini Iftar Box",
 des3:"Celebrate the spirit of Ramzan with Mutton Egg Kheema Roti, Mutton Haleem -100grams, 2 Onion Samosa, Dates, Water Bottle -1",
  orderimage4:"order30.avif",
 orderitem4:"Chicken Iftar Box (Serves 3)",
 des4:"Combo Consists of Large Portion of Chicken Biryani, Chicken Haleem, Chicken 65- B/L, chicken kheema samosa 3 Nos, Onion Samosa 3 Nos, Rose Sharbath -300ml (2Nos), Gulab Jamun-6 Nos and Water Bottle 2nos ( Serves 3 )Our exclusive Ramadan offering!",
 seconditem:" Hyderabadi Dum Biryani (Bucket)",
 orderimage5:"order31.avif",
 orderitem5:"Mutton Hyderabadi Bucket Biryani",
 des5:"Slow-cooked Hyderabadi mutton biryani with tender meat and rich masala, layered with fragrant basmati rice. Served with 12 pieces of mutton, 10 pieces of chicken kebab (with bone), and 6 boiled eggs.raitha & salan",

 orderimage6:"order32.avif",
 orderitem6:"Chicken Hyderabadi Bucket Biryani",
 des6:"A Royal Bucket of aromatic Hyderabadi chicken biryani made with long-grain basmati rice and rich spices. Served with 12 pieces of chicken, 10 pieces of chicken kebab (with bone), and 6 boiled eggs, raitha & salan",

orderimage7:"order33.avif",
 orderitem7:"Mutton Kheema Hyderabadi Bucket Biryani",
 des7:"Classic Hyderabadi biryani made with spiced mutton kheema and aromatic rice. with 10 pieces of chicken kebab (with bone), and 6 boiled eggs.raitha & salan",
 

 thirditem:" Non Veg Biryani",
orderimage8:"order34.avif",
 orderitem8:"Chicken 65 Boneless Biryani",
 des8:"Dum cooked traditional zeerak samba rice with rich flavours and topped with 8-10 small size boneless chunks of chicken kebab, prepared with our home made special masala, served with raitha & salan. Experience the flavours of Dakhni Biryani, a very fresh alternate to the Mandi biryani. Energy (kcal ) : 1114, Protein (g) : 47, Fat (g) : 35, Dietary fibre (gm) : 11, carbohydrates(g) : 144, Allergen : Dairy,.",

orderimage9:"order35.avif",
 orderitem9:"Mutton Biryani (Har-dil-Azeez Gosht)",
 des9:"Traditional dum-cooked Zeerak Samba rice layered with 3 pieces of tender lamb meat, slow-cooked in rich Dakhni spices — just like in a true Muslim household. Experience the soulful flavors of authentic Dakhni Biryani — a fresh and aromatic alternative to the Mandi style. Energy (kcal ) : 1408, Protein (g) : 41, Fat (g) : 78, Dietary fibre (gm) : 8, carbohydrates(g) : 131, Allergen : Dairy",
 

   fouritem:" Party Combo Meals",
orderimage10:"order36.avif",
 orderitem10:"Friday Bhai Day - Chicken Biryani Combo",
 des10:"Combo consists of Chicken Dum Biryani (2 Portions), Chicken starter (Small) and matka phirni (small) 2 units. (Serves 2) Energy(Kcal) : 4985.82, Protein(g) : 275.14, Carbs(g) : 301.96, Fat(g) : 295.14, Fibre(g) : 18.92, Sugars (g) : 88.5, Sodium (mg) : 11713.99",
orderimage11:"order37.avif",
 orderitem11:"Friday Bhai Day - Veg Biryani Combo",
 des11:"Combo consists of Soya Chaap Biryani (2 Portions), Paneer 65 (Small) and matka phirni (small) 2 nos. ( Serves 2 ) Energy(Kcal) : 3344.1, Protein(g) : 84.74, Carbs(g) : 275.47, Fat(g) : 218.66, Fibre(g) : 23.6, Sugars (g) : 95.48, Sodium (mg) : 11828.19",

 fiveitem:" Starters",
orderimage12:"order38.avif",
 orderitem12:"Chicken 65 - Boneless",
 des12:" Crisp and tender boneless chicken bites are deep fried with a special batter. 9 pieces per serving. Energy (kcal ) : 431, Protein (g) : 31, Fat (g) : 28, Dietary fibre (gm) : 3, carbohydrates(g) : 09, Allergen : Dairy, Vinegar.",

orderimage13:"order39.avif",
 orderitem13:"Chicken Tikka",
 des13:"Tender chicken cubes Marinated in Yogurt cooked in tandoor along with red Chilly and special masala . 5 peices per serving. Energy(Kcal) : 528.52, Protein(g) : 62.23, Carbs(g) : 15.46, Fat(g) : 23.43, Fibre(g) : 3.81, Sugars (g) : 3.83, Sodium (mg) : 304.76,",
  },
  {
  id: 2, 
   img: "card5.avif",
   name:"KMS Hakkim",
   rating:"4.5",
   dishes:" Briyani,Ice cream ",
   price:"700 for two",
   state:"thillai Nagar, Trichy",
   distance:"4.4km",
    place:"Thillai nagar",
   Nation:"KMS Hakkim",
   open:"11am – 11pm (Today)",
   phone:"+911723819909",
   address:"5, Near Passport Office, Sastri Road, North East Extension, Thillai Nagar, Trichy",
   image:"tableimg14.avif",
   image2:"tableimg15.avif",
   image3:"tableimg16.avif",
   Cuisines1:"Briyani ",
    Cuisines2:"Ice cream",
     Image:"foodmenu4.avif",
   beverages:"beverages3.avif",
   pages1:"5pages",
   pages2:"1pages",
   menuname1:"Food Menu",
   menuname2:"beverages",
   cost:"₹700 for two people (approx.)",
   quality:"People Say This Place Is Known For",
   details:"Excellent Experience, Buffet Variety and Quality, Silent Place, Birthday Celebrations, Very Good Quality, Servicing",
   payment:"Cash and Cards accepted",
   info1:"Dinner",
info2:" Lunch",
 info3:" Home delivery",
 info4:" Takeaway available",
 info5:"Indoor seating" ,
 onlineitem1:"Rice  (4)",
 onlineitem2:"Starters (3)",
 
 onlineitem3:"Family Pack  (2)",
 onlineitem4:"Main Course  (2)",
 onlineitem5:"friedRice   (2)",
 firstitem:"Rice",
 orderimage1:"order40.avif",
 orderitem1:"Plain Biryani",
 des1:"Mild flavoured aromatic rice. Best accompanied with various onion, tomato based gravies.",
 orderimage2:"order41.avif",
 orderitem2:"Egg Masala [2 Eggs]",
 des2:"Egg gravy is a North Indian dish of hard boiled eggs simmered in a spicy and super aromatic onion tomato masala.",
  orderimage3:"order42.webp",
 orderitem3:"Veg Pulao",

  orderimage4:"order43.jpg",
 orderitem4:"Mushroom Pulao",

 seconditem:" Starters",
 orderimage5:"order44.avif",
 orderitem5:"Chicken 65",
 des5:"Cottage cheese dumpling stuffed served in cashew nut gravy.",

 orderimage6:"order45.avif",
 orderitem6:"Chicken Lollipop",
 des6:"Perfectly marinated, crispy on the outside and tender on the inside our chicken lollipop are an irresistible snack or appetizer that is hard to put down.",

orderimage7:"order46.avif",
 orderitem7:"Chilli Chicken",

 thirditem:" Family Pack",
orderimage8:"order47.jpg",
 orderitem8:"Chicken biryani [half]",


orderimage9:"order35.avif",
 orderitem9:"Mutton Biryani [5 Serves]",
 
 fouritem:" Mix Veg Curry",
orderimage10:"order48.avif",
 orderitem10:"Paneer Butter Masala",
orderimage11:"order49.jpg",
 orderitem11:"Mushroom Masala",
 fiveitem:" Veg Noodles",
orderimage12:"order50.avif",
 orderitem12:"Schezwan Veg Noodles",
 
orderimage13:"order51.jpg",
 orderitem13:"Egg Noodles",
 
 

    
  },

{
   id: 3, 
   img: "card6.avif",
   name:"Suvai Briyani Family Restraurant",
   rating:"4.2",
   dishes:"Briyani",
   price:"300 for two",
   state:"Karumandapam, Trichy",
   distance:"4km",
    place:"karumandapam",
   Nation:"Suvai Briyani Family Restaurant",
   open:"11am – 11pm (Today)",
   phone:"+916687899989",
   address:"73/2, Karumandapam, Trichy",
   image:"tableimg17.avif",
   image2:"tableimg18.avif",
   image3:"tableimg19.avif",
   Cuisines1:"Briyani ",
   pages1:"10pages",
   menuname1:"Food Menu",
   Image:"foodmenu5.avif",
   cost:"₹300 for two people (approx.)",
   quality:"People Say This Place Is Known For",
   details:"Excellent Experience, Buffet Variety and Quality, Silent Place, Birthday Celebrations, Very Good Quality, Servicing",
   payment:"Cash and Cards accepted",
   digital:"Digital payments accepted",
   info1:"Lunch",
info2:" Dinner",
 info3:" Home delivery",
 info4:" Takeaway available",
 info5:"Indoor seating",
 info6:"Free parking" ,
 onlineitem1:"Briyani (3)",
 firstitem:"Biryani",
 orderimage1:"order52.avif",
 orderitem1:"Chicken Empty Biryani",
 des1:"Biryani served with boiled egg, onion raita and brinjal gravy. seeraga samba rice  ,bullet rice (packed in 500ml box+raita+dalcha)",
 orderimage2:"order53.avif",
 orderitem2:"Chicken Biryani",
 des2:"Biryani served with boiled egg, onion raita and brinjal gravy. 2piese 1egg seeraga samba and bullet rice (packed in 500ml box+raita+dalcha+pieces 1+1egg)",
  orderimage3:"order54.avif",
 orderitem3:"Mutton Biryani",
 des3:"Seeraga samba mutton biryani served with mutton pieces, onion raita and brinjal gravy."
 



 }
  
];

const navigate = useNavigate();
const dispatch = useDispatch();




    return(
        <>
        
        <div className="max-w-[1100px] mx-auto mt-6 flex  justify-between  md:px-8 lg:px-0 ">
         {cards.map((card) => (
        <div key={card.id}
        className=" bg-white  p-3   rounded-xl
                 hover:shadow-2xl 
                 transition-all duration-300 space-y-2   ">
            <img src={card.img} 
            onClick={() => {
//   dispatch(setSelectedCard(card));
  navigate("/Order");
}}
            className="w-[202px] h-[248px] md:w-[200px] md:h-[200px] lg:w-[300px] lg:h-[248px] rounded-xl"/>
            <div className=" flex  md:justify-between lg:justify-between ">
        <h2 className="text-[17px] font-bold  md:max-w-[100px] lg:max-w-[200px] truncate">{card.name}</h2>
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
    {/* <Five /> */}
        
        </>

    );
}

export default Four;