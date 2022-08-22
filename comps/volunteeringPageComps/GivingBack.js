import GameTitleSeparator from "../util/GameTitleSeparator"

import { FiChevronDown,FiMapPin } from "react-icons/fi";


const GivingBack=()=>{

    const showVolunteeringMenu=()=>{
        document.getElementById('volunteeringdloc').classList.remove('hidden')
    }


    return(
        <div className="Giving-back relative bg-center bg-cover" style={{backgroundImage:'url("/assets/game-dt-bg.jpg")'}}>
            <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
                <div className="section-container max-w-7xl mx-auto px-4 py-16 md:py-20 lg:py-28 relative z-30">
                <div className="abt-row flex flex-col md:flex-row justify-between items-center">
                    <div className="abt-col md:w-[58%] lg:w-[48%] order-2 md:order-1">
                      <div className="section-title-sep mt-4 md:mt-0">
                            <p className="text-lg text-[#938056] uppercase">Volunteering</p>
                            <GameTitleSeparator title="GIVING BACK TO COMMUNITIES" color="golden-text" weight="font-bold"/>    
                         </div>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-8">As you know, at All In Adventures, we connect family, 
                        friends and co-workers through shared, interactive escape rooms, game show rooms, axe throwing adventures and more!
                        </p>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">Within our own work culture, we take pride in regulating 
                        helping each other by eagerly sharing our knowledge, ideas and fun game tips! You name it and we tend to go "All 
                        In" to help each other out!
                        </p>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6">The company's community outreach program, ALL IN TOGETHER, 
                        aims to "spread the spirit of giving" by providing non-profit 501(c)(3) charities with a few sphere hands 
                        when assistance is needed with small projects or local fun rising initiatives.

                        </p>
                        <p className="text-gray-700 lg:text-lg mt-4  lg:mt-6"> If your organisation could benefit from some of our shared time, 
                        energy and efforts, we would love to hear about it. Not sure if your group is a good match? Keep reading below!
                         </p>

                         <button onClick={showVolunteeringMenu} className="mt-6 md:mt-8 rounded-full  text-center py-3 md:py-3 lg:py-4 px-4 md:px-8 lg:px-10 flex justify-between items-center space-x-8 md:space-x-12 lg:space-x-16 bg-red-600 hover:bg-red-700 text-white uppercase">
                                <div className="flex space-x-2 items-center">

                                     <span className="text-xl"><FiMapPin/></span>
                                    <span className="lg:text-lg">CHOOSE YOUR LOCATION</span>
                                </div>
                                <div>
                                    <span className="lg:text-2xl"><FiChevronDown/></span>

                                </div>

                         </button>
                      
                    </div>
                    <div className="abt-col md:w-[40%] lg:w-[48%] order-1 md:order-2">
                        <img className="mx-auto" src="/assets/escape-room-volunteering.jpg"></img>
                    </div>


                </div>

                </div>
            <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )

}

export default GivingBack