import styled, { css } from "styled-components";
import { Edit, Remove, Add, DeleteOutline } from "@mui/icons-material";
import {ReactComponent as Bottle} from "./../../assets/source.svg";
import { ReactComponent as CartImage } from "./../../assets/undraw_shopping_app_flsj.svg";

export const WrapperCart = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 389px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background: #FFF0DE;
    padding: 15px;
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }

    @media (min-width: 768px) {
        width: 389px;
        padding: 43px 44px 78px 44px;
    }
    

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

export const ButtonStyled = styled.button`
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
        margin-bottom: 25px;
    }
`;

export const WrapperItemCartInternal = styled.div`
    display: flex;
    justify-content: space-between; 
    align-items: center;
    gap: 10px;
    position: relative;
    height: 48px;
    
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
    margin: 0 5px;
    cursor: pointer;
    position: absolute;
    right: 21px;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 2px solid #F9A109;
        font-weight: 800;
        transform: scale(1.05);
    }
`;

export const EditQuantity = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    width: 173px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 12px;

    div:nth-child(2) {
        display: flex;
        align-items: center;
    }
`;

export const WrapperDeleteItemCart = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 37px;
    border-radius: 12px;
    background: #F9A109;
    cursor: pointer;
`;

export const EditIcon = styled(Edit)`

`;
export const RemoveIcon = styled(Remove)`
    cursor: pointer;
    color: #F9A109;
    transition: transform 0.2s ease-in-out;

    &:active {
        transform: translateY(2px);
    }
`;
export const AddIcon = styled(Add)`
    cursor: pointer;
    color: #F9A109;
    transition: transform 0.2s ease-in-out;

    &:active {
        transform: translateY(2px);
    }
`;

export const DeleteIcon = styled(DeleteOutline)`
    cursor: pointer;
    color: #FFFFFF;
    transition: transform 0.2s ease-in-out;

    &:active {
        transform: translateY(2px);
    }
`;

export const WrapperSaveFixed = styled.div`
    box-sizing: border-box;
    margin-top: auto; 
    background: #FFF; 
    position: fixed;
    bottom: 0;
    right: 0;
    width: 389px;
    /* height: 131px; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    margin-left: 60px;
    padding: 18px;

    @media (min-width: 768px) {
        width: 389px;
        margin-left: 0;
        padding: 0px;
        height: 131px;
    }
`;

export const WrapperInput = styled.form`
    ${(props) => css`
        display: flex;
        border: ${props.border}};
        border-radius: 16px;
        width: 310px;
        height: 61px
        padding: 5px;
    `}

`;

export const Input = styled.input`
    width: 100%;
    margin: 7px;
    border: none;
    outline: none;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #BDBDBD;
    font-family: 'Quicksand';
    background: #FFFFFF;
`;

export const WrapperNoItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-bottom: 83px;

    p {
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 25px;
        color: #34333A;
        margin-top: 77px;
    }

    @media (min-width: 768px) {
        padding-bottom: 52px;
    }
`;

export const CartImageStyled = styled(CartImage)`
    margin-top: auto;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
    max-width: 500px;
    box-sizing: border-box;
    background-color: white;
    padding: 30px;
    border-radius: 24px;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #34333A;
    
    p {
        margin-bottom: 35px;
    }

    div {
        display: flex;
        width: 100%;
        justify-content: flex-end;
    }
`;







