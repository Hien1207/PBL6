
import { FunctionComponent } from 'react'
import { useState } from "react";
import DatePicker from "react-datepicker";
import styled from 'styled-components'
const Wrapper = styled.div`

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
  input[type=text]:focus {
    outline: none !important;
  }
  input[type=password]:focus {
    outline: none !important;
  }
  button:hover{
    background-color: #3786a5;
  }
`

interface InforProps {
	isCick: any;
}

const Infor=() => {
  const [startDate, setStartDate] = useState<any>(null);
	return (
    <Wrapper className='p-4'>
        <div className='mt-[-25px]'>
        <h4 className='font-bold mb-0'>Họ và tên <span className='text-red-600'>*</span></h4>
        <input type="text" className='mt-[-15px]' placeholder=""/>
      </div>
      <div>
        <h4 className='font-bold mb-0'>Ngày sinh <span className='text-red-600'>*</span></h4>
        <DatePicker
          id="date"
          selected={startDate}
          onChange={(date : Date) => setStartDate(date)}
          maxDate={new Date()}
          className='w-full'
            />
      </div>
      <div>
        <h4 className='font-bold mb-0'>Giới tính<span className='text-red-600'>*</span></h4>
        <input type="text" className='mt-[-15px]' />
      </div>
      <div className='mt-4'>
          <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
          
          >
            Tiếp tục
          </button>
        </div>
    </Wrapper>
	 );
}

export default Infor;

