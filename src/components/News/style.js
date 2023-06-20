import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  height: 632px;
  background: #eeeeee;
  padding: 70px 100px;
  display: flex;
  flex-direction: column;
  gap: 0;
  align-items: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  gap: 10px;
`;
export const Img = styled.img`
  width: 400px;
  height: 272px;
  object-fit: cover;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`;
export const P = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: lowercase;
  color: #000000;
`;
export const Date = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`;
