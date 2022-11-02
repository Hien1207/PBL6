
import styled from 'styled-components'

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
  .item_co{
		border: 1px solid rgb(224, 224, 224);
		border-radius: 4px;
    width:100%;
	}
`

const Pay = ({list ,setList }:any) => {
  const handleClickDown = () => {
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
        <div className='w-full mt-6 ml-[-2rem] flex mb-8'>
            <div className='w-3/5'>
               <p className='text-base font-bold'>Phương thức thanh toán</p>
            </div>
            <div className='w-2/5'>
              <p className='text-base font-bold'>Thông tin chuyến đi</p>
              <div className="w-1/4  rounded-lg mr-2 py-2 item_co block p-4">
                <div>
                  <p className='mb-0'>Hành khách</p>
                  <p className='font-medium'>Nguyen Van A</p>
                </div>
                <div >
                  <p className='mb-0'>Số điện thoại</p>
                  <p className='font-medium'> +84 524 ### ###</p>
                </div>
                <div >
                  <p className='mb-0'>Gmail</p>
                  <p className='font-medium'> example@gmail.com</p>
                </div>
                <div className='border-b-2 mb-4'></div>
                <div >
                  <p className='mb-0'>Nhà xe</p>
                  <p className='font-medium'>Mạnh Quân</p>
                </div>
                <div >
                  <p className='mb-0'>Điểm đón (dự kiến)</p>
                  <p className='font-medium'>Bến xe trung tâm</p>
                </div>
                <div >
                  <p className='mb-0'>Điểm trả (dự kiến)</p>
                  <p className='font-medium'>Bến xe</p>
                </div>
              </div>
            </div>
        </div>
        <div className='border-b-2 w-[118%] ml-[-6rem]'></div>
          <div className='w-[118%] ml-[-6rem] mt-6 flex'>
             <div className='w-1/2'>
                <button className='left' onClick={() => handleClickDown()}>Quay lại</button>
             </div>
             <div className='w-1/2 flex ml-[14.3rem]'>
                <p className='pt-1 mr-6'>Tổng cộng : <span className='text-[#2a41e8]'> ###,### đ</span></p>
                <button className='right'>Thanh toán</button>
             </div>
          </div>
    </Wrapper>
  )
}

export default Pay
