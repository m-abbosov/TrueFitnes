import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  width: 100vw;
  .react-international-phone-input-container {
    height: ${({ height }) => height || "46px"};
    border: none;
    border-bottom: 1px solid black;
    background: transparent;
    * {
      font-size: 18px;
      line-height: 22px;
      background: transparent;
      border: none;
    }

    @media ${device.maxWidth} {
      width: 100%;

      height: auto;
      padding: 15px 0;

      * {
        font-size: 10px;
        line-height: normal;
      }
    }
  }

  .openclub-img {
    display: block;
    margin: 77px auto;
    width: 95%;

    @media ${device.maxWidth} {
      height: auto;
      padding: 20px 12px;
      width: 100%;
      margin: 0;
    }
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: ${({ height }) => height || "153px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background: #01aee7;
  align-items: center;

  @media ${device.maxWidth} {
    padding: 11px 0;
    height: auto;
    width: auto;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  background: #eee;
  padding: 65px 0;

  @media ${device.maxWidth} {
    background-color: #fff;
    padding: 30px 0;
  }
`;
export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => (size === "lg" ? "40px" : "40px")};
  line-height: 48px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  @media ${device.maxWidth} {
    font-size: ${({ size }) => (size === "lg" ? "15px" : "10px")};
    margin-bottom: ${({ size }) => (size === "lg" ? "15px" : "0")};
    line-height: normal;
    letter-spacing: 0.2px;
  }
`;

export const ClubText = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #fff500;
  text-align: center;
  margin-bottom: 20px;

  @media ${device.maxWidth} {
    font-size: 10px;
    margin-bottom: ${({ size }) => (size === "lg" ? "15px" : "0")};
  }
`;

export const P = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
    margin-top: 17px !important;
  }
`;

export const FormTitle = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => size || "18px"};
  line-height: 36px;
  text-transform: uppercase;
  color: #000000;

  @media ${device.maxWidth} {
    font-size: ${({ size }) => (size ? "15px" : "10px")};
    line-height: normal;
    text-align: ${({ size }) => (size ? "center" : "left")};
  }
`;
export const FormText = styled.label`
  font-style: normal;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #000000;
  cursor: pointer;
`;

export const Form = styled.form`
  width: 405px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media ${device.maxWidth} {
    width: 100%;
    padding: 0 32px;
    gap: 15px;
  }
`;
export const Input = styled.input`
  width: 395px;
  height: ${({ height }) => height || "46px"};
  display: flex;
  justify-content: center;
  border: none;
  border-bottom: 1px solid black;
  background: none;

  font-size: 18px;
  line-height: 22px;
  :focus {
    outline: none;
  }

  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
    line-height: normal;
    height: auto;
    padding: 15px 0;
  }
`;

export const Label = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;

  input {
    accent-color: black;
    cursor: pointer;

    @media ${device.maxWidth} {
      background: #d9d9d9;
    }
  }
`;

export const Button = styled.button`
  padding: 9px 30px;
  gap: 10px;
  width: 161px;
  background: #01aee7;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
  border: none;
  :active {
    opacity: 0.8;
    scale: 0.98;
  }

  @media ${device.maxWidth} {
    font-size: 10px;
    margin: auto;
  }
`;
