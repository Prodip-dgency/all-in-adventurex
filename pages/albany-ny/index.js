import React, { useEffect,useState } from "react";
import Router from 'next/router'

const locationPage=()=>{

   

       
        
            
          
        
   
    
    return ( 
        <p>
        
        </p> 
    )

}
export default locationPage

export async function getStaticProps() {
    const content = null;
  
    if (!content) {
      return {
        redirect: {
          permanent: false,
          destination: '/locations/albany-ny',
        },
      };
    }
  
    return {
      props: {},
    };
  }