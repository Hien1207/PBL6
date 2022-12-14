
import styled from 'styled-components'
import {useState,useEffect} from 'react'
import { ApiBookingSeat,ApiBookingPartSeat } from "@apis";
import { formatCurrency } from "@utils";
const Wrapper = styled.div`
  .title{
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgb(236, 244, 253);
  }
  input{
    width: 70%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
  }
  .area{
    width: 70%;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
      outline: none !important;
    }
  }
  .left{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  .right{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    background-color: rgb(0, 96, 196);
    color : white;
  }
`

const Infor = ({list ,setList, dataBookSeat,setDataBookSeat , item, ArrSeat , count, idSeat, setDataInforBook}:any) => {

  const handleClickUp = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '3') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };
  const handleClickDown = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '1') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };

  const arr : any = [];
  Object.keys(item.routeStations).map(function(key){  
      arr.push({[key]:item.routeStations[key]})  
      return arr;  
  });   
  const routeStation : any =[]
  routeStation[0] =1;
  routeStation[1] = arr.length 

  const [inValidData, setInValidData] = useState({
    errUsername: "",
    errPhonenumber: "",
    errEmail: "",
    errRequire: "",
  });

  useEffect(() => {
    dataBookSeat.phonenumber = dataBookSeat.phonenumber.replace(/\D/g, '');
    if (
      dataBookSeat.username &&
      dataBookSeat.phonenumber && 
      dataBookSeat.email
    ) {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
    }
  }, [
    dataBookSeat.username &&
    dataBookSeat.phonenumber && 
    dataBookSeat.email
  ]);

  const onSubmitBooking = () => {
    if (!dataBookSeat.username || !dataBookSeat.phonenumber || !dataBookSeat.email) {
      setInValidData({
        ...inValidData,
        errRequire: "Vui lo??ng ??i????n th??ng tin!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
      handleClickUp()
      if(item.status === true){
        ApiBookingSeat({
          email: dataBookSeat.email,
          nameAgency : item.nameAgency,
          name: dataBookSeat.username,
          nameVehicle : item.nameVehicle,
          note : dataBookSeat.note,
          phoneNumber : dataBookSeat.phonenumber,
          seatIds : idSeat,
          tripId : item.idTrip,
          },setDataInforBook)
        }else {
          ApiBookingPartSeat({
            email: dataBookSeat.email,
            nameAgency : item.nameAgency,
            name: dataBookSeat.username,
            nameVehicle : item.nameVehicle,
            note : dataBookSeat.note,
            phoneNumber : dataBookSeat.phonenumber,
            price : item.price *count ,
            quantity : count,
            routeStationBook: routeStation ,
            tripId : item.idTrip,
            },setDataInforBook)
        }
    }
  };

  const handleValidUsername = (val :any) => {
     if (!val) {
      setInValidData({
        ...inValidData,
        errUsername: "Vui lo??ng ??i????n t??n!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errUsername: "",
      });
    }
  };
  const handleValidPhonenumber = (val :any) => {
    if (val.length > 11) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "S???? ??i????n thoa??i kh??ng qua?? 11 s????!",
      });
    } else if (!val) {
      setInValidData({
        ...inValidData,
        errPhonenumber: "Vui lo??ng ??i????n s???? ??i????n thoa??i!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPhonenumber: "",
      });
    }
  };

  const handleValidEmail = (val: any) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lo??ng ??i????n email!",
      });
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val)) {
      setInValidData({
        ...inValidData,
        errEmail: "Vui lo??ng ??i????n email h????p l????!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errEmail: "",
      });
    }
  };

  return (
    <Wrapper>
      <div className="my-[1rem] ml-[-2rem] block ">
        <div className='title w-[70%]'>Ch??ng t??i ch??? d??ng th??ng tin c???a b???n trong vi???c ghi nh???n v??.</div>
        <div className='mt-4'>
           <p className='font-bold'>Ho?? t??n <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="Nguyen Van A" 
                value={dataBookSeat.username}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    username: e.target.value,
                  })
                  handleValidUsername(e.target.value);
              }}/>
              {inValidData.errUsername ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errUsername}</p>
                ) : (
                  ""
              )}
        </div>
        <div className='mt-4'>
           <p className='font-bold'>S???? ??i????n thoa??i <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="+84 865 ### ###" 
                value={dataBookSeat.phonenumber.replace(/\D/,'')}
                maxLength={11}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    phonenumber: e.target.value,
                  })
                  handleValidPhonenumber(e.target.value);
              }}/>
              {inValidData.errPhonenumber ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errPhonenumber}</p>
                ) : (
                  ""
              )}
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Email ????? nh???n th??ng tin v??* <span className='text-red-600'>*</span></p>
           <input type="text" className='mt-[-15px]' placeholder="example@gmail.com" 
                value={dataBookSeat.email}
                onChange={(e : any) => {
                  setDataBookSeat({
                    ...dataBookSeat,
                    email: e.target.value,
                  })
                  handleValidEmail(e.target.value);
              }}/>
              {inValidData.errEmail ? (
                  <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errEmail}</p>
                ) : (
                  ""
              )}
        </div>
        {inValidData.errRequire ? (
            <p className='text-red-600 mb-0 mb-[-15px] text-[10px] mt-2' > {inValidData.errRequire}</p>
          ) : (
            ""
          )}
        <div className='mt-4'>
           <p className='font-bold'>Ghi ch?? ho???c y??u c???u kh??c (N???u c??)</p>
           <textarea  className='area' placeholder="C??c y??u c???u ?????c bi???t kh??ng th??? ???????c ?????m b???o - nh??ng nh?? xe s??? c??? g???ng h???t s???c ????? ????p ???ng nhu c???u c???a b???n."
             value={dataBookSeat.note}
             onChange={(e : any) => {
              setDataBookSeat({
                ...dataBookSeat,
                note: e.target.value,
              })
          }}
           />
        </div>
        <p className='mt-2 mb-8'>B???ng vi???c nh???n n??t Ti???p T???c, b???n ?????ng ?? v???i 
          <br/> <span className='text-[#2a41e8]  '>Ch??nh s??ch b???o m???t th??ng tin v?? Quy ch??? </span></p>
          <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
          <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <button className='left' onClick={() => handleClickDown()}>Quay la??i</button>
             </div>
             <div className='w-1/2 flex ml-[19.5rem]'>
                <p className='pt-1 mr-6'>T????ng c????ng : 
                    <span className='text-[#2a41e8]'>
                      {item.status ? 
                      <> <p>{formatCurrency(item.price*ArrSeat.length)}VND</p></> 
                      : 
                      <> <p>{formatCurrency(item.price *count)}VND</p></>
                      }
                    </span>
                </p>
                <button className='right' 
                  onClick={() => {
                    // handleClickUp()
                    onSubmitBooking()
                  }}>Ti????p tu??c</button>
             </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default Infor
