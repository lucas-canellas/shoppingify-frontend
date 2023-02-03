import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [rightMenu, setRightMenu] = useState("Cart")
    const [fetchItems, setFetchItems] = useState(true)
    const [fetchCartsHistory, setFetchCartsHistory] = useState(true);
    const [itemsCart, setItemsCart] = useState([]);
    const [edit, setEdit] = useState(true);
    const [cart, setCart] = useState([]);
    
    const [groupItemCart, setGroupItemCart] = useState({});
    const [fetchCarts, setFetchCarts] = useState(false);
    const [changeQuantity, setChangeQuantity] = useState(false);



    
    return (
        <MyContext.Provider value={{ items, setItems, item, setItem, rightMenu, setRightMenu, fetchItems, setFetchItems, itemsCart, setItemsCart, edit, setEdit, cart, setCart, groupItemCart, setGroupItemCart, fetchCarts, setFetchCarts, changeQuantity, setChangeQuantity, fetchCartsHistory, setFetchCartsHistory  }}>
            {children}
        </MyContext.Provider>
    );
}

