
import { FunctionComponent } from 'react'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
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

interface SignInProps {
	setIsCode: any;
}

const SignIn: FunctionComponent<SignInProps> = ({setIsCode})  => {
  const [value, setValue] = React.useState('sdt');
  const [isType, setIsType] = React.useState(true);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
	return (
    <Wrapper>
        <h1 className='font-bold text-[15px] text-center'>Đăng nhập</h1>
        <div className=' mt-[-20px] '>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChange}
                className='block'
              >
                <div className='flex'>
                <FormControlLabel value="sdt" control={<Radio />} label="Số điện thoại"  onClick={() => setIsType(true)}/>
                <FormControlLabel value="email" control={<Radio />} label="Email" onClick={() => setIsType(false)} />
                </div>
              </RadioGroup>
            </FormControl>
        </div>
        {isType ? 
          <>
           <div className='mt-[-5px]'>
            <h4 className='font-bold mb-0'>Số điện thoại<span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]' placeholder=""/>
          </div></>
          :
          <>
           <div className='mt-[-5px]'>
            <h4 className='font-bold mb-0'>Email<span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]' placeholder=""/>
          </div></>
          }
      <div>
        <h4 className='font-bold mb-0'>Mật khẩu <span className='text-red-600'>*</span></h4>
        <input type="text" className='mt-[-15px]' />
      </div>
      <div>
        <h4 className='font-bold mb-0'>Nhập lại mật khẩu<span className='text-red-600'>*</span></h4>
        <input type="password" className='mt-[-15px]' />
      </div>
      <div className='mt-4'>
        <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
          onClick={()=> setIsCode(true)}
        >
            Tiếp tục
        </button>
      </div>
    </Wrapper>
	 );
}

export default SignIn;

