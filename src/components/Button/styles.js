import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    ${(props) => css`
        width: max-content;
        background: ${props.transparent ? "transparent" : props.color}; 
        border-radius: 12px;
        padding: 20px 25px;
        color: ${props.transparent ? "#34333A": "#fff"};
        font-weight: 700;
        font-size: 16px;
        border: none;
        cursor: pointer;
    `}
`;