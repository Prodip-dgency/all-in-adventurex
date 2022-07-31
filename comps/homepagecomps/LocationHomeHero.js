import Link from "next/link";
import LocationBtn from "../util/LocationBtn";
const LocationHomeHero=(props)=>{
    
        //console.log(props.slug)
    

    return(
        <div className='home-hero' style={
            {
                background:"url('"+props.pagedata.coverimageL+"')"
            }
           }>
        <div className='home-hero-holder '> 
        <div className="homehero-img md:hidden">
                <img src={props.pagedata.coverimageM}></img>
             </div>
            <div className='max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-28 xl:py-40 relative z-10'>
                <div className="page-benar-info"> 
                
                 <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center uppercase'>AT {props.pagedata.locationaddress} IN {props.pagedata.locationcity}, {props.pagedata.locationstate}</p> 
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os'>ESCAPE ROOMS AND FUN ACTIVITES</h1>
                 <p className='text-gray-100 max-w-2xl mx-auto text-center lg:text-lg'>#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend &amp; family today. </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 pb-8 ">

                        {/*============location search btn==========*/}
                        <div className="booking-btn">
                                <Link href={"/"+props.pagedata.locationcity+"-"+props.pagedata.locationstate+"/booking"}> 
                                        <a className="block py-3 rounded-full text-center  text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-lg">BOOK NOW</a>
                                </Link>
                         </div>
                         <div className="booking-btn mt-4">
                                <Link href={"/"+props.pagedata.locationcity+"-"+props.pagedata.locationstate+"booking"}> 
                                        <a className="block py-3 rounded-full text-center  text-white font-medium border-2 border-red-600  hover:bg-red-700 hover:border-red-700 text-lg">BOOK AN EVENT</a>
                                </Link>
                         </div>
                         {/*============location search btn==========*/}


                </div>

                <div style={{
                    background:"#FFFBF3"
                         }} 
                    className="un-games  max-w-2xl mx-auto bottom--4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        <div>  

                        <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalUniqueGames }</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">Unique Games</p>
                        </div>
                            

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalFiveStarReview}</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">5-Star Reviews</p>

                        </div>
                        <div  className="text-center"> 
                            <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalPlayerEscaped}</p>
                            <p className="text-gray-700 text-xs md:text-base lg:text-lg">Players Escaped</p>

                        </div>

                    </div>

                </div>
            </div>
        </div>
        </div>
    )
}

export default LocationHomeHero;