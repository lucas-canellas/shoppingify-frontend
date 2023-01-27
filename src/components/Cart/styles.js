import styled from "styled-components";
import { Edit } from "@material-ui/icons";
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

export const EditIcon = styled(Edit)``;

export const WrapperTitleCart = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 0;

    h1 {
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: #34333A;
    }
`;

export const WrapperItemCart = styled.div`
    margin-bottom: 57px;
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 18px;
        color: #828282;
    }
`;

export const WrapperItemCartInternal = styled.div`
    display: flex;
    justify-content: space-between; 
    margin-bottom: 24px;  
    
    p {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
    }
`;

export const Quantity = styled.div`
    width: 68px;
    height: 32px;
    border: 2px solid #F9A109;
    border-radius: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #F9A109;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
`;

