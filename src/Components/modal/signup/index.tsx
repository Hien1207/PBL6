
import { FunctionComponent ,useState, useEffect} from 'react'
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import styled from 'styled-components'
import { register } from "@apis";
import DatePicker from "react-datepicker";
import { firebase, auth } from './firebase';
import { getLocalStorage, STORAGE } from '@utils'

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
  step:any;
  setStep:any;
}

const SignUp: FunctionComponent<SignUpProps> = ({step, setStep}) => {
  const [value, setValue] = React.useState('sdt');
  const [startDate, setStartDate] = useState<any>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  const [isPhone, setIsPhone] = React.useState(true);
  const [isErrCode, setIsErrCode] = React.useState(false);
  const token =  getLocalStorage(STORAGE.USER_TOKEN)?.length ;
  const [isLoggedIn, setisLoggedIN] = useState(false) 
  useEffect(() => {
     if (token){
         setisLoggedIN(true)
     }
  },[token])
  const [dataRegister, setDataRegister] = useState({
    phoneNumber: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [inValidData, setInValidData] = useState({
    errPhoneNumber: "",
    errEmail: "",
    errPassword: "",
    errRe_password: "",
    errRequire: "",
  });

  const [inValidInfor, setInValidInfor] = useState({
    errName: "",
    errBirthday: "",
    errGender: "",
    errRequire: "",
  });
  
  useEffect(() => {
    if (
      dataRegister.phoneNumber &&
      dataRegister.password &&
      dataRegister.re_password
    ) {
      setInValidData({
        ...inValidData,
        errRequire: "",
      });
    }
  }, [
    dataRegister.password,
    dataRegister.phoneNumber,
    dataRegister.re_password,
  ]);

  const onSubmitRegister = () => {
    if (isPhone) {
      if (
        !dataRegister.password ||
        !dataRegister.phoneNumber ||
        !dataRegister.re_password
      ) {
        setInValidData({
          ...inValidData,
          errRequire: "Ba??n ch??a ??i????n th??ng tin!!",
        });
      }
      else {
        setInValidData({
          ...inValidData,
          errRequire: "",
        });
        if (
          !inValidData.errPhoneNumber &&
          !inValidData.errPassword &&
          !inValidData.errRe_password
        ) {
          sendCode();
        }
      }
    }
    // email
    else {
      if (
        !inValidData.errEmail &&
        !inValidData.errPassword &&
        !inValidData.errRe_password
      ) {
      }
    }
  };

  const handleValidPhoneNumber = (val :any) => {
    if (val.length > 11) {
      setInValidData({
        ...inValidData,
        errPhoneNumber: "S???? ??i????n thoa??i kh??ng qua?? 11 s????!",
      });
    } else if (!val) {
      setInValidData({
        ...inValidData,
        errPhoneNumber: "Vui lo??ng ??i????n s???? ??i????n thoa??i!",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPhoneNumber: "",
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
  const handleValidPassword = (val :any) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errPassword: "Vui lo??ng ??i????n m????t kh????u",
      });
    } else if (val.length < 8) {
      setInValidData({
        ...inValidData,
        errPassword: "M????t kh????u pha??i l????n h??n ho????c b????ng 8 ki?? t????",
      });
    } else {
      setInValidData({
        ...inValidData,
        errPassword: "",
      });
    }
  };
  const handleValidRePassword = (val :any) => {
    if (!val) {
      setInValidData({
        ...inValidData,
        errRe_password: "Vui lo??ng ??i????n la??i m????t kh????u!",
      });
    } else if (val !== dataRegister.password) {
      setInValidData({
        ...inValidData,
        errRe_password: "Vui lo??ng ??i????n tru??ng v????i m????t kh????u phi??a tr??n !",
      });
    } else {
      setInValidData({
        ...inValidData,
        errRe_password: "",
      });
    }
  };

  const handleValidName = (val :any) => {
    if (!val) {
      setInValidInfor({
        ...inValidInfor,
        errName: "Vui lo??ng ??i????n t??n !",
      });
    }  else {
      setInValidInfor({
        ...inValidInfor,
        errName: "",
      });
    }
  };
  const handleValidBirthday = (val :any) => {
    if (!val) {
      setInValidInfor({
        ...inValidInfor,
        errBirthday: "Vui lo??ng ??i????n nga??y sinh !",
      });
    }  else {
      setInValidInfor({
        ...inValidInfor,
        errBirthday: "",
      });
    }
  };
  const handleValidGender = (val :any) => {
    if (!val) {
      setInValidInfor({
        ...inValidInfor,
        errGender: "Vui lo??ng ??i????n gi????i ti??nh !",
      });
    }  else {
      setInValidInfor({
        ...inValidInfor,
        errGender: "",
      });
    }
  };

  const [mynumber, setnumber] = useState("");
  const [otp, setOtp] = useState('');
  const [verificationId, setVerificationId] = useState<any>(null);

  const sendCode = () => {
    register({
      username: dataRegister.phoneNumber,
      password: dataRegister.password,
      role :"1",
    })
    if(isLoggedIn){
      if (mynumber === "") return;

      var handlePhone = "";
      if (mynumber.length === 10) {
        handlePhone = mynumber.slice(1, mynumber.length);
      } else {
        handlePhone = mynumber;
      }

      let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible'
            });
      auth.signInWithPhoneNumber("+84" + handlePhone, verify).then((result) => {
        setVerificationId(result.verificationId)
        setStep('VERIFY_OTP');
        })
          .catch((err) => {
            alert(err);
      });
    }
	}
  const ValidateOtp = () => {
		if (otp === null) return;
    const credential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      otp
    );
    auth.signInWithCredential(credential)
      .then(() => {
          // setStep('VERIFY_SUCCESS');
          // setIsCode(true)
          window.location.replace("./")
		   })
      .catch((err) => {
        setIsErrCode(true)
       })
	}

	return (
    <Wrapper>
           
    {step === 'INPUT_PHONE_NUMBER' &&
      <div>
           <h1 className='font-bold text-[15px] text-center'>????ng ky??</h1>
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
                    <FormControlLabel value="sdt" control={<Radio />} label="S???? ??i????n thoa??i"  onClick={() => setIsPhone(true)}/>
                    <FormControlLabel value="email" control={<Radio />} label="Email" onClick={() => setIsPhone(false)} />
                    </div>
                  </RadioGroup>
                </FormControl>
            </div>   
          {isPhone ? 
              <>
                <div className='mt-[-5px]'>
                <h4 className='font-bold mb-0'>S???? ??i????n thoa??i<span className='text-red-600'>*</span></h4>
                <input type="text" className='mt-[-15px]' placeholder="" 
                    maxLength={11}
                    value={mynumber}
                    onChange={(e : any) => {
                      setDataRegister({
                        ...dataRegister,
                        phoneNumber: e.target.value,
                      })
                      setnumber(e.target.value)
                      handleValidPhoneNumber(e.target.value);
                  }}/>
                  {inValidData.errPhoneNumber ? (
                      <p className='text-red-600 mb-[-15px] text-[10px]' > {inValidData.errPhoneNumber}</p>
                    ) : (
                      ""
                  )}
              </div>
              </>
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
                      })
                      handleValidEmail(e.target.value);
                      }}/>
                  {inValidData.errEmail ? (
                      <p className='text-red-600 mb-[-15px] text-[10px]'> {inValidData.errEmail}</p>
                    ) : (
                      ""
                    )}
              </div>
              </>
            }
            <div>
              <h4 className='font-bold mb-0'>M????t kh????u <span className='text-red-600'>*</span></h4>
              <input type="password" className='mt-[-15px]' 
                  value={dataRegister.password}
                  onChange={(e : any) => {
                    setDataRegister({
                      ...dataRegister,
                      password:  e.target.value,
                  })
                  handleValidPassword(e.target.value);
                }}/>
                {inValidData.errPassword ? (
                      <p className='text-red-600 mb-[-15px] text-[10px]'> {inValidData.errPassword}</p>
                  ) : (
                      ""
                )}
            </div>
            <div>
              <h4 className='font-bold mb-0'>Nh????p la??i m????t kh????u<span className='text-red-600'>*</span></h4>
              <input type="password" className='mt-[-15px]' 
                value={dataRegister.re_password}
                  onChange={(e : any) => {
                    setDataRegister({
                      ...dataRegister,
                      re_password: e.target.value,
                   })
                   handleValidRePassword(e.target.value);
                }}/>
                {inValidData.errRe_password ? (
                    <p className='text-red-600 mb-[-15px] text-[10px]'> {inValidData.errRe_password}</p>
                    ) : (
                      ""
                )}
               {inValidData.errRequire ? (
                  <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' > {inValidData.errRequire}</p>
                ) : (
                  ""
                )}
            </div>
            <div id="recaptcha-container"></div>
            <div className='mt-4'>
              <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
                onClick={()=> 
                  {
                  // onSubmitRegister()
                   onSubmitRegister()
                  }}
              >
                  Ti????p tu??c
              </button>
            </div>
        </div>
        }
      {step === 'VERIFY_OTP' &&
          <div className='mt-4'>
             <h1 className='font-bold text-[15px] text-center'>Nh????p ma?? xa??c th????c</h1>
             <div className='mt-[-25px]'>
              <h4 className='font-bold mb-0'>Nh????p ma?? xa??c nh????n v????a g????i ??????n s??t </h4>
              <input type="text" className='mt-[-15px]' placeholder="Nh????p ma?? OTP"  onChange={(e) => { setOtp(e.target.value) }}/>
              {isErrCode && (
                <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' >Ma?? code ch??a chi??nh xa??c !</p>      
              )}
            </div>
            <a  onClick={()=> sendCode()}>G????i la??i ma?? xa??c th????c</a>
            <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
                onClick={()=> ValidateOtp() }>
                Ti????p tu??c
              </button>
          </div>
        }
        {step === 'VERIFY_SUCCESS' &&
        <div>
            <div className='mt-[-5px]'>
            <h4 className='font-bold mb-0'>Ho?? va?? t??n <span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]' placeholder="" 
               onChange={(e : any) => {
                   handleValidName(e.target.value);
                }}/>
            {inValidInfor.errName ? (
              <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' > {inValidInfor.errName}</p>
            ) : (
              ""
            )}
          </div>
          <div>
            <h4 className='font-bold mb-0'>Nga??y sinh <span className='text-red-600'>*</span></h4>
            <DatePicker
              id="date"
              selected={startDate}
              onChange={(date : Date) => {setStartDate(date) ; handleValidBirthday(date)}}
              maxDate={new Date()}
              className='w-full'
                />
              {inValidInfor.errBirthday ? (
                <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' > {inValidInfor.errBirthday}</p>
              ) : (
                ""
              )}
          </div>
          <div>
            <h4 className='font-bold mb-0'>Gi????i ti??nh<span className='text-red-600'>*</span></h4>
            <input type="text" className='mt-[-15px]'  
                  onChange={(e : any) => {
                   handleValidGender(e.target.value);
                }}/>
            {inValidInfor.errGender ? (
                  <p className='text-red-600 mb-0 mb-[-15px] text-[10px]' > {inValidInfor.errGender}</p>
                ) : (
                  ""
                )}
          </div>
          <div className='mt-4'>
              <button className=" bg-sky-700 w-full flex font-semibold h-10 items-center justify-center rounded-md text-white text-sm  fol"
              
              >
                Ti????p tu??c
              </button>
            </div>
          </div>
        }
    </Wrapper>
	 );
}

export default SignUp;

