import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  margin: auto;
  height: 1423px;
  padding: 71px 100px;
`;

export const H1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 65px;
  gap: 16px;
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
`;

export const Span = styled.div`
  width: 429px;
  height: 3px;
  background: #ffff19;
  border-radius: 5px;
`;
