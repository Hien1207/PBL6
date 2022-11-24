
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin:1rem 0;
  padding-bottom: 0.05rem;
`

const Cancel = () => {
  return (
    <Wrapper>
      <div className="block">
        <p className=''>Chưa có chuyến nào</p>
      </div>
    </Wrapper>
  )
}

export default Cancel
