import styled from 'styled-components'
import Seats from "./seat";
const Wrapper = styled.div`
  .left{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
  }
  .right{
    line-height: 1.5;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    -webkit-box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
    touch-action: manipulation;
    height: 32px;
    padding: 0 15px;
    font-size: 14px;
    border-radius: 4px;
    background-color: rgb(0, 96, 196);
    color : white;
  }
`

const Place = ( {list ,setList }:any) => {
  const handleClick = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '2') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
};
  return (
    <Wrapper>
      <div className="">
        <Seats />
       <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
       <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <p>Ghế G12</p>
             </div>
             <div className='w-1/2 flex ml-[15.5rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : <span className='text-[#2a41e8]'> ###,### đ</span></p>
                <button className='right' onClick={() => handleClick()} >Tiếp tục</button>
             </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default Place
