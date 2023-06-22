import styled from "styled-components";
import img from "../../assets/imgs/formbg.png";
import { device } from "../../utils/responsive";
import ArrowIcon from "../../assets/icons/fe_arrow-up.svg";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 65px;
  margin-bottom: 20px;

  @media ${device.maxWidth} {
    gap: 27px;

    .carousel-control-prev {
      background-color: red;
      position: absolute;
      left: -40px !important;
      top: 120px;
      height: 30px;
      width: 30px;
      border-radius: 31.25px;
      background: #01aee7;
      opacity: 1;
      .carousel-control-prev-icon {
        background-image: url(${ArrowIcon});
        transform: rotate(180deg);
        opacity: 1;
      }
    }
    .carousel-control-next {
      background-color: red;
      opacity: 1;
      position: absolute;
      right: -40px !important;
      top: 120px;
      height: 30px;
      width: 30px;
      border-radius: 31.25px;
      background: #01aee7;
      .carousel-control-next-icon {
        background-image: url(${ArrowIcon});
        opacity: 1;
      }
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 64px 100px;
  justify-content: space-between;
  align-items: flex-start;
  width: 1440px;
  background: #ffffff;
  gap: 20px;

  @media ${device.maxWidth} {
    display: none;
  }
`;

Cards.Carousel = styled.div`
  display: none;

  @media ${device.maxWidth} {
    display: block;
    padding: 30px 47px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 295px;
  height: 450px;
  position: relative;

  @media ${device.maxWidth} {
    height: 370px;
    margin: 0 !important;
    width: 100%;
    align-items: center;
  }
`;
export const Img = styled.img`
  width: 295px;
  height: 256px;
  object-fit: cover;
`;
export const H1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  text-align: center;
  text-transform: uppercase;
  color: #01aee7;
  height: 81px;
  margin-bottom: 14px;
  @media ${device.maxWidth} {
    margin-bottom: 3px;
    height: auto;
    font-size: 15px;
    line-height: normal;
    margin-top: 10px;
    width: 100%;
  }
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 200;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  text-transform: capitalize;
  color: #000000;

  @media ${device.maxWidth} {
    font-size: 10px;
    text-align: center;
    line-height: normal;
    margin-bottom: 17px;
    width: 100%;
  }
`;

export const Titlee = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  text-transform: uppercase;
  width: 1240px;
  color: #000000;

  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
    line-height: normal;
  }
`;
export const ImgDiv = styled.div`
  width: 1440px;
  height: 717px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 93px 100px;
  text-align: center;
  align-items: center;
  background-image: url(${img});
`;

export const H6 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 18px 15px;
  gap: 10px;
  width: 295px;
  height: 60px;
  background: #d9d9d9;
  border: none;
  :focus {
    outline: none;
  }
  ::placeholder {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 29px;
    text-transform: uppercase;
    color: #000000;
  }
`;
export const ButtonForm = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 18px 122px;
  gap: 10px;
  width: 295px;
  height: 60px;
  background: #01aee7;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
`;

export const Box = styled.div`
  position: relative;
  border-top: 1px solid #01aee7;
  border-bottom: 1px solid #01aee7;

  display: flex;
  align-items: center;
  padding: 48px;

  .top-btn {
    position: absolute;
    left: 50%;
    top: -20px;
    transform: translateX(-50%);
  }

  @media ${device.maxWidth} {
    width: 100%;
    padding: 35px;
  }
`;
