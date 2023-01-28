import { useContext, useEffect, useState } from "react"
import { api } from "../../api/api";
import { MyContext } from "../../context/Context"
import { Button } from "../Button";
import { AddIcon, BottleImage, ButtonStyled, CartImageStyled, DeleteIcon, EditIcon, EditQuantity, Input, ModalContent, ModalWrapper, Quantity, RemoveIcon, WrapperAddItemButtom, WrapperCart, WrapperDeleteItemCart, WrapperInput, WrapperInternal, WrapperItemCart, WrapperItemCartInternal, WrapperNoItems, WrapperSaveFixed, WrapperTitleCart } from "./styles"

export const Cart = () => {

    const { setRightMenu, itemsCart, setItemsCart, edit } = useContext(MyContext);
    const token = localStorage.getItem("token");   
    const [groupItemCart, setGroupItemCart] = useState({});
    const [fetchCarts, setFetchCarts] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [completeOrCancel, setCompleteOrCancel] = useState(false);

    console.log("edit: ", edit);

    const goAddItem = () => {
        setRightMenu("AddItem");
    };

    useEffect(() => {
        if (fetchCarts) {
            api.get("/carts/active", {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                setItemsCart(response.data);
                console.log(response.data);
                setFetchCarts(false);
            })
        }
    }, [itemsCart, fetchCarts])

    useEffect(() => {
        if (itemsCart.items?.length > 0) {
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
        console.log("PASSSSSOIIIIIU 2");
    }, [itemsCart])

    const handleClick = (e) => {
        const box_edit = e.target.parentElement.children[2];
        box_edit.style.display == "flex" ? box_edit.style.display = "none" : box_edit.style.display = "flex";
    }

    const addOneItem = (itemId) => {
        api.put(`/carts/item/${itemId}/add-quantity-1`, null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
        })
    }

    const removeOneItem = (itemId) => {
        api.put(`/carts/item/${itemId}/remove-quantity-1`, null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
        })
    }

    const removeItem = (itemId) => {
        api.post(`/carts/remove/${itemId}`, null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
        })
    }

    const completeCart = () => {
        api.put("/carts/complete", null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
            setCompleteOrCancel(false);
        })
    }

    const cancelCart = () => {
        api.put("/carts/cancel", null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            setFetchCarts(true);
            setIsOpen(false);
        })
    }

    const updateNameCart = (event) => {
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

        })
    }

    const unconfirmedDeleteList = () => {
        setIsOpen(false);
        setCompleteOrCancel(false);
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

                {itemsCart.items?.length == 0 ? (
                    <WrapperNoItems>
                        <p>Não há itens no carrinho</p>
                        <CartImageStyled />
                    </WrapperNoItems>
                ) : (
                    <>
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
                                                <Quantity onClick={handleClick}>{item.quantity} pcs</Quantity>
                                                <EditQuantity visible={edit}>
                                                    <WrapperDeleteItemCart onClick={() => removeItem(item.item.id)}><DeleteIcon /></WrapperDeleteItemCart>
                                                    <div style={{ display: "flex", gap: "78px" }}>
                                                        <RemoveIcon onClick={() => removeOneItem(item.item.id)} />
                                                        <AddIcon onClick={() => addOneItem(item.item.id)} />
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
                            <Button onClick={() => completeCart()} color="#56CCF2" transparent={false}>
                                Completar
                            </Button>
                        </div>
                    ) : (
                        <WrapperInput onSubmit={updateNameCart} border={itemsCart.items?.length == 0 ? "2px solid #C1C1C4" : "2px solid #F9A109"}>
                            <Input type="text" name="name" placeholder="Digite um nome" disabled={itemsCart.items?.length == 0 && true}/>
                            <div style={{ marginLeft: "auto" }}><Button disabled={itemsCart.items?.length == 0 && true} small={true} color={itemsCart.items?.length == 0 ? "#C1C1C4" : "#F9A109"}>Salvar</Button></div>
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
                            <Button color="#EB5757" onClick={() => cancelCart()}>Sim</Button>
                        </div>
                    </ModalContent>
                </ModalWrapper>
            )}
        </>
    )
}

