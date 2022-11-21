
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



export { getListLocation ,findTrips};
