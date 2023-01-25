import { KeyboardBackspace } from "@material-ui/icons";
import styled from "styled-components";
import { keyframes } from "styled-components";

/* const slideRightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }

      animation: ${slideRightToLeft} 0.5s ease-in-out;
`; */

export const WrapperItemDetails = styled.div`
    box-sizing: border-box;
    width: 389px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FFFFFF;
    padding: 0 44px;


    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #C1C1C4; 
        margin-bottom: 11.5px;
        margin-top: 21px;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }

    span {
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 18px;
        color: #F9A109;
    }
`;

export const Name = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #000000;
`;

export const Image = styled.img`
    width: 100%;
    height: 220px;
    object-fit: cover;
    border-radius: 25px; 
    margin-top: 21px;

`;

export const BackIcon = styled(KeyboardBackspace)`
    color: #F9A109;
`;

