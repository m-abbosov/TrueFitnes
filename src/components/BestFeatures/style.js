import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  height: 836px;
  background: #f5f5f5;
  display: flex;
  padding: 148px 26px 32px 26px;
  gap: 20px;
`;

export const Container = styled.div`
  width: 684px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ImgDiv = styled.div`
  width: 684px;
  height: 426px;
  padding-top: 179px;
  padding-left: 72px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-image: url(${({img})=>img});
`;
export const Div = styled.div`
  width: 684px;
  height: 213px;
  background: #01aee7;
  padding: 18px 75px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-transform: uppercase;
  color: #ffffff;
`;
export const Span = styled.div`
  width: 243px;
  height: 2px;
  background: #fff500;
`;
export const P = styled.p`
 font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
text-transform: capitalize;

color: #FFFFFF;
`;
