
import styled from 'styled-components'

const Wrapper = styled.div`
  .title{
    padding: 8px 12px;
    border-radius: 4px;
    background-color: rgb(236, 244, 253);
  }
  input{
    width: 70%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 5px;
    border: 1px solid rgb(217, 217, 217);
    &:focus{
      box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
  }
  .area{
    width: 70%;
    height: 60px;
    padding: 5px 10px;
    border: 1px solid rgb(217, 217, 217);
  }
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

const Infor = ({list ,setList }:any) => {
  const handleClickUp = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '3') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };
  const handleClickDown = () => {
    const newList = list.map((_item: any) => {
      if (_item.id === '1') {
        return { ..._item, isActive: true };
      } else {
        return { ..._item, isActive: false };
      }
    });
    setList(newList);
  };
  return (
    <Wrapper>
      <div className="my-[1rem] ml-[-2rem] block ">
        <div className='title w-[70%]'>Chúng tôi chỉ dùng thông tin của bạn trong việc ghi nhận vé.</div>
        <div className='mt-4'>
           <p className='font-bold'>Họ tên <span className='text-red-600'>*</span></p>
           <input  type="text" placeholder="Nguyen Van A"/>
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Số điện thoại <span className='text-red-600'>*</span></p>
           <input  type="text" placeholder="+84 865 ### ###"/>
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Email để nhận thông tin vé* <span className='text-red-600'>*</span></p>
           <input  type="text" placeholder="example@gmail.com"/>
        </div>
        <div className='mt-4'>
           <p className='font-bold'>Ghi chú hoặc yêu cầu khác (Nếu có)</p>
           <textarea  className='area' placeholder="Các yêu cầu đặc biệt không thể được đảm bảo - nhưng nhà xe sẽ cố gắng hết sức để đáp ứng nhu cầu của bạn." />
        </div>
        <p className='mt-2 mb-8'>Bằng việc nhấn nút Tiếp Tục, bạn đồng ý với 
          <br/> <span className='text-[#2a41e8]  '>Chính sách bảo mật thông tin và Quy chế </span></p>
          <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
          <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <button className='left' onClick={() => handleClickDown()}>Quay lại</button>
             </div>
             <div className='w-1/2 flex ml-[19.5rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : <span className='text-[#2a41e8]'> ###,### đ</span></p>
                <button className='right' onClick={() => handleClickUp()}>Tiếp tục</button>
             </div>
          </div>
      </div>
    </Wrapper>
  )
}

export default Infor
