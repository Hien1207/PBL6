
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
`

const Comment = () => {
  return (
    <Wrapper>
      <div className="block pt-2">
         <p className=''>Chưa có nhận xét nào</p>
      </div>
    </Wrapper>
  )
}

export default Comment
