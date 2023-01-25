import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [rightMenu, setRightMenu] = useState("3")
    
    return (
        <MyContext.Provider value={{ items, setItems, item, setItem, rightMenu, setRightMenu }}>
            {children}
        </MyContext.Provider>
    );
}

