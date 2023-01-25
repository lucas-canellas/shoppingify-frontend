import { useContext } from "react"
import { MyContext } from "../Context"
import { BottleImage, Button, WrapperAddItemButtom, WrapperCart, WrapperInternal } from "./styles"

export const Cart = () => {

    const {setRightMenu} = useContext(MyContext);

    const goAddItem = () => {
        setRightMenu("1");
    };

    return (
        <WrapperCart>
            <WrapperAddItemButtom>
                <div><BottleImage /></div>
                <WrapperInternal>
                    <p>Não encontrou o que precisa?</p>
                    <Button onClick={goAddItem}>Adicionar item</Button>
                </WrapperInternal>
            </WrapperAddItemButtom>
        </WrapperCart>
    )
}