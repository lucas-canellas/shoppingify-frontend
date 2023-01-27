import { useContext, useEffect, useState } from "react"
import { api } from "../../api/api";
import { MyContext } from "../../context/Context"
import { BottleImage, Button, EditIcon, Quantity, WrapperAddItemButtom, WrapperCart, WrapperInternal, WrapperItemCart, WrapperItemCartInternal, WrapperTitleCart } from "./styles"

export const Cart = () => {

    const { setRightMenu, itemsCart, setItemsCart } = useContext(MyContext);
    const token = localStorage.getItem("token");
    const [cart, setCart] = useState({});
    const [groupItemCart, setGroupItemCart] = useState({});

    const goAddItem = () => {
        setRightMenu("1");
    };

    useEffect(() => {
        api.get("/carts/active", {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setItemsCart(response.data);
            console.log(response.data);
        })
    }, [])

    useEffect(() => {
        
        if(itemsCart.items?.length > 0) {
            const groupedItems = itemsCart.items.reduce((acc, item) => {
                const item2 = item.item;                
                if (!acc[item2.category.name]) {
                  acc[item2.category.name] = { title: item2.category.name, items: [] };
                }
                acc[item2.category.name].items.push(item); 
                
                return acc;
              }, {});

              setGroupItemCart(groupedItems);          
        }
    },[itemsCart])



    return (
        <WrapperCart>
            <WrapperAddItemButtom>
                <div><BottleImage /></div>
                <WrapperInternal>
                    <p>Não encontrou o que precisa?</p>
                    <Button onClick={goAddItem}>Adicionar item</Button>
                </WrapperInternal>
            </WrapperAddItemButtom>
            <WrapperTitleCart>
                <h1>{itemsCart.name}</h1>
                <EditIcon />
            </WrapperTitleCart>
            {Object.keys(groupItemCart).map((key) => {
                return (
                    <WrapperItemCart>
                        <h2>{groupItemCart[key].title}</h2>
                        {groupItemCart[key].items.map(item => {
                            return (
                                <WrapperItemCartInternal>
                                    <p>{item.item.name}</p>
                                    <Quantity>{item.quantity} pcs</Quantity>
                                </WrapperItemCartInternal>
                            )
                        })}
                    </WrapperItemCart>
                )
            })}
        </WrapperCart>
    )
}