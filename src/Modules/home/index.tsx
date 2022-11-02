/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { Background,ICON_Locate,ICON_Calendar, ICON_Search ,Quytrinh} from '@assets'
import { Wrapper } from './styled'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { RoutePopular, OutstandingOffer, ConnectionPlatform} from "@components"
import { Link } from "react-router-dom";

const HomeScreen = () => {
   const [startDate, setStartDate] = useState(new Date());
   return (
      <>
      <Wrapper id="intro" className='bg-white'>
         <img src={Background} className="image" alt=''/>
         <div className="w-3/5 bg-white  container rounded-lg block">
            <div className='flex'>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex">
                     <div className='my-auto mx-2'>
                        <img src={ICON_Locate} alt=''/>
                     </div>
                     <div className='my-auto w-32'>
                        <p className='text-sky-600 mb-1'>Điểm đi</p>
                        <input 
                              type="text" 
                              id="start" 
                              name="start"
                              className='w-full pr-2'  
                              placeholder='Chọn điểm đi' />
                     </div>
                  </div>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex">
                     <div className='my-auto mx-2'>
                        <img src={ICON_Locate} alt=''/>
                     </div>
                     <div className='my-auto w-32'>
                        <p className='text-sky-600 mb-1'>Điểm đến</p>
                        <input 
                              type="text" 
                              id="start" 
                              name="start"
                              className='w-full pr-2'  
                              placeholder='Chọn điểm đến' />
                     </div>
                  </div>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex">
                     <div className='my-auto mx-4'>
                        <img src={ICON_Calendar} alt=''/>
                     </div>
                     <div className='my-auto w-32'>
                        <p className='text-sky-600 mb-1'>Ngày khởi hành</p>
                        <DatePicker
                           id="date"
                           selected={startDate} 
                           onChange={(date:Date) => setStartDate(date)} 
                           minDate={new Date()}
                           className='w-full'
                              />
                     </div>
                  </div>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex bg_red">
                     <div className='my-auto ml-8 mr-1'>
                        <img src={ICON_Search} alt='' />
                     </div>
                     <div className='my-auto w-32 cursor-pointer '>
                        <Link to='./booking'>
                           <p className='text-white mb-1 '>Tìm chuyến</p>
                        </Link>
                        
                     </div>
                  </div>
            </div>
            <h1 className='text-lg text-center'>DỄ DÀNG ĐẶT XE TRÊN WEBSITE</h1>
            <img src={Quytrinh} className='pb-6 m-auto ml-20' alt='' />
         </div>
         <RoutePopular/>
         <OutstandingOffer/>
         <ConnectionPlatform />
      </Wrapper>
      </>
   )
}
export default HomeScreen
