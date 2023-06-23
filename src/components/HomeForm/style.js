import styled from "styled-components";
import img from "../../assets/imgs/homeForm.png";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  background-image: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  padding: 126px 100px;
  margin: auto;
  .react-international-phone-input-container {
    width: 450px;
    height: 46px;
    background: #f0f0f0;
    border: none;
    padding-left: 27px;

    * {
      border: none;
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 26px;
      text-transform: uppercase;
      background: transparent;
    }
    ::placeholder {
      color: black;
    }
    :focus {
      outline: none;
    }
    @media ${device.maxWidth} {
      width: 100%;
      height: 35px;

      * {
        font-size: 10px;
      }
    }
  }

  @media ${device.maxWidth} {
    padding: 10px 30px;
    background: #fff;
  }
`;

export const Card = styled.form`
  width: 505px;
  height: 552px;
  background: white;
  padding: 35px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin: auto;

  @media ${device.maxWidth} {
    width: 100%;
    padding: 0;
    gap: 15px;
    height: auto;
  }
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #000000;
`;
export const Input = styled.input`
  width: 450px;
  background: #f0f0f0;
  border: none;
  padding: 10px 27px;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #afa3a3;
  }

  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
    line-height: normal;
  }
`;
export const Button = styled.button`
  width: 450px;
  background: #01aee7;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  text-transform: uppercase;
  color: #ffffff;
  border: none;
  padding: 12px 0;
  :active {
    opacity: 0.8;
    scale: 0.98;
  }
  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
    line-height: normal;
    padding: 9px 0;
  }
`;
export const P = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 19px;
  text-transform: capitalize;
  color: #000000;
`;
