

function footer(){
    const year = new Date().getFullYear();
    
    return(
        <div className=" w-full  ">
        <div className=" max-w-[1100px] mx-auto mt-4  pt-10">
            
           
           <div className="   text-center flex justify-between gap-4 md:gap-0  px-4 md:px-4 lg:px-0     ">
                <img src=" footerimage.avif" className=" w-[100px] h-[20px] md:w-[130px] md:h-[28px]"/>
                
                <div className=" grid grid-cols-2 gap-4 text-[18px]">
                <p className="border border-gray-400 px-4 text-center rounded-md">INDIA</p>
                <p className=" border border-gray-400 px-3 text-center rounded-md">english</p>
                </div>
                </div>
                                            
                <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4   lg:gap-20 w-full px-4 md:px-4 lg:px-0   ">
                <div className="space-y-2  text-[14px] text-gray-400">
                    <p className=" text-[18px] font-semibold text-black">About Zomato</p>
                    <p>Who We Are</p>
                    <p>Blog</p>
                    <p>Work With Us</p>
                    <p>Investor Relations</p>
                    <p>Report Fraud</p>
                    <p>Press Kit</p>
                    <p>Contact Us</p>
                </div>
                

                <div className=" space-y-2  text-[14px]  text-gray-400">
                    <p className=" text-[18px] font-semibold  text-black">ZOMAVERSE</p>
                    <p>Zomato</p> 
                    <p>Blink it</p>
                    <p>District</p>
                    <p>Feeding india</p>
                    <p>Hyperpure</p>
                    <p>Zomato Live</p>
                    <p>Zomaland</p>
                    <p>Weather Union</p>
                </div>
                <div className="space-y-2  text-[14px]  text-gray-400">
                    <p className="text-[18px] font-semibold  text-black  lg:text-nowrap ">FOR RESTAURANTS</p>
                    <p>Partner With Us</p>
                    <p>Apps For You</p>
                </div>
                <div className="space-y-2  text-[14px]  text-gray-400">
                    <p className="text-[18px] font-semibold  text-black">LEARN MORE</p>
                    <p>Privacy</p>
                    <p>Security</p>
                    <p>Terms</p>
                </div>
                <div  className="">
                    < p className="text-[18px] font-semibold " >SOCIAL LINKS</p>
                    <div className=" flex mt-2 gap-2">
                    <img src="linkedin.png" className="w-[22px] h-[22px] rounded-full"/>
                    <img src="instagram icon.jpg"className="w-[22px] h-[22px] rounded-full"/>
                    <img src=" twitter icon.jpg" className="w-[22px] h-[22px] rounded-full"/>
                    <img src="youtube.jpg" className="w-[22px] h-[22px] rounded-full"/>
                    <img src=" facebook icon.jpg" className="w-[22px] h-[22px] rounded-full"/>
                    </div>
                    <div className=" space-y-4 mt-6">
                        <img src="appstore.webp" className="w-[137px] h-[40px]"/>
                        <img src="googleplay.webp" className="w-[137px] h-[40px]"/>
                    </div>
                  
                </div>
                </div>
                  <hr className="bg-gray-800 mt-8 border border-t "/>

                  <p className="pt-8 text-[13px] text-gray-400   mx-auto px-4 md:px-4 lg:px-0 ">By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-{year} © Zomato™ Ltd. All rights reserved.</p>
                
                
            
        
      
        </div>
        </div>
        

    );
}

export default footer;