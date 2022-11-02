
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 97%;
  margin:1rem 0;
  margin-left: -2rem;
  padding-bottom: 0.05rem;
`

const Policy = () => {
  return (
    <Wrapper>
      <div className="block">
         <h1 className='font-bold text-lg'>Chính sách hủy vé</h1>
         <div className='flex'>
             <p>Hôm nay</p>
         </div>
      </div>
    </Wrapper>
  )
}

export default Policy
