import { useContext, useEffect, useMemo } from "react";
import { AddItem } from "../../components/AddItem"
import { Cart } from "../../components/Cart";
import { MyContext } from "../../context/Context";
import { ItemDetails } from "../../components/ItemDetails";
import { Menu } from "../../components/Menu"
import { WrapperAddItem, WrapperChildren, WrapperLayout } from "./styles"
import { useNavigate } from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";

export const Layout = ({children}) => {
    const {rightMenu} = useContext(MyContext);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();
    
    useEffect(()=>{
        if(!token){
            navigate ('/');
        }
        
        const decoded = jwt_decode(token);
        const currentTime = Date.now() / 1000;
        if (decoded.exp < currentTime) {
            localStorage.removeItem("token");
            navigate ('/');
        }

    }, [token, navigate])

    return (
        <WrapperLayout>
            <div><Menu/></div>
            <WrapperChildren>
                {children}
            </WrapperChildren>
            {rightMenu === "AddItem" && <WrapperAddItem><AddItem /></WrapperAddItem>}
            {rightMenu === "ItemDetails" && <WrapperAddItem><ItemDetails /></WrapperAddItem>}
            {rightMenu === "Cart" && <WrapperAddItem><Cart key={rightMenu}/></WrapperAddItem>}
            <ToastContainer />
        </WrapperLayout>
    )
} 