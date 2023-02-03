import styled, { css, keyframes } from "styled-components";
import { EventNoteRounded, KeyboardArrowRight } from "@material-ui/icons";


export const WrapperHistory = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding-right: 80px;
    h2 {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        text-transform: capitalize;
        margin-bottom: 18px;
    }
`;

export const HistoryTitle = styled.h1`
    font-style: normal;font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    color: #34333A; 
    margin-bottom: 41px;
`

export const WrapperCardHistory = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
`;

export const CardHistory = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    width: 100%;
    height: 63px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`;


export const ListName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
`;

export const IconHistory = styled(EventNoteRounded)`
    margin-left: auto;
    color: #C1C1C4;
`;

export const DateHistory = styled.p`
    font-family: 'Quicksand';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #C1C1C4;
    margin-left: 13px;
    text-transform: capitalize;
`;

export const StatusHistory = styled.div`
    ${({status}) => css`
        border: ${status == 'COMPLETED' ? '1px solid #56CCF2' : '1px solid #EB5757'};
        color: ${status == 'COMPLETED' ? '#56CCF2' : '#EB5757'};
    `}
    width: 76px;
    height: 24px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;    
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    
    margin-left: 25px;
`;

export const IconArrow = styled(KeyboardArrowRight)`
    color: #F9A109;
    width: 15px;
    margin-left: 32.7px;
`;

const SkeletonWrapper = styled.div`
  width: 100%;
  height: 63px;
  border-radius: 12px;
  padding: 0 20px;
  background-color: #E5E5E5;
  animation: pulse 1s ease-in-out infinite;
`;

const Pulse = keyframes`
  0% {
    opacity: 0.4;
  }
  50% {
    opacity: 0.7;
  }
  100% {
    opacity: 0.4;
  }
`;

export const AnimatedSkeletonWrapper = styled(SkeletonWrapper)`
  animation: ${Pulse} 1s ease-in-out infinite;
`;