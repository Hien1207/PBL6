import styled from 'styled-components'

export const Wrapper = styled.div`
   height: auto;
  .image{
    height: auto;
    width: 100%;
  }
  .container{
    margin: auto;
    margin-top: -8rem;
    padding-bottom: 0.5rem;
    margin-bottom: 2rem;
    position: sticky;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    .route{
      width: 94%;
      margin: 1% 3%;
      padding-bottom: 0.05rem;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 2px 4px;
		  border-radius: 4px;
      .main{
        padding: 1.5rem 3rem;
        .bt-detail{
          width: 120px;
          height: 30px;
          padding: 17px;
          margin-left: -15px;
          background: #035263;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          font-family: 'K2D';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 23px;
          display: flex;
          align-items: center;
          color: #FFFFFF;
        }
      }
    }
  }
  .item{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  input[type=text]:focus {
    outline: none !important;
  }
  .bg_red{
    background-color: #B52E30;
  }
`
