import { useContext, useState } from "react";
import { Button } from "../Button";
import { MyContext } from "../../context/Context";
import { BackIcon, Image, Name, WrapperItemDetails } from "./styles";
import { api } from "../../api/api";
import { toast } from 'react-toastify';


export const ItemDetails = () => {
    const { item,  setRightMenu, setFetchItems, itemsCart, setItemsCart,  setFetchCarts,  setChangeQuantity, setFetchCartsHistory } = useContext(MyContext);
    const token = localStorage.getItem('token');



    const notify = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const deleteItem = async () => {
        try {
            await api.delete(`/items/${item.id}`, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                setFetchItems(true);
                setRightMenu("Cart");
            })

        } catch (error) {            
            notify(error.response.data.userMessage)
        }
    }   


    const addItemToCart = () => {
        const itemAlreadyInCart = itemsCart.find(itemCart => itemCart.itemId === item.id);
        
        if (itemAlreadyInCart) {
            const newCart = itemsCart.map(itemCart => {
                if (itemCart.itemId === item.id) {
                    return { ...itemCart, quantity: itemCart.quantity + 1 }
                }
                return itemCart;
            })
            setItemsCart(newCart);
            setFetchCarts(true);
            setChangeQuantity(true);
            setFetchCartsHistory(true);

            return;
        }

        setItemsCart([...itemsCart, { itemId: item.id, name: item.name, quantity: 1, category: {name: item.category.name} }]);
        setFetchCarts(true);
        setChangeQuantity(true);
        setFetchCartsHistory(true);
        setRightMenu("Cart");
    }

    

    return (
        <>
            <WrapperItemDetails>
                <div onClick={() => setRightMenu("Cart")} style={{ display: "flex", alignItems: "center", marginTop: "27px", cursor: "pointer" }}>
                    <BackIcon />
                    <span>back</span>
                </div>
                {item.image && <Image src={item.image} />}
                <h1>Nome</h1>
                <Name>{item.name}</Name>
                <h1>Categoria</h1>
                <p>{item.category?.name}</p>
                <h1>Descrição</h1>
                <p>{item.note}</p>
                <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "35px", display: "flex", justifyContent: "center" }}>
                    <Button onClick={deleteItem} transparent={true}>
                        Deletar
                    </Button>
                    <Button onClick={addItemToCart} color="#F9A109" transparent={false}>
                        Adicionar a lista
                    </Button>
                </div>

            </WrapperItemDetails>

        </>
    )
}