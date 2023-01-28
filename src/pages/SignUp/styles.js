import styled, { keyframes } from "styled-components";
import { ReactComponent as CartImage } from "./../../assets/undraw_shopping_app_flsj.svg";

const blink = keyframes`
    0% {
        background-color: #FFF0DE;
    }
    
    50% {
        background-color: #FFF0DE70;
    }
    
    100% {
        background-color: #FFF0DE;
    }
`;

export const WrapperPage = styled.div`
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    height: 100vh;



`;

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1;

    h1 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 20px;

        span {
            color: #80485B;
        }
        
    }

    h2 {
        font-size: 14px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #CECECE;
    }
`;

export const WrapperBanner = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    border-radius: 24px;
    animation: ${blink} 5s ease-in-out infinite;
    padding: 20px;

`;

export const CartImageStyled = styled(CartImage)`
    width: 100%;
    height: 100%;    
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 320px;

    label {
        display: flex;
        flex-direction: column;
    }

    input {
        border-top: none;
        border-left: none;
        border-right: none;
        border-bottom: 1px solid #CECECE;
        outline: none;
        padding: 10px;
        margin-bottom: 20px;
        font-family: 'Quicksand', sans-serif;
    }
`;

export const ButtonLogin = styled.button`
    background: #80485B;
    border: none;
    border-radius: 24px;
    padding: 10px;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;    
`;

export const ButtonLoginImage = styled.button`
    width: 100px;
    margin-left: auto;
    background: #80485B;
    border: none;
    border-radius: 24px;
    padding: 8px;
    color: #FFF;
    font-weight: bold;
    font-size: 14px;
    margin-top: 20px;
    cursor: pointer;  
    margin-bottom: 20px;  
`;