import Link from "next/link"


const HeaderBtnRed =(props)=>{
    const showloc=()=>{
        document.getElementById('locmenu').classList.remove('hidden')
      }

      const bookAll=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         // flow:  bookingData.flow, 
          view: 'items'
        });
      }
      const bookGame=(bookingData)=>{
        FH.open({
          shortname: bookingData.shortname,
          fallback: 'simple', 
          fullItems: 'yes', 
         flow:  bookingData.flow, 
          view: {item:bookingData.item}
        });
      }
    return(

        <div  className='heade-btn'>

             {
                    props.bookingall &&
                    <button onClick={()=>bookAll(props.bookingall)} className='bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300'>{props.btntext}</button>
            }
            {
                    props.bookinggame &&
                    <button onClick={()=>bookGame(props.bookinggame)} className='bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300'>{props.btntext}</button>
            }
                {
                    (!props.bookinggame && !props.bookingall) &&
                    <button onClick={showloc} className='bg-red-600 cursor-pointer  rounded font-medium text-white  hover:bg-red-700  py-2 px-6 border border-red-600 hover:border-red-700 transition duration-300'>{props.btntext}</button>
            }
            
                  

        </div>
    )
}
export default HeaderBtnRed;