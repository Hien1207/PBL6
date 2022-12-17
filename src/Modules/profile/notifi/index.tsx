
import styled from 'styled-components'
import {getListNotification} from '@apis'
import { useEffect, useState } from 'react'
const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
  .item{
    width: 100%;
    margin: 2% 0%;
    padding-bottom: 0.05rem;
    padding: 10px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
    border-radius: 4px;
  }
`

const Notification = () => {
  const [listNotifi, setListNotifi] = useState([])

  useEffect(() =>{
   getListNotification(setListNotifi)
  },[])


  return (
    <Wrapper>
      <div className="block pt-2">
      {listNotifi.length ? 
        <>
          <div>
           {listNotifi.map((item : any) => (
              <div className='item block '>
                 <h1 className='font-bold'>{item.title}</h1>
                 <p>{item.content}</p>
              </div>
           ))}
           </div>
        </> 
        : 
        <>
          <p className=''>Chưa có thông báo nào</p>
        </>}
      </div>
    </Wrapper>
  )
}

export default Notification
