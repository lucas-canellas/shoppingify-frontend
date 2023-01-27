import { useContext, useState } from "react";
import { Button } from "../Button";
import { MyContext } from "../../context/Context";
import { BackIcon, Image, Name, WrapperItemDetails } from "./styles";
import { api } from "../../api/api";

export const ItemDetails = () => {
    const { item,setItems,  setRightMenu, setFetchItems} = useContext(MyContext);
    const token = localStorage.getItem('token');    

    const deleteItem = async () => {
        try {
            await api.delete(`/items/${item.id}`, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            }).then(response => {
                setFetchItems(true);
                setRightMenu("1");             
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    const addItemToCart = () => {
        api.post(`/carts/add/${item.id}`, null, {
            headers: {
                "Authorization": "Bearer " + token
            }
        }).then(response => {
            console.log(response);
        })
    }
    
    return (
        <WrapperItemDetails>
            <div onClick={() => setRightMenu("1")} style={{display: "flex", alignItems: "center", marginTop: "27px", cursor:"pointer"}}>
                <BackIcon/>
                <span>back</span>
            </div>
            {item.image && <Image src={item.image} />}
            <h1>Nome</h1>
            <Name>{item.name}</Name>
            <h1>Categoria</h1>
            <p>{item.category?.name}</p>
            <h1>Descrição</h1>
            <p>{item.note}</p>
            <div style={{textAlign: "center", marginTop: "auto", marginBottom: "35px"}}>
                <Button onClick={() => deleteItem()}  transparent={true}>
                    Deletar
                </Button>
                <Button  onClick={addItemToCart} color="#F9A109" transparent={false}>
                    Adicionar a lista
                </Button>
            </div>
        </WrapperItemDetails>
    )
}