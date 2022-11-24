
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
`

const Current = () => {
  return (
    <Wrapper>
      <div className="block">
         <p className=''>Bạn chưa có chuyến sắp đi nào, <span className='text-[#2a41e8] cursor-pointer'>đặt vé ngay</span></p>
      </div>
    </Wrapper>
  )
}

export default Current
