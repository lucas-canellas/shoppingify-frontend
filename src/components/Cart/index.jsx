import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { api } from "../../api/api";
import { MyContext } from "../../context/Context";
import { Button } from "../Button";
import { AddIcon, BottleImage, ButtonStyled, CartImageStyled, DeleteIcon, EditIcon, EditQuantity, Input, ModalContent, ModalWrapper, Quantity, RemoveIcon, WrapperAddItemButtom, WrapperCart, WrapperDeleteItemCart, WrapperInput, WrapperInternal, WrapperItemCart, WrapperItemCartInternal, WrapperNoItems, WrapperSaveFixed, WrapperTitleCart } from "./styles";

export const Cart = () => {

    const { setRightMenu, itemsCart, setItemsCart, edit, cart, setCart, fetchCarts, setFetchCarts, changeQuantity, setChangeQuantity } = useContext(MyContext);
    const token = localStorage.getItem("token");  
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [completeOrCancel, setCompleteOrCancel] = useState(false);
    const [loading, setLoading] = useState(false);
    const [groupItemCart, setGroupItemCart] = useState({});    

    const goAddItem = () => {
        setRightMenu("AddItem");
    };
    
    const notify = (message) => toast.error(message, {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    useEffect(() => {
        if(fetchCarts) {
            api.get("/carts/active", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                setCart(response.data);
            })
        }
    }, [fetchCarts])

    const saveCart = (status) => {
        setLoading(true);
        const itemsInput = [];
        for(let i = 0; i < itemsCart.length; i++) {
            itemsInput.push({
                itemId: itemsCart[i].itemId,
                quantity: itemsCart[i].quantity
            })
        }

        const data = {
            status: status,
            items: itemsInput
        }

        api.put("/carts/save-cart", data, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setItemsCart([]);
            setCompleteOrCancel(false);
            setIsOpen(false);
            setLoading(false);
            navigate("/history");
        })
    }

    useEffect(() => {
        if(changeQuantity) {
            if (itemsCart.length > 0) {
                const groupedItems = itemsCart.reduce((acc, item) => {
                    
                    if (!acc[item.category.name]) {
                        acc[item.category.name] = { title: item.category.name, items: [] };
                    }
                    acc[item.category.name].items.push(item);
        
                    return acc;
                }, {});
        
                setGroupItemCart(groupedItems);
                setFetchCarts(false);        

            }
        }
    },[itemsCart, changeQuantity])

    const handleClick = (e) => {
        const box_edit = e.target.parentElement.children[2];
        box_edit.style.display == "flex" ? box_edit.style.display = "none" : box_edit.style.display = "flex";
    }   

    const updateNameCart = (event) => {
        setLoading(true);
        event.preventDefault();
        const form = event.target;
        const data = new FormData(form);
        api.put("/carts/update-name", {
            name: data.get("name")
        }, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
            setCompleteOrCancel(true);
        }).catch(error => {
            notify(error.response.data.userMessage)
        }).finally(() => {
            setLoading(false);
        })
    }

    const unconfirmedDeleteList = () => {        
        setCompleteOrCancel(false);
        setIsOpen(false);
    }

    const diminuirQuantidade = (item) => {
        const index = itemsCart.indexOf(item);
        const itemsCart2 = itemsCart;
        if(itemsCart2[index].quantity === 1) return notify("A quantidade mínima é 1");
        itemsCart2[index].quantity = itemsCart2[index].quantity - 1;
        setItemsCart(itemsCart2);
        setChangeQuantity(!changeQuantity);
    }

    const aumentarQuantidade = (item) => {
        const index = itemsCart.indexOf(item);
        const itemsCart2 = itemsCart;
        itemsCart2[index].quantity = itemsCart2[index].quantity + 1;
        setItemsCart(itemsCart2);
        setChangeQuantity(!changeQuantity);
    }

    const deleteItem = (item) => {
        const index = itemsCart.indexOf(item);
        const itemsCart2 = itemsCart;
        itemsCart2.splice(index, 1);
        setItemsCart(itemsCart2);  
        setChangeQuantity(!changeQuantity);
    }



    return (
        <>
            <WrapperCart>
                <WrapperAddItemButtom>
                    <div><BottleImage /></div>
                    <WrapperInternal>
                        <p>Não encontrou o que precisa?</p>
                        <ButtonStyled onClick={goAddItem}>Adicionar item</ButtonStyled>
                    </WrapperInternal>
                </WrapperAddItemButtom>

                {itemsCart.length == 0 ? (
                    <WrapperNoItems>
                        <p>Não há itens no carrinho</p>
                        <CartImageStyled />
                    </WrapperNoItems>
                ) : (
                    <>
                        <WrapperTitleCart>
                            <h1>{cart?.name}</h1>
                            <EditIcon />
                        </WrapperTitleCart>
                         {Object.keys(groupItemCart).map((key, index) => {
                            return (
                                <WrapperItemCart key={index}>
                                    <h2>{groupItemCart[key].title}</h2>
                                    {groupItemCart[key].items.map((item, index) => {
                                        return (
                                            <WrapperItemCartInternal key={index}>
                                                <p>{item.name}</p>
                                                <Quantity onClick={handleClick}>{item.quantity} pcs</Quantity>
                                                <EditQuantity visible={edit}>
                                                    <WrapperDeleteItemCart onClick={() => deleteItem(item)}><DeleteIcon /></WrapperDeleteItemCart>
                                                    <div style={{ display: "flex", gap: "78px" }}>
                                                        <RemoveIcon onClick={() => diminuirQuantidade(item)} />
                                                        <AddIcon onClick={() => aumentarQuantidade(item)} />
                                                    </div>
                                                </EditQuantity>
                                            </WrapperItemCartInternal>
                                        )
                                    })}

                                </WrapperItemCart>
                            )
                        })}
                    </>
                )}

                <WrapperSaveFixed>
                    {completeOrCancel ? (
                        <div style={{ textAlign: "center", marginTop: "auto", marginBottom: "35px", display: "flex", justifyContent: "center" }}>
                            <Button onClick={() => setIsOpen(true)} transparent={true}>
                                Cancelar
                            </Button>
                            <Button onClick={() => saveCart("COMPLETED")} color="#56CCF2" transparent={false}>
                                {loading ? "Finalizando..." : "Finalizar"}
                            </Button>
                        </div>
                    ) : (
                        <WrapperInput onSubmit={updateNameCart} border={itemsCart.length == 0 ? "2px solid #C1C1C4" : "2px solid #F9A109"}>
                            <Input type="text" name="name" placeholder="Digite um nome" disabled={itemsCart.length == 0 && true}/>
                            <div style={{ marginLeft: "auto" }}><Button disabled={itemsCart.length == 0 && true} small={true} color={itemsCart.length == 0 ? "#C1C1C4" : "#F9A109"}>{loading ? "Salvando" : "Salvar"}</Button></div>
                        </WrapperInput>
                    )}
                </WrapperSaveFixed>
            </WrapperCart>
            {isOpen && (
                <ModalWrapper>
                    <ModalContent>
                        <p>Tem certeza de que deseja cancelar esta lista?</p>
                        <div>
                            <Button transparent={true} onClick={() => unconfirmedDeleteList() }>Cancelar</Button>
                            <Button color="#EB5757" onClick={() => saveCart("CANCELED")}>Sim</Button>
                        </div>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    )
}

