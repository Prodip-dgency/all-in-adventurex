

const VirtualHero=(props)=>{

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
            <div className='max-w-7xl home-hero-container mx-auto px-4 pt-0 pb-20 md:py-20 lg:py-32 xl:py-40 relative z-10'>
                <div className="page-benar-info"> 
                {
                    props.pagedata.category!="showroom" &&
                    <p className=' md:mt-0 font-semibold text-lg md:text-2xl mb-2 text-white text-center'>CHOOSE FROM {props.pagedata.totalLocations} US LOCATIONS</p> 
                }
                
                 <h1 className='golden-text font-bold text-center text-3xl md:text-5xl lg:text-6xl mb-8 font-os uppercase'>{
                 
                        props.pagedata.pagetitle 
                 
                 } </h1>
                 <p className='text-gray-100 max-w-[800px] mx-auto text-center lg:text-lg'>{props.pagedata.pagesubtitle } </p>
                 </div>
                <div className="max-w-md mx-auto mt-8 ">

                        {/*============location search btn==========*/}
                       <button className="w-full text-center bg-red-600 hover:bg-red-700 py-3 md:py-4 px-6 font-medium text-lg text-white rounded-full">BOOK NOW</button>
                         {/*============location search btn==========*/}


                </div>
                {   props.pagedata.notice &&
                    <div className="home-botice-des mt-4 md:mt-8 text-[#dddddd] max-w-[700px] mx-auto text-center md:text-lg" dangerouslySetInnerHTML={{ __html: props.pagedata.notice }}>
                                             
                                            
                    </div>
                }
              
                
                { props.gametotal ||

                <div style={{
                    background:"#FFFBF3"
                         }} 
                    className="un-games  max-w-2xl mx-auto bottom-4 left-0 right-0 absolute bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded">
                    <div className="grid grid-cols-3 justify-evenly items-center divide-x devide-gray-500">
                        <div className="text-center flex justify-center"> 
                        {
                            props.pagedata.totalUniqueGames &&
                            <div>  
                         
                                 <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalUniqueGames}</p>
                                 <p className="text-gray-700 text-xs md:text-base lg:text-lg ">Unique Games</p>
                              </div>
                        }
                        {
                            props.pagedata.max_players &&
                            <div>  
                         
                                 <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.min_players}-{props.pagedata.max_players}</p>
                                 <p className="text-gray-700 text-xs md:text-base lg:text-lg ">Players</p>
                              </div>
                        }
   
                        </div>
                        {   props.pagedata.totalFiveStarReview &&
                                <div  className="text-center"> 
                                  <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalFiveStarReview}</p>
                                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">5-Star Reviews</p>
    
                                </div>
                        }
                         {   props.pagedata.price &&
                                <div  className="text-center"> 
                                  <p className="golden-text text-xl md:text-4xl font-os font-bold">${ props.pagedata.price}</p>
                                    <p className="text-gray-700 text-xs md:text-base lg:text-lg">Per Player</p>
    
                                </div>
                        }
                        {
                            props.pagedata.totalPlayerEscaped &&
                                <div  className="text-center"> 
                                     <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.totalPlayerEscaped}</p>
                                     <p className="text-gray-700 text-xs md:text-base lg:text-lg">Players Escaped</p>
    
                                 </div>
                        }
                        {
                            props.pagedata.duration &&
                                <div  className="text-center"> 
                                     <p className="golden-text text-xl md:text-4xl font-os font-bold">{props.pagedata.duration} MIN</p>
                                     <p className="text-gray-700 text-xs md:text-base lg:text-lg">Duration</p>
    
                                 </div>
                        }

                    </div>

                </div>

                }
            </div>
        </div>
        </div>
    )
}

export default VirtualHero