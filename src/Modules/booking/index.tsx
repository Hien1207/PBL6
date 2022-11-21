/* eslint-disable max-len */
/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react'

import { Background,ICON_Locate,ICON_Calendar, ICON_Search } from '@assets'
import { Wrapper } from './styled'
import DatePicker from "react-datepicker";
import { useState , useEffect} from "react";
import "react-datepicker/dist/react-datepicker.css";
import {InforDetail, BookTickets} from '@components'
import Select from "react-select";
import { getLocalStorage, STORAGE } from '@utils'
import { getListLocation,findTrips } from "@apis";


const BookingScreen = () => {
   const [isClickInfor, setIsClickInfor] = useState<any>('');
   const [isClickBook, setIsClickBook] = useState<any>('');
   const [listLocation, setListLocation] = useState([]);
   const [startpoint, setStartPoint] = useState<any>('');
   const [endpoint, setEndPoint] = useState<any>('');
   const [date, setDate] = useState<any>(new Date());
   const [data, setData] = useState<any>();
   const today = new Date()
   const tomorrow = new Date(today)
   tomorrow.setDate(tomorrow.getDate() + 1)

   useEffect(() => {
      getListLocation(setListLocation);
      setStartPoint(JSON.parse(getLocalStorage(STORAGE.startpoint) || '{}'))
      setEndPoint(JSON.parse(getLocalStorage(STORAGE.endpoint) || '{}'))
      const my_date = new Date(JSON.stringify(getLocalStorage(STORAGE.date)).slice(3,13));
      setDate(my_date);
    }, []);

    useEffect(() => {
       findTrips({
         date: JSON.stringify(date).slice(1,11),
         dep: startpoint.value,
         des :endpoint.value}
         ,setData)
    },[startpoint,endpoint, date])

//   console.log(JSON.stringify(date).slice(1,11))
    const onSubmitFindRoute = () => {
      findTrips({
         date: JSON.stringify(date).slice(1,11),
         dep: startpoint.value,
         des :endpoint.value}
         ,setData)
    }
    
    const onClickInfor = (id :any) => {
      if(isClickInfor === '') {
         setIsClickInfor(id)
      }
      if(isClickInfor === id ){
         setIsClickInfor('')
      }
    }

    const onClickBook = (id :any) => {
      if(isClickBook === '') {
         setIsClickBook(id)
      }
      if(isClickBook === id ){
         setIsClickBook('')
      }
    }

    const updatedCountries = listLocation.map((country :any) => ({
      label: country.nameStation,
      value: country.id,
    }));
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
                        <Select
                           id="country"
                           name="country"
                           label="country"
                           className='w-full pr-2'
                           placeholder='Chọn điểm đi'
                           options={updatedCountries}
                           value={startpoint}
                           onChange={(value) => {
                              setStartPoint(value);
                           }}
                         />
                     </div>
                  </div>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex">
                     <div className='my-auto mx-2'>
                        <img src={ICON_Locate} alt=''/>
                     </div>
                     <div className='my-auto w-32'>
                        <p className='text-sky-600 mb-1'>Điểm đến</p>
                        <Select
                           id="country"
                           name="country"
                           label="country"
                           className='w-full pr-2'
                           placeholder='Chọn điểm đến'
                           options={updatedCountries}
                           value={endpoint}
                           onChange={(value) => {
                              setEndPoint(value);
                           }}
                       />
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
                           dateFormat='yyyy-MM-dd'
                           selected={date} 
                           value={date}
                           onChange={(date:Date) => setDate(date)} 
                           minDate={tomorrow}
                           className='w-full'
                              />
                     </div>
                  </div>
                  <div className="w-1/5 h-20 rounded-lg m-6 item flex bg_red">
                     <div className='my-auto ml-8 mr-1'>
                        <img src={ICON_Search} alt='' />
                     </div>
                     <div className='my-auto w-32 cursor-pointer'>
                        <p className='text-white mb-1' onClick={() => onSubmitFindRoute()}>Tìm chuyến</p>
                     </div>
                  </div>
            </div>
            <h1 className='text-[16px] ml-6 py-4'>Đặt vé xe đi {endpoint.label} từ {startpoint.label} chất lượng cao và giá vé ưu đãi nhất: {data?.length} chuyến</h1>
            <div className='flex ml-6 text-[15px]'>
                <p className='mr-16 font-bold'>Sắp xếp theo :</p>
                <p className='mr-16'>Giờ đi sớm nhất</p>
                <p className='mr-16'>Giờ đi muộn nhất</p>
                <p className='mr-16'>Giá tăng dần</p>
                <p>Giá giảm dần</p>
            </div>
            {data?.map((item : any, index :any) => (
               <div className='route'>
               <div className='main flex '>
                  <div className='flex w-1/5 mr-6'>
                     <img className='w-[28px] h-[28px] mr-4 mt-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmcVyV_1ANkrz2-grItqC5mmWqlCw19FDKw&usqp=CAU" alt='' />
                     <p className='font-bold text-lg'>{item.timeStart}<br/> | <br/> {item.timeStations[item.timeStations.length-1]}</p>
                  </div>
                  <div className='w-1/5 block mr-14'>
                      <p className='font-bold text-[17px] mb-0'>{item.nameVehicle}</p>
                      <p className='text-[12px] underline text-sky-500 flex cursor-pointer item_' key={index} onClick={()=> onClickInfor(item.idTrip)}>Thông tin chi tiết
                      { !(isClickInfor === item.idTrip) ? 
                       <>
                          <img className='w-[14px] ml-1' src="https://icon-library.com/images/arrow-down-icon-png/arrow-down-icon-png-3.jpg" alt='' />
                       </> 
                       : 
                       <>
                          <img className='w-[14px] ml-1 rotate-180' src="https://icon-library.com/images/arrow-down-icon-png/arrow-down-icon-png-3.jpg" alt='' />
                       </>}
                      </p>
                  </div>
                  <div className='w-1/5 mr-20'>
                     <p className='font-bold text-[17px] mb-0 '>Còn {item.numberSeat} chỗ trống</p>
                  </div>
                  <div className='w-1/5 block '>
                     <p className='font-bold text-[17px] mb-0 text-[#4457FF] pl-[22px]'>{item.price}đ
                       {!(isClickBook === item.idTrip) ? 
                       <>
                         <button className='bt-detail' onClick={()=> onClickBook(item.idTrip)} >Chọn tuyến</button>
                       </> 
                       : 
                       <>
                         <button className='bt-detail-close' onClick={()=> onClickBook(item.idTrip)} >Đóng</button>
                       </>}
                     </p>
                  </div>
               </div>
               <InforDetail isClickInfor={isClickInfor} item={item}/>
               <BookTickets isClickBook={isClickBook} item={item}/>
           </div>
            ))}
         </div>
      </Wrapper>
      </>
   )
}
export default BookingScreen
