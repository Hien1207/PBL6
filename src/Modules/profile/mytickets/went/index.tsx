
import styled from 'styled-components'
import {ApiHistoryBooking, ApiRatingTrip} from '@apis'
import { useEffect,useState } from 'react'
//@ts-ignore
import ReactStarRating from "react-star-ratings-component";
import { formatCurrency } from "@utils";

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
  .comment{
    width: 120px;
    height: 30px;
    text-align: center;
    background: #035263;
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
  .input_comment{
    width: 98%;
    height: 80px;
    padding: 5px 10px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
      outline: none !important;
    }
  }
`

const Went = () => {

  const [listHistory, setListHistory] = useState<any>([]);
  const [rating, setRating] = useState(1)
  const [comment, setComment] = useState("");

  const handleRating = (idPayment : any,  nameAgency :any) => {
    ApiRatingTrip({
      comment : comment,
      idPayment : idPayment,
      nameAgency : nameAgency,
      rating : rating
    })
  }

   useEffect(() => {
      ApiHistoryBooking(setListHistory)
   },[setListHistory])
   
   const [dataSort, setDataSort] = useState<any>();
   useEffect(() =>{
      setDataSort(listHistory.reverse())
   },[listHistory])
   console.log(listHistory)

  return (
    <Wrapper>
      <div className="block">
        {listHistory.length ? 
        <>
        <div>
         {dataSort.map((item : any, index :any) => (
          <div>
            {new Date().valueOf() - Date.parse(item.historyBooking.dateStart) > 0 && item.historyBooking.status === "Success" ?
             <>
              <div className='block item'>
               <div className='flex '>
                <div className='w-[60%] ml-4'>
                  <h1 className='font-bold'>TH??NG TIN HA??NH TRI??NH</h1>
                  <div className='flex'>
                    <p className='w-[130px]'>Tuy????n ????????ng : </p>
                    <p className='font-bold '>{item.historyBooking.route}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Nga??y kh????i ha??nh : </p>
                    <p>{item.historyBooking.dateStart.slice(0,10)} </p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Xe : </p>
                    <p>{item.historyBooking.nameVehicle}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Ha??ng xe : </p>
                    <p>{item.historyBooking.nameAgency}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>Gi???? xu????t pha??t : </p>
                    <p>{item.historyBooking.timeStart || '07:00:00'}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>??i????m ??o??n : </p>
                    <p>B????n xe {item.historyBooking.payment.dep}</p>
                  </div>
                  <div className='flex mt-[-5px]'>
                    <p className='w-[130px]'>??i????m ??????n : </p>
                    <p>B????n xe {item.historyBooking.payment.des}</p>
                  </div>
                </div>
                <div className='w-[40%]'>
                  <h1 className='font-bold'>TH??NG TIN VE??</h1>
                    <div className='flex'>
                      <p className='w-[120px]'>S???? l??????ng ve?? : </p>
                      <p className='font-bold '>{item.historyBooking.numberTicket}</p>
                    </div>
                    {item.historyBooking.nameSeat ? 
                    <>
                      <div className='flex'>
                        <p className='w-[120px]'>Gh???? : </p>
                        <p className='font-bold '>{item.historyBooking.nameSeat.slice(0, item.historyBooking.nameSeat.length-1)}</p>
                      </div>
                    </> 
                    : <></>}
                    <div className='flex mt-[-5px]'>
                      <p className='w-[120px]'>T????ng ti????n : </p>
                      <p className='font-bold '>{formatCurrency(item.historyBooking.totalPrice)}VND</p>
                    </div>
                  </div>
                </div>
                {item.rated === true ?
                 <></> 
                 :
                 <>
                  <div className='line'></div>
                  <div className='block ml-4 mt-2 font-bold'>
                    <p className='mb-[-2px]'>Chuy????n ??i cu??a ba??n nh?? th???? na??o ?</p>
                    <ReactStarRating
                      numberOfStar={5}
                      numberOfSelectedStar={1}
                      colorFilledStar="#035263"
                      colorEmptyStar="black"
                      starSize="20px"
                      spaceBetweenStar="10px"
                      disableOnSelect={false}
                      onSelectStar={val => {
                        setRating(val);
                      }}
                    />
                    <textarea  className='input_comment mt-1' placeholder="Tra??i nghi????m cu??a ba??n"
                      onChange={(e : any) => {
                        setComment( e.target.value)
                      }}
                    />
                    <button className='comment mt-1 pl-[46px]'  onClick={() => handleRating(item.historyBooking.payment.id, item.historyBooking.nameAgency)}>G????i</button>
                  </div>
                 </>
                 }
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
           <p className=''>Ch??a co?? chuy????n na??o hu??y</p>
        </>
        }
      </div>
    </Wrapper>
  )
}

export default Went
