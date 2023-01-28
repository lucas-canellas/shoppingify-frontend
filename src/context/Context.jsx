import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [rightMenu, setRightMenu] = useState("Cart")
    const [fetchItems, setFetchItems] = useState(true)
    const [itemsCart, setItemsCart] = useState({});
    const [edit, setEdit] = useState(true);


    
    return (
        <MyContext.Provider value={{ items, setItems, item, setItem, rightMenu, setRightMenu, fetchItems, setFetchItems, itemsCart, setItemsCart, edit, setEdit  }}>
            {children}
        </MyContext.Provider>
    );
}

