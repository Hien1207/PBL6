import { FunctionComponent } from 'react'
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

interface CodeProps {
	isSignUp: any;
  setIsInfor:any;
}

const Code: FunctionComponent<CodeProps> = ({isSignUp, setIsInfor}) => {
	return (
    <Wrapper>
        <h1 className='font-bold text-[15px] text-center'>Nhập mã xác thực</h1>
        <div className='mt-[-25px]'>
          <h4 className='font-bold mb-0'>Nhập mã xác nhận vừa gửi đến sđt </h4>
          <input type="text" className='mt-[-15px]' placeholder="Nhập mã OTP"/>
        </div>
      <a>Gửi lại mã xác thực</a>
      <div className='mt-4'>
        {!isSignUp ? 
        <>
          <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol">
            Tiếp tục
        </button>
        </>
        :
        <>
          <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
            onClick={()=> setIsInfor(true)}
          >
            Tiếp tục
          </button>
        </>}
        
      </div>
    </Wrapper>
	 );
}

export default Code;

