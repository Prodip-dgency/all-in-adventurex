
import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react";
import Script from "next/script";


const InpersonCarousel=(props)=>{
    //console.log(inpersongames)
    const [gameSlug,setGamSlug]=useState(null)

    const showLocation=()=>{
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('overflow-hidden')
            document.getElementById('locmenu').classList.remove('hidden')
            
          }
          
          const openBooking=(shortname,booking)=>{
            FH.open({
              shortname: shortname,
              fallback: 'simple', 
              fullItems: 'yes', 
              flow: booking.flow, 
              view: { item: booking.item }
            });
          }
    
          const showDescription=(description)=>{
            if(description.length>144){
              const cutDescription=description.slice(0, 2000)+" ...";
              return cutDescription
            }
         
            return description
            
        }
    const responsive = {
        desktoplg: {
            breakpoint: { max: 4000, min: 1640 },
            items: 5,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
          },
          desktopmd: {
            breakpoint: { max: 1640, min: 1440 },
            items: 4,
            slidesToSlide: 1,
            partialVisibilityGutter: 20
          },
        desktop: {
          breakpoint: { max: 1440, min: 1024 },
          items: 3,
          slidesToSlide: 1,
          partialVisibilityGutter: 24
        },
        tablet: {
          breakpoint: { max: 1024, min: 520 },
          items: 2,
          slidesToSlide:1,
          partialVisibilityGutter: 24
        },
        mobile: {
          breakpoint: { max: 520, min: 0 },
          items: 1,
          slidesToSlide: 1,
          partialVisibilityGutter: 50
        }
      };

     
    return (
    <div className="full-carousel inpersongame  "> 
     <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />

    <Carousel
     swipeable={true}
     draggable={true}
     showDots={true}
     arrows={false}
     
     responsive={responsive}
     ssr={true} // means to render carousel on server-side.
     infinite={true}
    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
    autoPlay={ false }
    // autoPlaySpeed={5000}
     keyBoardControl={true}
     customTransition=".5s ease-in-out"
     transitionDuration={500}
     containerClass="carousel-container"
     removeArrowOnDeviceType={["tablet", "mobile"]}
     //deviceType={this.props.deviceType}
     dotListClass="custom-dot-list-style"
     itemClass="game-carousel-card px-2 lg:px-3 py-4 md:py-8"
     renderDotsOutside={true}
     partialVisible={true}
   >

    {
        props.inpersongames.map((inpersongame)=>{
                return(
                    <div key={inpersongame.id} className="text-white bg-gray-300 game-slider-card card-border group" style={{
                        background:"url('"+inpersongame.bgimg+"')"
                      }}>
                        <div className="card-container">
                            <div className="card-head flex justify-between items-center p-4 pb-8">
                                <div className="card-info">
                                    <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/inperson.svg"></img></span><span className="text-sm">{inpersongame.type}</span>  </p>
                                    <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-age.svg"></img></span><span className="text-sm">{inpersongame.age} (6+)</span>  </p> 
                                    <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-time.svg"></img></span><span className="text-sm">{inpersongame.duration} Minutes</span>  </p>
                                    <p className="flex items-center space-x-2 text-gray-50 my-1"><span><img src="/assets/svg/card-person.svg"></img></span><span className="text-sm">{inpersongame.minplayers}-{inpersongame.maxplayers} Players</span>  </p>
                                </div>
                                <div className="card-ribbon">
                                        <div className="inline-block text-center py-2 px-4 bg-red-600">
                                            <p className="text-lg text-white">FROM</p>
                                            <p className="text-2xl md:text-3xl text-white font-bold">${inpersongame.price}</p>
                                        </div>
                                </div>
                            </div>
                            <div className="card-gap py-10"> 
                 
                            </div>
                            <div className="card-bottom p-4  pt-12"> 
                                <div className="card-game-descs h-[250px] text-center">
                                    <h3 className="card-game-title text-2xl lg:text-3xl font-bold uppercase text-white">{inpersongame.title}</h3>
                                    <p className="text-gray-200 lg:text-lg">{ inpersongame.description
                                                                                  }</p>
                                </div>
                                <div className="card-game-link mt-4 text-center">
                                  {
                                    props.bookingData &&
                                    <button onClick={()=>openBooking(props.bookingData.shortname,props.bookingData[inpersongame.slug])} className="border max-w-[200px] card-book-btnxx block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                                  }
                                    {
                                    !props.bookingData &&
                                    <button onClick={()=>showLocation()} className="border max-w-[200px] card-book-btnxx block mx-auto border-red-600 bg-red-600 py-2 md:py-3 px-12 rounded-full font-medium text-lg mb-4 hover:bg-red-700 hover:border-red-700">BOOK NOW</button>
                                  }
                                    {
                                    props.locationslug &&
                                    <Link href={"/"+props.locationslug+"/activities/"+inpersongame.slug}> 
                                   
                                        <a className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</a>
                                    </Link>
                                  }
                                  {
                                    !props.locationslug &&
                                    <Link href={"/activities/"+inpersongame.slug}> 
                                   
                                        <a className="border max-w-[200px] block mx-auto  border-red-600 bg-transparent py-2 md:py-3 px-10 rounded-full font-medium text-lg mb-2 hover:bg-red-700 hover:border-red-700">LEARN MORE</a>
                                    </Link>
                                  }
                                  
                                   
                                </div>
                                
                             </div>
                        </div>
                 
                      </div>
                )
        })
    }
     {/*====== slide 1========= */}
     
   </Carousel>
   </div>
    )
}

export default InpersonCarousel;