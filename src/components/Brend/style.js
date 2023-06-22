import styled from "styled-components";
import BackImg from "../../assets/imgs/AboutBack.png";
import { ReactComponent as DropDownIcon } from "../../assets/icons/DropDown.svg";
import { device } from "../../utils/responsive";

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

  @media ${device.maxWidth} {
    margin-bottom: 0;
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

  @media ${device.maxWidth} {
    height: 550px;
    padding: 29px 56px;
  }
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

  @media ${device.maxWidth} {
    width: 100%;
    height: 100%;
    padding: 19px 27px;
  }
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
  text-transform: capitalize;
  color: ${({ color }) => color || "#01aee7"};

  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 10px;
  }
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

  @media ${device.maxWidth} {
    width: 100%;
    gap: 18px;
    padding: 25px;
  }
`;

export const Line = styled.div`
  width: 190px;
  height: 1px;
  background: #01aee7;
  @media ${device.maxWidth} {
    display: none;
  }
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
  @media ${device.maxWidth} {
    font-size: ${({ color }) => (color === "black" ? "10px" : "20px")};
    line-height: normal;
    display: ${({ mobile }) => (mobile === "yes" ? "none" : "block")};
  }
`;
export const P = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  text-transform: capitalize;
  color: #000000;
  text-align: left;

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
  }
`;

export const Years = styled.div`
  display: flex;
  gap: 45px;
  padding: 35px 100px;

  @media ${device.maxWidth} {
    display: none;
  }
`;
export const ImgDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 125px;
  padding: 40px 0;

  .year-img {
    width: 610px;
  }

  .mobile {
    display: none;
    font-size: 15px;
  }

  @media ${device.maxWidth} {
    column-gap: 35px;
    row-gap: 7px;
    padding: 20px;
    flex-wrap: wrap;
    .year-img {
      width: 150px;
    }

    .mobile {
      display: block;
    }
  }
`;
export const TrueSports = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 520px;

  @media ${device.maxWidth} {
    width: 150px;
    gap: 0;
  }
`;
export const Innovations = styled.div`
  background: #01aee7;
  padding: 65px 100px;
  text-align: center;

  @media ${device.maxWidth} {
    display: none;
  }
`;

export const InnovationCarousel = styled.div`
  display: none;

  @media ${device.maxWidth} {
    display: block;
  }
`;

export const InnovationsTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 48px;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 40px;

  @media ${device.maxWidth} {
    color: #000;
    font-size: 15px;
    line-height: normal;
    margin-bottom: 20px;
    text-align: center;
  }
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
  @media ${device.maxWidth} {
    gap: 20px;
    justify-content: center;
    align-items: center;
  }
`;

export const CardText = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  text-align: left;
  color: #ffffff;
  height: 60px;
  @media ${device.maxWidth} {
    font-size: 15px;
    line-height: normal;
    color: black;
    margin-bottom: 20px;
    height: auto;
  }
`;

export const DropDown = styled.div`
  width: 100%;
  display: none;
  position: relative;

  @media ${device.maxWidth} {
    display: block;
  }
`;

DropDown.Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2px;
  position: relative;
  z-index: 100;
`;

DropDown.Line = styled.div`
  width: 100%;
  height: 1px;
  background: #000;
  box-shadow: 0px 2px 1px 0px #000;
`;

DropDown.Icon = styled(DropDownIcon)`
  cursor: pointer;
`;

DropDown.Menu = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  border-radius: 5px;
  background-color: #d9d9d9;

  position: absolute;
  top: 30px;

  transform: translateY(${({ active }) => (active ? "0" : "-10px")});
  transition: 0.3s all ease-out;
  opacity: ${({ active }) => (active ? "1" : "0")};
  .year-mobile {
    &.active {
      b {
        color: #01aee7;
        border-bottom: 2px solid #fff500;
      }
    }
  }
`;
