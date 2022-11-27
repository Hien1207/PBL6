
import axios from "axios";
import AxiosClient from './api'
import END_POINT from './constants'
//@ts-ignore
import { Linking } from "react-native";
const getListLocation = (setListLocation) => {
  axios({
    method: "GET",
    url: "https://book-ticket-doan.herokuapp.com/api/station"
  })
    .then((res) => {
      const listResponse = res.data;
      // console.warn(res)
      const listAll:any[] = [];
      listResponse.forEach((item :any, index :any) => {
        listAll.push({
          id : item.id,
          nameStation: item.nameStation,
        });
      });
      setListLocation(listAll);
    })
    .catch((err) => console.warn(err));
};

const findTrips = (Data, setData) => {
  axios({
    method: "POST",
    url: "https://book-ticket-doan.herokuapp.com/api/trip/find-trip",
    data: Data,
  })
    .then((res) => {
      let listResponse = res.data;
      setData(listResponse);
    })
    .catch((err) => console.warn(err));
};


function ApiBookingSeat(Data: any, setData) {
	return AxiosClient.post(END_POINT.BOOKSEAT, Data)
         .then((res) => {
          let listResponse = res.data;
          setData(listResponse);
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiBookingPartSeat(Data: any, setData) {
	return AxiosClient.post(END_POINT.BOOKPARTSEAT, Data)
         .then((res) => {
          let listResponse = res.data;
          setData(listResponse);
         })
        .catch((err) => {
          console.warn(err);
        });
}

function ApiPayment(Data: any,setLink) {
	return AxiosClient.post(END_POINT.PAYMENT, Data)
         .then((res) => {
          let listResponse = res.data;
          setLink(listResponse);
          console.log(res.data)
         })
        .catch((err) => {
          console.warn(err);
        });
}

export { getListLocation ,findTrips, ApiBookingSeat ,ApiBookingPartSeat ,ApiPayment};
