import styled from "styled-components";

export const WrapperLayout = styled.div`
    display: flex;  
    background: #fafafe;


`;

export const WrapperChildren = styled.div`
    box-sizing: border-box;
    padding-left: 80px;
    padding-top: 35px;
    padding-bottom: 35px;
    height: 100vh;
    overflow-y: scroll;
    width: 100%;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
`;

export const WrapperAddItem = styled.div`
    margin-left: auto;
`;