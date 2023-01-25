import styled from "styled-components";
import {ReactComponent as Bottle} from "./../../assets/source.svg";

export const WrapperCart = styled.div`
    box-sizing: border-box;
    width: 389px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #FFF0DE;
    padding: 43px 44px 35px;
`;

export const WrapperAddItemButtom = styled.div`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 130px;
    background: #80485B;
    border-radius: 24px;
    padding: 19px;
`;

export const BottleImage = styled(Bottle)`
    position: relative;
    bottom: 35px;  
    left: -10px;
`;

export const WrapperInternal = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }

`;

export const Button = styled.button`
    width: 150px;
    box-sizing: border-box;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.04);
    border-radius: 12px;
    border: none;
    cursor: pointer;

    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 18px;
    color: #34333A;
    padding: 10px 20px;

`;