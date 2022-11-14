import AxiosClient from './api'
import END_POINT from './constants'
import axios from "axios";
import { setLocalStorage, STORAGE } from '@utils'
//@ts-ignore
import AsyncStorage from "@react-native-async-storage/async-storage";
function login (Data) {
  axios({
    method: "post",
    url: "https://book-ticket-doan.herokuapp.com/api/auth/login",
    data: Data,
  })
    .then((res) => {
      return res.data;
    })
    .then(async (data) => {
      try {
        if (data.message) {
         alert("Your username or password are incorrect");
        } else {
          await AsyncStorage.setItem("currentUser", JSON.stringify(data));
          setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
          setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
          window.location.reload();
        }
      } catch (e) {
        console.warn(e);
      }
    })
    .catch((err) => {
      console.warn(err);
    });
};

function register (Data) {
  axios({
    method: "post",
    url: "https://book-ticket-doan.herokuapp.com/api/auth/signup",
    data: Data,
  })
    .then((res) => {
      return res.data;
    })
    .then(async (data) => {
      try {
        await AsyncStorage.setItem("currentUser", JSON.stringify(data));
        setLocalStorage(STORAGE.USER_DATA, JSON.stringify(data));
        setLocalStorage(STORAGE.USER_TOKEN, data.accessToken);
        window.location.reload();
      } catch (e) {
        console.warn(e);
      }
    })
    .catch((err) => {
      console.warn(err);
    });
};

function getProfile({ userId }: any) {
  return AxiosClient.get(`${END_POINT.PROFILE_USER}?userId=${userId}`)
    .then((res) => res)
}

export {
  login,
  register,
  getProfile
}
