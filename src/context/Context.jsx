import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [rightMenu, setRightMenu] = useState("3")
    const [fetchItems, setFetchItems] = useState(true)
    const [itemsCart, setItemsCart] = useState({});


    
    return (
        <MyContext.Provider value={{ items, setItems, item, setItem, rightMenu, setRightMenu, fetchItems, setFetchItems, itemsCart, setItemsCart  }}>
            {children}
        </MyContext.Provider>
    );
}

