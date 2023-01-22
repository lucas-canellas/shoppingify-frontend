import { ButtonStyled } from "./styles";

export const Button = ({ children, ...props }) => {
    return (
        <ButtonStyled {...props}>{children}</ButtonStyled>
    );
};

