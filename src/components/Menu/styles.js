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
    gap: 20px;
`;
export const Logo = styled(LogoIMG)`
    width: 40px;
    height: 40px;
    margin-top: 35px;
`;

export const WrapperIconMenu = styled.div`
    width: 93px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

export const TagMenu = styled.div`
    width: 6px;
    height: 45.98px;
    background: #FFFFFF;
    border-radius: 0px 4px 4px 0px;
    margin-right: auto;
    ${(props) => props.active && `
        background: #F9A109;
    `}
`;

export const MenuListIcon = styled(FormatListBulleted)`
    position: relative;
    right: 35px;
    color: #454545;
`;

export const ReplayIcon = styled(Replay)`
    position: relative;
    right: 35px;
    color: #454545;
`;

export const InsertChartIcon = styled(InsertChartOutlined)`
    position: relative;
    right: 35px;
    color: #454545;
`;

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