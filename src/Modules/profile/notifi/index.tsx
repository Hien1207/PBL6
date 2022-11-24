
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
`

const Notification = () => {
  return (
    <Wrapper>
      <div className="block pt-2">
         <p className=''>Chưa có thông báo nào</p>
      </div>
    </Wrapper>
  )
}

export default Notification
