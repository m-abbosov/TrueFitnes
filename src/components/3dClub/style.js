import styled from "styled-components";
import { device } from '../../utils/responsive';

export const Wrapper = styled.div`
  width: 100%;
  padding: 38px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 43px;

  .react-international-phone-input-container {
    width: 100%;
    height: 47px;
    border: none;

    border-bottom: 1px solid black;

    * {
      border: none;
      font-weight: 700;
      font-size: 20px;

      @media ${device.maxWidth} {
        font-size: 10px;
      }
    }
    ::placeholder {
      color: black;
    }
    :focus {
      outline: none;
    }
  }

  @media ${device.maxWidth} {
    flex-direction: column;
    padding: 10px;
  }
`;

export const Img = styled.img`
  width: 50%;
  margin-top: 90px;
  object-fit: cover;

  @media ${device.maxWidth} {
    width: 100%;
  }
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 31px;

  @media ${device.maxWidth} {
    width: 100%;
    gap: 20px;
  }
`;
export const Input = styled.input`
  width: 100%;
  height: 47px;
  border: none;
  font-weight: 700;
  font-size: 20px;
  border-bottom: 1px solid black;
  ::placeholder {
    color: black;
  }
  :focus {
    outline: none;
  }

  @media ${device.maxWidth} {
    font-size: 10px;
    height: 35px;
  }
`;

export const H1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  text-transform: uppercase;

  color: #01aee7;

  @media ${device.maxWidth} {
    font-size: 20px;
    line-height: normal;
  }
`;
export const Button = styled.button`

  padding: 17px 51px;
  width: 209px;
  height: 63px;
  background: #01aee7;
  cursor: pointer;
  border: none;
  border-radius: 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;

  :active {
    opacity: 0.8;
    scale: 0.98;
  }

  @media ${device.maxWidth} {
    padding: 10px 30px;
    font-size: 10px;
    width: 150px;
    height: auto;
    line-height: normal;
  }
`;

export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
    width: 95%;
  }
`;
