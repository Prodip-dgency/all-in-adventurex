import { useEffect, useState } from 'react';
import Script from 'next/script';
import Footer from '../../comps/Footer';
import Homenav from '../../comps/Homenav';
import Breadcrumbs from 'nextjs-breadcrumbs';
import Head from 'next/head';
import { FiChevronRight } from "react-icons/fi";
import LocationHomeHero from '../../comps/homepagecomps/LocationHomeHero';
import Howtobook from '../../comps/homepagecomps/Howtobook';
import InpersonEscapeSlider from '../../comps/homepagecomps/InpersonEscapeSlider'
import PlaningEventsSlider from '../../comps/homepagecomps/PlaningEventsSlider'
import PysicalEscape from '../../comps/homepagecomps/PysicalEscape'
import VirtualEscapeSlider from '../../comps/homepagecomps/VirtualEscapeSlider'
import BuyGiftCard from '../../comps/homepagecomps/BuyGiftCard'
import WhatIsEscape from '../../comps/homepagecomps/WhatIsEscape'
import WhoCanplay from '../../comps/homepagecomps/WhoCanPlay'
import HomeReviewSlider from '../../comps/homepagecomps/HomeReviewSlider'
import { getLocationHomepageData } from '../api/getLocationHomepageData';
import { getLocationSlugList } from '../api/getLocationSlugList';
import LocationDetails from '../../comps/locationsPage/LocationDetails';
const location=(props)=>{

    /* custom breadcum code */
 const toTitleCase=(title)=>{
   const titlefres=title.replace(/-/g,' ')
    const btitle=titlefres.split(' ').map((word)=>{return (word.charAt(0).toUpperCase() + word.slice(1))}).join(" ") // breadcum title capitalize
    
    /*const  getSluglist=async ()=>{
        const all= await getLocationSlugList();
        return all
    }
    const list=getSluglist()
    console.log(list)*/
    return (

      <div className='bitem flex items-center'><span>{btitle}</span> <span className='bsep text-gold'><FiChevronRight/></span></div>
    )
   }
   /* customizing breadcum */

    return (
        <>
     <Script src="https://fareharbor.com/embeds/api/v1/?autolightframe=yes" />
            <Homenav locationslug={props.pagedata.slug} 
                        bookingall={props.pagedata.bookingall} 
                         location={props.pagedata.locationcity+", "+props.pagedata.locationstate}
                         activitylist={props.activitylist}
                         eventlist={props.eventlist}
                         locationlist={props.locationlist}
                         />
                <div id="mainContent" className='main-content'>

                {/* =======header content and breadcum======== */}
                            <Head>
                                <title>All in adventure Locations</title>
                                <meta name="description" content="All in one adventure escape games" />
                                

                              </Head>
                              <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                     <Breadcrumbs
                                            listClassName="max-w-7xl mx-auto px-2 md:px-4 breadcum-list text-sm md:text-base lg:text-lg"
                                            inactiveItemClassName="inline-block text-[#6a6a6a] hover:text-red-700"
                                            activeItemClassName="inline-block text-[#212121]"
                                            rootLabel="home"
                                            replaceCharacterList={[{ from: '-', to: ' ' }]}
                                            transformLabel={(title) => { return toTitleCase(title)} }

                                            >
                                      </Breadcrumbs>
                                </div>
                                <div className='text-red'>{props.slug}</div>
                        {/* =======header content and breadcum======== end */}
                        {/* ===========Page Content here========= */}
                            <LocationHomeHero pagedata={props.pagedata}/>
                            <Howtobook></Howtobook>
                             <InpersonEscapeSlider locationslug={props.pagedata.slug} inpersongames={props.inpersongames} bookingData={props.bookingData}/>
                             <PysicalEscape othergames={props.othergames} locationslug={props.pagedata.slug} bookingData={props.bookingData}/>
                              <VirtualEscapeSlider virtualgames={props.virtualgames}/>
                             <PlaningEventsSlider events={props.events} locationslug={props.pagedata.slug}/>
                             <BuyGiftCard locationslug={props.pagedata.slug}  bookingData={props.bookingData}/>
                             <WhatIsEscape/>
                            <WhoCanplay/>
                            <HomeReviewSlider reviews={props.reviews}/>
                            <LocationDetails locdetail={props.pagedata.locdetail}/>

                </div>
                {
                    console.log(props.pagedata)
                }

            <Footer  location={props.pagedata.locationcity+", "+props.pagedata.locationstate}/>
        </>

    )
}

export default location

export const getStaticPaths=async()=>{
    const res= await getLocationSlugList();

    const paths=res.map(urlslug=>{
            return {
                params:{location: urlslug.slug.toString()}
            }
    } )

    return {
        paths,
        fallback:false
    }

}

export const getStaticProps=async(context)=>{

    const locationHomedata=await getLocationHomepageData(context.params.location)

    return{
        props:{
            pagedata:locationHomedata.pagedata,
            inpersongames:locationHomedata.inpersongames,
            othergames:locationHomedata.otherphysicalgames,
            virtualgames:locationHomedata.virtualgames,
            events:locationHomedata.events,
            reviews:locationHomedata.locationreviews,
            bookingData:locationHomedata.bookingData,
            activitylist:locationHomedata.activitylist,
            eventlist:locationHomedata.eventlist,
            locationlist:locationHomedata.locationlist
          
        },
        revalidate: 30
    }

}



