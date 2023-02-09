import { useContext } from "react";
import { Link, NavLink } from "react-router-dom"
import {InsertChartIcon, Logo, MenuListIcon, MenuListWrapper, MenuWrapper, ReplayIcon, ShoppingCartIcon, TagMenu, WrapperIconMenu, WrapperShoppingCartIcon } from "./styles"
import { MyContext } from '../../context/Context';

export const Menu = () => {

    const {rightMenu, showChildren, setRightMenu} = useContext(MyContext);

    const currentPath = window.location.pathname;

    return (
        <MenuWrapper>
            <Logo/>
            <MenuListWrapper>
                <Link to="/home">
                    <WrapperIconMenu>
                        <TagMenu active={currentPath === "/home" && true}/>
                        <MenuListIcon/>
                    </WrapperIconMenu>
                </Link>
                <Link to="/history">
                    <WrapperIconMenu>
                        <TagMenu active={currentPath.match("/history") && true}/>
                        <ReplayIcon />
                    </WrapperIconMenu>
                </Link>  
                <Link to="/statistic">
                    <WrapperIconMenu>
                        <TagMenu active={currentPath === "/statistic" && true} />
                        <InsertChartIcon />
                    </WrapperIconMenu>
                </Link>
            </MenuListWrapper>
            <WrapperShoppingCartIcon onClick={() => setRightMenu("Cart")}>
                <ShoppingCartIcon/>
            </WrapperShoppingCartIcon>
        </MenuWrapper>
    )
}