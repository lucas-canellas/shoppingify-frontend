import styled from "styled-components";

export const Title = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 30px;
    color: #000000;
    margin-bottom: 38px;

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const WrapperPercentBar = styled.div`
    width: 100%;
    height: 6px;
    background: #E0E0E0;
    border-radius: 4px;
    margin-bottom: 30px;
`;

export const InternalPercentBar = styled.div`
    width: ${props => props.percent}%;
    height: 6px;
    background: ${props => props.color};
    border-radius: 4px;
`;

export const WrapperPercentText = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 14px;    

    p {
        font-style: normal;
        font-weight: 500;
        line-height: 18px;
        color: #000000;
    }

    p:first-child {
        font-size: 14px;
    }

    p:last-child {
        font-size: 18px;
    }
`;

