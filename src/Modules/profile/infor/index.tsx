import styled from 'styled-components'
import { getLocalStorage, STORAGE} from '@utils'
import { useState , useEffect} from "react";
import DatePicker from "react-datepicker";

const Wrapper = styled.div`
  width: 97%;
  margin:1rem 0;
  margin-left: -2rem;
  padding-bottom: 0.05rem;
  .title{
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgb(236, 244, 253);
    color: rgb(14, 99, 193);;
  }
  input{
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
  }
  .line{
      margin:1.2rem 0;
      border-bottom: 1px solid rgb(192, 192, 192);
    }
   .active_gender {
   position: relative;
   color: white;
   background: #1890ff;
   }
   .bt_save:hover{
     background: #4fa0ec;
   }
`

const Infor = () => {
   const [date, setDate] = useState<any>(new Date());
   const gender = [
      { id: '1', value: 'Nam', isActive: false},
      { id: '2', value: 'Nữ', isActive: true },
      { id: '3', value: 'Khác', isActive: false },
   ];

   const [list, setList] = useState(gender);
   const handleClick = (item: any) => {
     const newList = list.map((_item: any) => {
       if (_item.id === item.id) {
         return { ..._item, isActive: true };
       } else {
         return { ..._item, isActive: false };
       }
     });
     setList(newList);
   };

   const [dataInfor, setDataInfor] = useState({
      username: "",
      phonenumber: "",
      birthday:"",
      gender : "",
    });

    useEffect(() => {
      setDataInfor({
         username: "",
         phonenumber: JSON.parse(getLocalStorage(STORAGE.USER_DATA) || '{}').username,
         birthday:"",
         gender : "",
       })
    },[])

  return (
    <Wrapper>
      <div className='w-[100%] mb-2 block'>
         <div className='title w-[72%]'>Bổ sung đầy đủ thông tin sẽ giúp chúng tôi hỗ trợ bạn tốt hơn khi đặt vé</div>
         <div className='mt-4'>
           <p >Họ và tên*</p>
           <input type="text" className='mt-[-15px]' />
        </div>
        <div className='mt-4'>
           <p >Số điện thoại</p>
           <input type="text" className='mt-[-15px]' maxLength={11} value={dataInfor.phonenumber} disabled/>
        </div>
        <div className='mt-4'>
           <p >Ngày sinh</p>
           <DatePicker
               id="date"
               dateFormat='yyyy-MM-dd'
               selected={date} 
               value={date}
               onChange={(date:Date) => setDate(date)} 
               maxDate={date}
               className='w-full'
            />
        </div>
        <div className='line'></div>
        <div className='border-slate-300 border rounded-md'>
          <ul className='flex mb-0 '>
            {list.map((item: any, index: any) => {
              let classStyles2 = "";
              if (item?.isActive) classStyles2 = "active_gender";
              return (
                <li key={index} className={`dark:text-slate-700 p-2 flex w-1/3 border-slate-300 border-r ${classStyles2}`}>
                  <div
                    className="cursor-pointer mx-auto"
                    onClick={() => handleClick(item)}
                  >
                    {item.value}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <button className='mt-4 w-full text-center border-slate-300 border rounded-md bg-[#1890ff] p-2 text-white bt_save'>Lưu</button>
      </div>
    </Wrapper>
  )
}

export default Infor
