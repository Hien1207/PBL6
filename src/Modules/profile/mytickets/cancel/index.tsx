
import styled from 'styled-components'
import {ApiHistoryBooking} from '@apis'
import { useEffect,useState } from 'react'

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
  .item{
    width: 100%;
    margin: 2% 0%;
    padding-bottom: 0.05rem;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
    border-radius: 4px;
  }
  .cancle{
    width: 120px;
    height: 30px;
    text-align: center;
    background: #af0303;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-family: 'K2D';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    color: #FFFFFF;
  }
`

const Cancel = () => {

  const [listHistory, setListHistory] = useState<any>([]);

   useEffect(() => {
      ApiHistoryBooking(setListHistory)
   },[setListHistory])
   
   const [dataSort, setDataSort] = useState<any>();
   useEffect(() =>{
      setDataSort(listHistory.reverse())
   },[listHistory])

  return (
    <Wrapper>
      <div className="block">
        {listHistory.length ? 
        <>
        <div>
         {dataSort.map((item : any, index :any) => (
          <div>
            {item.status === "Cancel" ?
             <>
               <div className='item flex '>
                <div className='w-[60%] ml-4'>
                  <h1 className='font-bold'>THÔNG TIN HÀNH TRÌNH</h1>
                  <div className='flex'>
                    <p className='w-[130px]'>Tuyến đường : </p>
                    <p className='font-bold '>{item.route}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Ngày khởi hành : </p>
                    <p>{item.dateStart.slice(0,10)} </p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Xe : </p>
                    <p>{item.nameVehicle}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Hãng xe : </p>
                    <p>{item.nameAgency}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Giờ xuất phát : </p>
                    <p>{item.timeStart || '07:00:00'}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đón : </p>
                    <p>Bến xe {item.payment.dep}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Điểm đến : </p>
                    <p>Bến xe {item.payment.des}</p>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <h1 className='font-bold'>THÔNG TIN VÉ</h1>
                    <div className='flex'>
                      <p className='w-[120px]'>Số lượng vé : </p>
                      <p className='font-bold '>{item.numberTicket}</p>
                    </div>
                    {item.nameSeat ? 
                    <>
                      <div className='flex'>
                        <p className='w-[120px]'>Ghế : </p>
                        <p className='font-bold '>{item.nameSeat.slice(0, item.nameSeat.length-1)}</p>
                      </div>
                    </> 
                    : <></>}
                    <div className='flex mt-[-5px]'>
                      <p className='w-[120px]'>Tổng tiền : </p>
                      <p className='font-bold '>{item.totalPrice} đ</p>
                    </div>
                </div>
              </div>
             </> 
             : 
             <></>}
            </div>
          ))}
         </div>
        </>
         :
        <>
           <p className=''>Chưa có chuyến nào hủy</p>
        </>
        }
      </div>
    </Wrapper>
  )
}

export default Cancel
