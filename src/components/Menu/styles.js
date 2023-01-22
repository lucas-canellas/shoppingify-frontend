import { FormatListBulleted, Replay, InsertChartOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {ReactComponent as LogoIMG} from "./../../assets/logo.svg";


export const MenuWrapper = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;  
    width: 93px;
    height: 100vh;
    background-color: #FFF;
`;

export const MenuListWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Logo = styled(LogoIMG)`
    width: 40px;
    height: 40px;
    margin-top: 35px;
`;

export const MenuListIcon = styled(FormatListBulleted)``;

export const ReplayIcon = styled(Replay)``;

export const InsertChartIcon = styled(InsertChartOutlined)``;

export const WrapperShoppingCartIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: #F9A109;
    border-radius: 50%;
    margin-bottom: 35px;
`;

export const ShoppingCartIcon = styled(ShoppingCartOutlined)`
    color: #FFF;
`;