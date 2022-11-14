import { parseFilter } from '@utils'
import AxiosClient from './api'
import END_POINT from './constants'
import axios from "axios";

const getListLocation = (setListLocation) => {
  axios({
    method: "GET",
    url: "https://book-ticket-doan.herokuapp.com/api/station",
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

export { getListLocation };
