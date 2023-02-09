import { createContext, useState } from "react";

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [item, setItem] = useState({})
    const [rightMenu, setRightMenu] = useState("Cart")
    const [fetchItems, setFetchItems] = useState(true)
    const [fetchCartsHistory, setFetchCartsHistory] = useState(true);
    const [itemsCart, setItemsCart] = useState([]);
    const [cart, setCart] = useState([]);
    const [fetchCarts, setFetchCarts] = useState(false);
    const [changeQuantity, setChangeQuantity] = useState(false);
    const [showChildren, setShowChildren] = useState(true);

    return (
        <MyContext.Provider value={{ items, setItems, item, setItem, rightMenu, setRightMenu, fetchItems, setFetchItems, itemsCart, setItemsCart, cart, setCart, fetchCarts, setFetchCarts, changeQuantity, setChangeQuantity, fetchCartsHistory, setFetchCartsHistory,showChildren, setShowChildren }}>
            {children}
        </MyContext.Provider>
    );
}

