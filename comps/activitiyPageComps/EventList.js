
import Link from "next/link"
import TitleSeparator from "../util/TitleSeparator"

const EventList=(props)=>{
    const showLocation=()=>{

        document.getElementById('locmenu').classList.remove('hidden')
        
      }

    return(
        <div className="all-events relative bg-center bg-cover pt-12" style={{backgroundImage:"url('/assets/game-dt-bg.jpg')"}}>
             <div className="w-full absolute top-0 left-0 "><img className="w-full" src="/assets/game-home-or1.jpg"></img> </div>
                 <div className="all-games-container max-w-7xl mx-auto relative  z-30 py-16 md:py-20 lg:py-28 px-4">
                 <div className="all-gamelist-box grid grid-cols-1 gap-y-4 md:gap-y-6 lg:gap-y-8">
                    <div className="section-title  text-center max-w-[600px] mx-auto">
                        <TitleSeparator title="GROUP EVENTS AND PARTIES" color="golden-text" weight="font-bold"/>
                        <p className="text-gray-700 md:px-8 md:text-lg">Step inside your exclusive 60 minute private step adventure. Step inside your exclusive 60 minute private step adventure </p>
                    </div>
                {
                        props.events.map((event)=>{

                            return(
                                <div key={event.id} className="all-game-list bg-center bg-cover p-4 md:p-6 lg:p-8" 
                                        style={{backgroundImage:"linear-gradient(40deg,rgba(0,0,0,0.82),rgba(0,0,0,0.6),rgba(0,0,0,0.2)),url('"+event.event_cover_image+"')",
                                        boxShadow:"0px 0px 12px 1px rgba(0,0,0,0.25)"}}>
                                    
                                     <div className="all-game-list-gap py-[80px] md:py-[12%] lg:py-[100px]">
                                    
                                    </div>
                                 <div className="all-game-list-bottom">
                                        <div className=" text-center md:text-left">
                                          <h3 className="card-game-title text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">{event.event_name}</h3>
                                          <p className="text-gray-200 lg:text-lg mx-auto md:mx-0 max-w-[490px]">{event.event_desc}</p>
                                         </div>
                                         <div className="card-game-link mt-4 text-left">
                                             <button onClick={showLocation} className="border-2 w-[240px] card-book-btn block md:inline-block mx-auto md:mx-0 border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700 text-white">BOOK NOW</button>
                                             <Link href={"/events/"+event.event_slug}> 
                                                                                        
                                              <a className="text-center border-2 w-[240px] block md:inline-block mx-auto md:mx-4  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700 text-white">LEARN MORE</a>
                                              </Link>
                                        </div>
                                    
                                 </div>

                        </div>

                            )

                        })

                }
                </div>

                </div>
            <div className="w-full absolute bottom-0 left-0 "><img className="w-full" src="/assets/game-home-or2.jpg"></img> </div>
        </div>
    )
}

export default EventList