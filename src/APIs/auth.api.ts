import AxiosClient from './api'
import END_POINT from './constants'
import axios from "axios";
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
        await AsyncStorage.setItem("accessToken", data.accessToken);
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
        await AsyncStorage.setItem("accessToken", data.accessToken);
        // console.warn(data.accessToken)
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
