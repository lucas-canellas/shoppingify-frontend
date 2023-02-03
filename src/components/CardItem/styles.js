
import { Add } from "@mui/icons-material";
import styled from "styled-components";

export const Wrapper = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 17px;
    color: #000000;
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    cursor: pointer;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

export const AddItemIcon = styled(Add)`
    transition: transform 0.2s ease-in-out;

    &:active {
        transform: translateY(2px);
    }
`;
