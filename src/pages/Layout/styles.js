import styled from "styled-components";

export const WrapperLayout = styled.div`
    display: flex;  
    background: #fafafe;


`;

export const WrapperChildren = styled.div`
    position: relative;
    box-sizing: border-box;
    padding-left: 15px;
    padding-top: 35px;
    padding-bottom: 35px;
    height: 100vh;
    overflow-y: scroll;
    width: 100%;
    ::-webkit-scrollbar {
        width: 0px;
        background: transparent;
    }
    display: ${props => props.showChildren ? 'initial' : 'none'};

    @media (min-width: 768px) {
        padding-left: 80px;
    }

    
`;

export const WrapperAddItem = styled.div`
    margin-left: auto;
    position: absolute;
    margin-left: 60px;
    width: -webkit-fill-available;

    @media (min-width: 768px) {
        width: 389px;
        position: relative;
    }
`;