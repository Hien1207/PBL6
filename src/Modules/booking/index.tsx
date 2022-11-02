/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { Background,ICON_Locate,ICON_Calendar, ICON_Search } from '@assets'
import { Wrapper } from './styled'
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import {InforDetail} from '@components'

const BookingScreen = () => {
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
                     <div className='my-auto w-32 '>
                        <p className='text-white mb-1 '>Tìm chuyến</p>
                     </div>
                  </div>
            </div>
            <h1 className='text-[16px] ml-6 py-4'>Đặt vé xe đi Hà Nội từ Đà Nẵng chất lượng cao và giá vé ưu đãi nhất: 12 chuyến</h1>
            <div className='flex ml-6 text-[15px]'>
                <p className='mr-16 font-bold'>Sắp xếp theo :</p>
                <p className='mr-16'>Giờ đi sớm nhất</p>
                <p className='mr-16'>Giờ đi muộn nhất</p>
                <p className='mr-16'>Giá tăng dần</p>
                <p>Giá giảm dần</p>
            </div>
            <div className='route'>
                <div className='main flex '>
                   <div className='flex w-1/5 mr-6'>
                      <img className='w-[28px] h-[28px] mr-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmcVyV_1ANkrz2-grItqC5mmWqlCw19FDKw&usqp=CAU" alt='' />
                      <p className='font-bold text-lg'>21:00</p>
                   </div>
                   <div className='w-1/5 block mr-14'>
                       <p className='font-bold text-[17px] mb-0'>Tân Kim Chi</p>
                       <p className='text-[12px] underline text-sky-500 flex cursor-pointer'>Thông tin chi tiết
                          <img className='w-[14px] ml-1' src="https://icon-library.com/images/arrow-down-icon-png/arrow-down-icon-png-3.jpg" alt='' />
                       </p>
                   </div>
                   <div className='w-1/5 mr-20'>
                      <p className='font-bold text-[17px] mb-0 '>Còn 10 chỗ trống</p>
                   </div>
                   <div className='w-1/5 block '>
                      <p className='font-bold text-[17px] mb-0 text-[#4457FF] pl-[22px]'>400.000đ
                         <button className='bt-detail' >Chọn tuyến</button>
                      </p>
                   </div>
                </div>
                <InforDetail />
            </div>
         </div>
      </Wrapper>
      </>
   )
}
export default BookingScreen
