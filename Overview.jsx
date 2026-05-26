import { useState } from "react";
import { fooditems } from "./fooditems";
import { useParams, useSearchParams} from "react-router-dom";

function Overview () {

    const [searchParams] = useSearchParams(); 
        const id = searchParams.get("id");
    
       const selectedCard = fooditems.find(
         (item) => item.id === Number(id) )
    
    return(
        <>
        <div className="max-w-[1100px] mx-auto">
             <div>
                <div className="border w-[300px] md:w-[720px]  px-4 mt-4 py-4">
                    {/* <h1 className="text-[20px]">Dining Offers</h1>
                    <p className="text-[14px]">Tap on any offer to know more</p>
                    <div className="border border-gray-300  rounded-md inline-block w-[212.45px] h-[142px] mt-4 ">
                        <p className="px-4   py-2 text-[14px] text-blue-500 font-bold">SURPRISE</p>
                        <div className="pt-6">
                        <p className="px-4  max-w-[116px]  text-[15px] font-semibold ">Get a scratch card</p>
                        <p className="px-4  text-[12px] text-gray-500 font-semibold"> after every transaction</p> 
                       </div>  */}
                         {/* </div>  */}
                    
                        <h1 className="text-[20px]">Menu</h1>
                          <p className="text-[16px] text-[#674B00] font-semibold pt-4">Cuisines</p>
                          <div className=" grid  grid-cols-2 md:grid-cols-4 gap-2 mt-2 text-center  ">
                         {selectedCard?.Cuisines1 && <p className="text-[10px] md:text-[14px] border border-[#674B00] px-2 py-1 rounded-full  text-[#674B00] "> ⭐︎{selectedCard?.Cuisines1}⭐︎</p>}
                          {selectedCard ?.Cuisines2 && <p className="text-[10px] md:text-[14px] border  border-[#674B00] px-2 py-1 rounded-full text-[#674B00] ">⭐︎{selectedCard?.Cuisines2}⭐︎</p>}
                          {selectedCard ?.Cuisines3 && <p className="text-[10px] md:text-[14px] border  border-[#674B00] px-2 py-1 rounded-full text-[#674B00]">⭐︎{selectedCard?.Cuisines3}⭐︎</p>}
                           {selectedCard ?.Cuisines4 && <p className="text-[10px] md:text-[14px] border   border-[#674B00] px-2 py-1 rounded-full text-[#674B00]">⭐︎{selectedCard?.Cuisines4}⭐︎</p>}
                           {selectedCard ?.Cuisines5 && <p className="text-[10px] md:text-[14px] border   border-[#674B00] px-2 py-1 rounded-full text-[#674B00]">⭐︎ {selectedCard?.Cuisines5}⭐︎</p>}
                           {selectedCard ?.Cuisines6 && <p className="text-[10px] md:text-[14px] border   border-[#674B00] px-2 py-1 rounded-full text-[#674B00]">⭐︎ {selectedCard?.Cuisines6} ⭐︎</p>}
                           {selectedCard ?.Cuisines7 && <p className="text-[10px] md:text-[14px] border   border-[#674B00] px-2 py-1 rounded-full text-[#674B00]"> ⭐︎{selectedCard?.Cuisines7}⭐︎</p>}
                           {selectedCard ?.Cuisines8 && <p className="text-[10px] md:text-[14px] border   border-[#674B00] px-2 py-1 rounded-full text-[#674B00]">⭐︎ {selectedCard?.Cuisines8} ⭐︎</p>}
                           </div>
                           {selectedCard?.Topdishes && (
                            <>
                        <p className="text-[16px] pt-6 text-[#674B00] font-semibold">Top Dishes</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 mt-2 text-center gap-2 ">
                        <p className="text-[10px] md:text-[14px] border  px-2 py-1 rounded-full   border-[#674B00] text-[#674B00]">⭐︎{selectedCard?.Topdishes}⭐︎</p>
                        <p className="text-[10px] md:text-[14px] border px-2 py-1 rounded-full border-[#674B00] text-[#674B00]">⭐︎{selectedCard?.Topdishes2}⭐︎</p>
                         <p className="text-[10px] md:text-[14px] border px-2 py-1 rounded-full border-[#674B00] text-[#674B00]">⭐︎{selectedCard?.Topdishes3}⭐︎</p>
                          <p className="text-[10px] md:text-[14px] border px-2 py-1 rounded-full border-[#674B00] text-[#674B00]">⭐︎{selectedCard?.Topdishes4}⭐︎</p>
                           <p className="text-[10px] md:text-[14px] border px-2 py-1 rounded-full border-[#674B00] text-[#674B00] ">⭐︎{selectedCard?.Topdishes5}⭐︎</p>
                            <p className="text-[10px] md:text-[14px] border px-2 py-1 rounded-full border-[#674B00] text-[#674B00] ">⭐︎{selectedCard?.Topdishes6}⭐︎</p>
                             
                              </div>
                              </>
                               )}
                        <div className=" flex gap-6">
                            <div className=" mt-8">
                        <img src={selectedCard?.Image} className="w-[218.67px] h-[218.67px] transition-transform duration-300 hover:scale-110"/>
                        <p className="text-[14px] md:text-[16px] text-center">{selectedCard?.menuname1}</p>
                        <p className="text-[10px] md:text-[12px] text-center  text-gray-700">{selectedCard?.pages1}</p>
                        </div>
                        {selectedCard.beverages && (
                        <div className="mt-8 ">
                        <img src={selectedCard?.beverages} className="w-[218.67px] h-[218.67px] transition-transform duration-300 hover:scale-110"/>
                        <p className="text-[14px] md:text-[16px] text-center">{selectedCard?.menuname2}</p>
                        <p className=" text-[10px] md:text-[12px] text-center text-gray-700">{selectedCard?.pages2}</p>
                        </div>
                        )}
                        
                            {selectedCard?.thirdpart &&(
                                <div className="mt-8">
                            <img src={selectedCard?.thirdpart} className="w-[218.67px] h-[218.67px] transition-transform duration-300 hover:scale-110"/>
                            <p className="text-[16px] text-center">{selectedCard?.menuname3}</p>
                           <p className="text-[12px] text-center text-gray-700">{selectedCard?.pages3}</p>
                            
                            </div>
                            )}
                            </div>
                        
                            </div>

                            <div className="  border w-[300px] md:w-[720px] px-4 py-4 mt-6">
                                <h1 className="text-[15px] md:text-[20px]">{selectedCard?. quality}</h1>
                                <p className="text-[12px] md:text-[16px]  max-w-[650px] text-gray-700">{selectedCard?.details}</p>
                                <h1 className="text-[15px] md:text-[20px]">Average Cost</h1>
                                <p className="text-[12px] md:text-[16px] text-gray-700">{selectedCard.cost}</p>
                                <p className="text-[12px] md:text-[12px] text-gray-400">Exclusive of applicable taxes and charges, if any</p>
                                <p className="text-[12px] md:text-[12px] text-gray-300">How do we calculate cost for two?</p>
                               <hr className="border-t border-dotted border-gray-400 w-[240px]" />
                                { selectedCard.payment &&<p className="text-[14px] text-gray-700">{selectedCard.payment}</p>}
                               {selectedCard?.digital &&  <p className="text-[14px] text-gray-700">{selectedCard.digital}</p>} 
                            
                            </div>
                            <div className="border w-[300px] md:w-[720px] mt-6 px-3 py-4" >
                                <h1 className="text-[15px] md:text-[20px]">More info</h1>
                                <div className=" grid grid-cols-1 md:grid-cols-3 gap-y-4 mt-4    ">
                                    <div  className="flex  items-center gap-2">
                              
                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                  <p className="text-[12px] md:text-[14px]  ">{selectedCard?. info1}</p>
                                </div>
                                <div className="flex items-center  gap-2">
                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                <p className=" text-[12px] md:text-[14px]  ">{selectedCard?. info2}</p>
                                </div>
                                <div className="flex  items-center  gap-2">
                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                <p className="text-[12px] md:text-[14px] ">{selectedCard?. info3}</p>
                                </div>
                                { selectedCard.info4 && <div className="flex items-center  gap-2">
                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                <p className=" text-[12px] md:text-[14px] ">{selectedCard?. info4}</p>
                                </div>}
                                { selectedCard?. info5 &&<div className="flex  items-center  gap-2">

                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                <p className=" text-[12px] md:text-[14px]">{selectedCard?. info5}</p>
                                </div>}
                                { selectedCard?. info6 && <div className="flex items-center  gap-2">
                                <span className=" border bg-green-700 inline-block rounded-full  ">✔</span>
                                <p className="text-[12px] md:text-[14px] "> {selectedCard?. info6}</p>
                                </div>}
                                </div>
                                </div>
                            </div>
                            
                            
                           
                               

                   
            
       
        
            
            </div>



        </>
    
)
   
}

export default Overview;