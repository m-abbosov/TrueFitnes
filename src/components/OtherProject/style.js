import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 15px 0;
`;

export const Img = styled.img``;

export const UserName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  text-transform: uppercase;
  color: #000000;
  text-align: center;
`;

export const WrapperCarousel = styled.div`
  width: 1440px;
  height: 675px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 120px;
  position: absolute;
  padding: 50px 150px;
  top: 0;
`;

export const WrapperIMG = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  width: 100%;
`;

export const IMG = styled.img`
  width: ${({ width }) => width || "216px"};
  object-fit: fill;
  /* object-fit: cover; */
`;
