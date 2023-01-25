import { useContext } from "react";
import { AddItem } from "../../components/AddItem"
import { Cart } from "../../components/Cart";
import { MyContext } from "../../components/Context";
import { ItemDetails } from "../../components/ItemDetails";
import { Menu } from "../../components/Menu"
import { WrapperAddItem, WrapperLayout } from "./styles"

export const Layout = ({children}) => {
    const {rightMenu, setRightMenu} = useContext(MyContext);
    return (
        <WrapperLayout>
            <div><Menu/></div>
            <div style={{paddingLeft: "80px", paddingTop: "35px"}}>{children}</div>
            {rightMenu === "1" && <WrapperAddItem><AddItem /></WrapperAddItem>}
            {rightMenu === "2" && <WrapperAddItem> <ItemDetails /> </WrapperAddItem>}
            {rightMenu === "3" && <WrapperAddItem> <Cart /> </WrapperAddItem>}

        </WrapperLayout>
    )
}