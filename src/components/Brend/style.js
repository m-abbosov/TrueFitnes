import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;
export const About = styled.div`
  width: 1440px;
  height: 978px;
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Card = styled.div`
  width: 1030px;
  height: 768px;
  padding: 71px 107px;
  border-radius: 3px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-transform: capitalize;
  color: ${({ color }) => color || "#01aee7"};
`;

export const AboutContainer = styled.div`
  width: 1440px;
  background: #d9d9d9;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const History = styled.div`
  width: 823px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 32px;
  text-align: center;
  text-transform: uppercase;
  max-width: 520px;
  color: ${({ color }) => color || "#01aee7"};
`;
export const P = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-transform: capitalize;
  color: #000000;
`;

export const Years = styled.div`
  display: flex;
  gap: 45px;
  padding: 35px 100px;

  b {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;

    &:first-child {
      color: #01aee7;
    }
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  padding: 40px 0;
`;
export const Img = styled.img`
  width: 610px;
  height: 400px;
  object-fit: cover;
`;
export const TrueSports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 520px;
`;
export const Innovations = styled.div`
  width: 1440px;
  height: 1180px;
  background: #01aee7;
  padding: 65px 100px;
  text-align: center;
`;

export const InnovationsTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 40px;
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  row-gap: 30px;
`;

export const InnovationsCard = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-bottom: 3px solid #ffd233;
`;
export const InnovationsImg = styled.img`
  width: 400px;
  height: 368px;
  object-fit: cover;
`;
export const CardText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
`;

