
import { FunctionComponent ,useState, useRef} from 'react'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components'
import { register } from "@apis";

import firebaseConfig  from "@FireBase";
import firebase from "firebase";
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

interface SignUpProps {
	setIsCode: any;
}

const SignUp: FunctionComponent<SignUpProps> = ({setIsCode}) => {
  const [value, setValue] = React.useState('sdt');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const [isType, setIsType] = React.useState(true);
  const [dataRegister, setDataRegister] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    re_password: "",
  });
  
  const attemptInvisibleVerification = false;
  const onSubmitRegister  = async () => {
    try {
      const output = await register({
        username: dataRegister.phoneNumber,
        password: dataRegister.password,
      })
      } catch (output) {
      console.log(output);
    }
  };
  const refRBSheet = useRef<any>();
  const [verificationId, setVerificationId] = useState<any>(null);
  const recaptchaVerifier = useRef<any>(null);

  const sendVerification = (phoneNumber) => {
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    var handlePhone = "";
    if (phoneNumber.length === 10) {
      handlePhone = phoneNumber.slice(1, phoneNumber.length);
    } else {
      handlePhone = phoneNumber;
    }
    console.log(handlePhone);
    phoneProvider
      .verifyPhoneNumber("+84" + handlePhone, recaptchaVerifier.current)
      .then(setVerificationId)
      .catch((err) => {
        console.warn(err);
        refRBSheet.current.close();
      });
  };

	return (
    <Wrapper>
        <h1 className='font-bold text-[15px] text-center'>Đăng ký</h1>
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
            <input type="text" className='mt-[-15px]' placeholder="" 
                maxLength={11}
                value={dataRegister.phoneNumber}
                onChange={(e : any) => {
                  setDataRegister({
                    ...dataRegister,
                    phoneNumber: e.target.value,
                  })}}/>
          </div></>
          :
          <>
           <div className='mt-[-5px]'>
            <h4 className='font-bold mb-0'>Email<span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]' placeholder="" 
               value={dataRegister.email}
                onChange={(e : any) => {
                  setDataRegister({
                    ...dataRegister,
                    email:  e.target.value,
                  })}}/>
          </div></>
          }
       
      <div>
        <h4 className='font-bold mb-0'>Mật khẩu <span className='text-red-600'>*</span></h4>
        <input type="password" className='mt-[-15px]' 
            value={dataRegister.password}
            onChange={(e : any) => {
              setDataRegister({
                ...dataRegister,
                password:  e.target.value,
              })}}/>
      </div>
      <div>
        <h4 className='font-bold mb-0'>Nhập lại mật khẩu<span className='text-red-600'>*</span></h4>
        <input type="password" className='mt-[-15px]' 
           value={dataRegister.re_password}
            onChange={(e : any) => {
              setDataRegister({
                ...dataRegister,
                re_password: e.target.value,
              })}}/>
      </div>
      <div className='mt-4'>
        <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
          onClick={()=> 
            {setIsCode(true)
            onSubmitRegister()
            sendVerification(dataRegister.phoneNumber)}}
        >
            Tiếp tục
        </button>
      </div>
      {/* <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier}
          firebaseConfig={firebaseConfig}
          androidHardwareAccelerationDisabled={true}
          androidLayerType="software"
          attemptInvisibleVerification={attemptInvisibleVerification}
        /> */}
    </Wrapper>
	 );
}

export default SignUp;

