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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  background-image: url(${({ url }) => url});
  cursor: pointer;
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
