import { AddItemIcon, Wrapper } from "./styles"

export const CardItem = ({ name }) => {
    return (
        <Wrapper>
            {name}
            <AddItemIcon />
        </Wrapper>
    )
}