import styled from "styled-components";
import { keyframes } from "styled-components";

/* const slideRightToLeft = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

    animation: ${slideRightToLeft} 0.5s ease-in-out; 
 */
export const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;   
    width: 390px;
    height: 100%;
    padding: 0 40px;


    h1 {
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: #000000;
        margin-top: 35px;
        margin-bottom: 35px;
    }
    
    label {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #34333A;
        margin-bottom: 5px;
    }
`;

export const Input = styled.input`
    width: 100%;
    background: #fafafe;
    border: 2px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 21px 17px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
        border: 2px solid #F9A109
    }
    
 

`;

export const TextArea = styled.textarea`
    width: 100%;
    background: #fafafe;
    border: 2px solid #BDBDBD;
    box-sizing: border-box;
    border-radius: 12px;
    padding: 21px 17px;
    margin-bottom: 20px;

    &:focus {
        outline: none;
        border: 2px solid #F9A109
    }
`;