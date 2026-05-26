
import { fooditems } from "./fooditems";
import { useParams, useSearchParams} from "react-router-dom";
import { addToCart, decrementQty ,openCart } from "./cardslice";
import { useDispatch,useSelector } from "react-redux";
import Cartbar from "./Cartbar";
function Onlineorder() {

  const [SearchParams] = useSearchParams()
  const id = SearchParams.get("id");

  const selectedCard = fooditems.find(
    (item) => item.id === Number(id)
  );
  console.log('dsab',selectedCard)

  console.log(selectedCard,"selectedCard")

  const dispatch = useDispatch();
  // const handleAddClick =() =>{
  //  dispatch(addToCart(item));
  //  dispatch(openCart());

  // };
  const cartItems = useSelector((state) => state.click.cartItems);
  console.log('bjhbj', cartItems)



  

  return (   
    <div className="">
                  
                 
        {        selectedCard?.hlo?.map((item) => {
            
            const cartItem = cartItems.find(c => c.id === item.id);
            console.log('nn',cartItem)
            const handleAddClick =() =>{
   dispatch(addToCart(item));
   dispatch(openCart());

  };
  console.log('gg', handleAddClick )


           

        return (
          <div key={item.id} className="flex gap-4 mt-6 ">

            <div className="relative">
              <img
                src={item.orderimage}
                alt="order2"
                className="w-[120px] h-[100px] md:w-[130px] md:h-[130px]  rounded-lg"
              />

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">

                {!cartItem ? (
                  <button
                    onClick={() => handleAddClick (item)}
                    className="px-2 py-1 md:px-4 md:py-1 text-white  rounded shadow bg-red-600 text-[10px] md:text-[16px] "
                  >
                    ADD
                  </button>
                ) : (
                  <div className="flex items-center gap-3  text-black bg-white  border px-1 py-1 md:px-3 md:py-1  rounded shadow text-[10px] md:text-[16px]">

                    <button onClick={() => dispatch(decrementQty(item.id))}>
                      -
                    </button>

                    <span>{cartItem.quantity}</span>

                    <button onClick={() => dispatch(addToCart(item))}>
                      +
                    </button>

                  </div>
                )}

              </div>
            </div>

            <div className="space-y-2 md:space-y-4">
              <h1 className="text-[12px] md:text-[18px] font-semibold">{item.orderitem}</h1>
              <p className="max-w-[490px] text-[10px] md:text-[14px] text-gray-700">
                {item.des}
              </p>
              <p className="text-[10px] md:text-[14px]"> ₹{item.price}</p>
            </div>

          </div>
        )

        }

)}
<Cartbar />

    </div>
  )
}

export default Onlineorder;



    
