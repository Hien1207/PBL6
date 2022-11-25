
import styled from 'styled-components'
import { FC, useEffect, useState } from 'react';

interface Prop{ 
  item :any
}
const Wrapper = styled.div`

`

const Point:FC<Prop> = ({item}) => {
  // const [routeStations, setrouteStations] = useState<any>();
  // useEffect (() => {
  //   setrouteStations(item.routeStations)
  // },[item.routeStations])

  const routeStations : any = [];
  Object.keys(item.routeStations).map(function(key){  
      routeStations.push({[key]:item.routeStations[key]})  
      return routeStations; 
  });   

  console.log(item.routeStations)
  console.log(routeStations[0].value)

  return (
    <Wrapper>
      <div className="">
        <p className='font-bold text-sky-500 py-2'>Lưu ý
          <br/><span className='font-normal text-black'>Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
          <br/>Lịch này có thể thay đổi tùy tình hình thực tế.</span>
        </p>
        {/* {routeStations?.map((value, index) => <div key={index}>{value}</div>)} */}
      </div>
    </Wrapper>
  )
}

export default Point
