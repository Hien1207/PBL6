import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: calc(100vh - 5.4rem - 39px);
  padding: 0 1rem;
  
  .intro-0-2-5 {
    width: 85%;
    margin: 0 auto;
    z-index: 200;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    .introImageWrapper-0-2-6 {
      z-index: 1;
      width: 50%;

      .introImage-0-2-7 {
        transform: translateX(10vw);
        background-position: center right;
        height: 100%;
        background-size: contain;
        background-image: url('https://facit-modern.omtanke.studio/static/media/richie.44ff154e0275feeae986.webp');
        background-repeat: no-repeat;
      }
    }
    .introContentWrapper-0-2-8 {
      z-index: 2;
      width: 50%;
      .display-1 {
        font-size: calc(1.5rem + 4.5vw);
        font-weight: 300;
        line-height: 1.2;
        img {
          width: 250px;
        }
      }
      .display-6 {
        font-size: calc(1.375rem + 1.5vw);
        font-weight: 300;
        line-height: 1.2;
      }
      .h2 {
        font-size: calc(1.325rem + .9vw);
        .text-info {
          color: #4e68f9;
        }
      }
    } 
  }
`
