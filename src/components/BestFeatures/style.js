import styled from "styled-components";

export const Wrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  padding: 148px 26px 32px 26px;
  gap: 20px;
`;

export const Container = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ImgDiv = styled.div`
  width: 100%;
  height: 426px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 38px;
  padding: 30px;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.3s;


  @media (min-width: 1450px) {
    height: 100vh;
  }
`;
export const Div = styled.div`
  width: 100%;
  height: 213px;
  background: #01aee7;
  padding: 21px 46px 16px 53px;
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
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  text-transform: capitalize;

  color: #ffffff;
`;
