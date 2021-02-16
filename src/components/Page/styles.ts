import styled from "styled-components";

import Img1 from './img/1.jpg';
import Img2 from './img/2.jpg';
import Img3 from './img/3.jpg';
import Img4 from './img/4.jpg';
import Img5 from './img/5.jpg';
import Img6 from './img/6.jpg';
import Img7 from './img/7.jpg';

export const Container = styled.div`
  .colored:nth-child(1) {
    background: url(${Img1});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vh 100%;
    
    @media(min-width: 600px){
      background-size: cover;
    }
  }
  .colored:nth-child(2) {
    background: url(${Img2});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(3) {
    background: url(${Img3});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vh 100%;

    @media(min-width: 600px){
      background-size: cover;
    }
  }
  .colored:nth-child(4) {
    background: url(${Img4});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(5) {
    background: url(${Img5});
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100vh 100%;

    @media(min-width: 600px){
      background-size: cover;
    }
  }
  .colored:nth-child(6) {
    background: url(${Img6});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .colored:nth-child(7) {
    background: url(${Img7});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60%;
  }
`;

export const Spacer = styled.div`
  height: 5vh;
  background: url(${Img7});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-y: 90%;
`;
