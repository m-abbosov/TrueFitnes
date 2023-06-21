import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;
`;
export const MapVsContact = styled.div`
  width: 100%;
  height: 662px;
  display: flex;
  margin-top: 20px;
`;
export const ContactDiv = styled.div`
  width: 50%;
  height: 662px;
  background: #d9d9d9;
  padding: 140px 115px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const Img = styled.img`
  object-fit: cover;
  width: 720px;
  height: 662px;
`;
export const H1 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  text-transform: uppercase;
  color: #01aee7;
`;
export const P = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${({ color }) => color || "#01AEE7"};
`;

export const Link = styled.a`
  text-transform: lowercase;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: ${({ color }) => color || "#01AEE7"};
  text-decoration: none;
`;
