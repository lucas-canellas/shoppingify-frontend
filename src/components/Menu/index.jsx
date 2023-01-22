import { Link, NavLink } from "react-router-dom"
import {InsertChartIcon, Logo, MenuListIcon, MenuListWrapper, MenuWrapper, ReplayIcon, ShoppingCartIcon, WrapperShoppingCartIcon } from "./styles"


export const Menu = () => {
    return (
        <MenuWrapper>
            <Logo/>
            <MenuListWrapper>
                <Link to="/home">
                    <MenuListIcon/>
                </Link>
                <Link to="/history">
                    <ReplayIcon />
                </Link>                
                <InsertChartIcon />
            </MenuListWrapper>
            <WrapperShoppingCartIcon>
                <ShoppingCartIcon/>
            </WrapperShoppingCartIcon>
        </MenuWrapper>
    )
}