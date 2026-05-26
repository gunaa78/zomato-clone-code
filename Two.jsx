import Three from "./Three";
function Two({ collect , get, ddw }){

    return(
        <>
        <div className="max-w-[1100px] mx-auto hidden   ">
        <div className=" mt-6  gap-4  text-gray-400 text-[14px]  md:px-4 lg:px-0  hidden md:flex  "> 
            <button className="border border-gray-300  rounded-md px-1 py-1 ">Filters</button>
            <button className="border border-gray-300 rounded-md px-2 py-1">Offers</button>
            <button  className="border border-gray-300 rounded-md px-2 py-1">Rating 4.5+</button>
            <button  className="border border-gray-300 rounded-md px-2 py-1">Pet Friendly</button>
            
            
            < button className="border border-gray-300 rounded-md px-2 py-1"> Outdoor seating</button>
            <button className="border border-gray-300 rounded-md px-2 py-1">Serves Alcohol</button>
            <buttomn  className="border border-1 border-gray-300 rounded-md px-2 py-1">Open Now</buttomn>
        </div>
        <img src="4.avif" className="mt-10 md:px-10 lg:px-0 "/>

        <h1 className="pt-2  md:px-8 lg:px-0 text-[30px] ">Restaurants in Trichy</h1>
        </div>
       <Three Show ={collect}  adsa ={get} iii={ddw}  />
        </>

    );
}


export default Two