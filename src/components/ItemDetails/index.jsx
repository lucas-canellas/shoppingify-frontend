import { useContext } from "react";
import { Button } from "../Button";
import { MyContext } from "../Context";
import { BackIcon, Image, Name, WrapperItemDetails } from "./styles";

export const ItemDetails = () => {
    const { item, rightMenu, setRightMenu } = useContext(MyContext);
    
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
                <Button transparent={true}>
                    Deletar
                </Button>
                <Button type="submit" color="#F9A109" transparent={false}>
                    Adicionar a lista
                </Button>
            </div>
        </WrapperItemDetails>
    )
}