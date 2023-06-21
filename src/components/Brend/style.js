import styled from "styled-components";
import BackImg from "../../assets/imgs/AboutBack.png";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;

  .year {
    display: flex;
    flex-direction: column;
    gap: 7px;
    transition: 0.3s all ease;
    cursor: pointer;

    span {
      border-radius: 3px;
      width: 44px;
      height: 3px;
    }

    &.active {
      span {
        background: #fff500;
      }
      b {
        color: #01aee7;
      }
    }
  }
`;

export const About = styled.div`
  width: 100%;
  height: 978px;
  background-image: url(${BackImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const History = styled.div`
  width: 823px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
`;

export const Line = styled.div`
  width: 190px;
  height: 1px;
  background: #01aee7;
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
  text-align: left;
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
export const TrueSports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 520px;
`;
export const Innovations = styled.div`
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
  display: grid;
  grid-template-columns: repeat(3, 400px);
  align-items: center;
  justify-content: center;
  gap: 20px;
  row-gap: 50px;
`;

export const InnovationsCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  border-bottom: 3px solid #ffd233;
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
