import { useRouter } from 'next/router'

import Footer from '../../comps/Footer';
import Homenav from '../../comps/Homenav';
import BreadcumNew from '../../comps/util/BreadcumNew';
import Head from 'next/head';
import { getLocationIndGiftPageData } from '../api/LocationIndData/getLocationIndGiftPageData';
import GameLocGiftHero from '../../comps/activitiyPageComps/GameLocGiftHero';
import GiftFaq from "../../comps/giftCardPageComps/GiftFaq";
import WhyAdvGiftCards from '../../comps/giftCardPageComps/WhyAdvGiftCards';

import BuyLocGift from '../../comps/activitiyPageComps/BuyLocGift';

const viewLocGift=(props)=>{
   
    const getLoc=(slug)=>{
        
        var sp=router.pathname.split('/')
        var locname=sp[1].split('-')
        var st=locname[locname.length-1].toString()

        locname=locname.slice(0,-1).join(' ')
        return locname+", "+st
    }


    return(
        <>
            <Homenav locationslug={props.pagedata.locationslug} 
                     bookinggame={props.pagedata.bookingdata}
                     location={getLoc(props.locationslug)}
                          activitylist={props.activitylist}
                          eventlist={props.eventlist}
                          />
                 <div id="mainContent" className='main-content'>
 
                 {/* =======header content and breadcum======== */}
                                <Head>
                                 <title>All in adventure Locations</title>
                                 <meta name="description" content="All in one adventure escape games" />
                                 
 
                               </Head>
                               <div className='breadcum py-1 md:py-1 lg:py-3 bg-[#fffceb]'>
                                    <BreadcumNew/>
                                 </div>
                                 
                         {/* =======header content and breadcum======== end */}
                         {/* ===========Page Content here=========
                         <GameLocHero pagedata={props.pagedata}/>
                         */}
                         <GameLocGiftHero pagedata={props.pagedata}/>
                         <BuyLocGift locationslug={props.pagedata.locationslug} bookingdata={props.pagedata.bookingdata}/>
                         <WhyAdvGiftCards locationslug={props.pagedata.locationslug} bookingdata={props.pagedata.bookingdata}/>
                         <GiftFaq faqlist={props.faqlist}/>
                            
                            {console.log(props.pagedata)}
                 </div>
 
             <Footer  location={getLoc(props.locationslug)}/>
        
        </>
    )
}

export default viewLocGift

export const getStaticProps=async()=>{
    //var router = useRouter()
   // routerSlug=routerSlug.split('-')
  
    const locationGiftdata=getLocationIndGiftPageData("albany-ny")
   
    

    return{
        props:{
          pagedata:locationGiftdata.pagedata,
          pagemeta:locationGiftdata.pagemeta,
          faqlist:locationGiftdata.gift_faq,
          activitylist:locationGiftdata.activitylist,
          eventlist:locationGiftdata.eventlist
         
        },
        revalidate: 30
    }

}