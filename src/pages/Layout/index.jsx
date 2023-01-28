import { useContext } from "react";
import { AddItem } from "../../components/AddItem"
import { Cart } from "../../components/Cart";
import { MyContext } from "../../context/Context";
import { ItemDetails } from "../../components/ItemDetails";
import { Menu } from "../../components/Menu"
import { WrapperAddItem, WrapperChildren, WrapperLayout } from "./styles"

export const Layout = ({children}) => {
    const {rightMenu} = useContext(MyContext);
    return (
        <WrapperLayout>
            <div><Menu/></div>
            <WrapperChildren>
                {children}
            </WrapperChildren>
            {rightMenu === "AddItem" && <WrapperAddItem><AddItem /></WrapperAddItem>}
            {rightMenu === "ItemDetails" && <WrapperAddItem><ItemDetails /></WrapperAddItem>}
            {rightMenu === "Cart" && <WrapperAddItem> <Cart /> </WrapperAddItem>}
        </WrapperLayout>
    )
}