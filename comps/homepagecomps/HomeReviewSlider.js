import TitleSeparator from "../util/TitleSeparator"
import Link from "next/link"
import { FaAngleRight } from "react-icons/fa"
import HomeReviewCarousel from "./HomeReviewCarousel";

const HomeReviewSlider=(props)=>{

    return (<div className="homereview relative py-16 md:py-20 lg:py-28 overflow-hidden" style={
      {
          backgroundImage :  "linear-gradient(65deg,rgba(255, 249, 235,.1),rgba(255, 249, 235,.2)),url('/assets/gridbg.jpg')"
      }}>
   {/** =======ornamental icon===== */}
      <div className="pl-or pl-or-1 absolute top-0 left-0"> 
          <img src="/assets/pl-bgi-1.png"></img>
      </div>
      <div className="htb-bg-icon htb-bg-3 absolute"><img src="/assets/Navigation.png"></img></div>
      <div className="htb-bg-icon htb-bg-2 absolute"><img src="/assets/Compas-brown.png"></img></div>
      <div className="htb-bg-icon htb-bg-4 absolute"><img src="/assets/Skull.png"></img></div>

    {/** =======ornamental icon end===== */}
    <div className="max-w-7xl mx-auto  px-4 relative z-20 ">
         <TitleSeparator title='CUSTOMERS LOVE ALL IN ADVENTURES' color='golden-text' weight='font-bold'/>
         <div className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-4 md:mb-16">
                <p className="text-gray-700 md:px-8">Our escape room game masters are amazing and make sure everyone feels like a rockstar while playing. Players say it is the best and the most fun experience they've ever had.</p>
            </div>
    </div>
    <div className="slider-box pb-4 md:pb-8 relative">  
    <HomeReviewCarousel reviews={props.reviews}/>
    </div>
    <div className="view-all flex justify-center pt-8 md:pt-12 lg:pt-16">
        
          <a href="/testimonials/" className="flex lg:text-lg justify-center space-x-2 items-center text-red-500 hover:text-red-700"><span>See more customer testimonials</span> <FaAngleRight/></a>
        
     </div>
     
         
</div>
)


}

export default HomeReviewSlider;