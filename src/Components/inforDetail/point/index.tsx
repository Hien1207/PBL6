
import styled from 'styled-components'

const Wrapper = styled.div`

`

const Point = () => {
  return (
    <Wrapper>
      <div className="">
        <p className='font-bold text-sky-500 py-2'>Lưu ý
          <br/><span className='font-normal text-black'>Các mốc thời gian đón, trả bên dưới là thời gian dự kiến.
          <br/>Lịch này có thể thay đổi tùy tình hình thực tế.</span>
        </p>
      </div>
    </Wrapper>
  )
}

export default Point
