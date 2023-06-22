import styled from "styled-components";
import { device } from '../../utils/responsive';

export const Wrapper = styled.div`
  width: 100%;
  margin: auto;
  padding: 71px 100px;
  

  @media ${device.maxWidth} {
    padding: 10px;
  }
`;

export const H1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  text-align: center;

  .color {
    color: #01aee7;
  }
  @media ${device.maxWidth} {
    font-size: 20px;
    line-height: normal;
    margin-top: 15px;
  }
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 65px;
  gap: 16px;

  @media ${device.maxWidth} {
    margin-top: 20px;
    gap: 10px;
  }
`;
export const Card = styled.div`
  width: 610px;
  height: 368px;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.maxWidth} {
    width: 100%;
    height: 223.213px;
    padding: 0 30px;
    gap: 20px;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
`;

export const CardBack = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: 0.5s ease all;
`;
export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 61px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 20px;
    width: 270px;
  }
`;

export const Span = styled.div`
  width: 429px;
  height: 3px;
  background: #ffff19;
  border-radius: 5px;

  @media ${device.maxWidth} {
    width: 260.213px;
    height: 1.82px;
  }
`;
