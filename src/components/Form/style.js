import styled from "styled-components";
import img from "../../assets/imgs/formbg.png";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  width: 100vw;

  .react-international-phone-input-container {
    padding: 15px;
    height: 60px;
    background: #d9d9d9;
    border: none;

    * {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      text-transform: uppercase;
      color: #000000;
      background: transparent;
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

    @media ${device.maxWidth} {
      width: 100%;
    }
  }
`;

export const ImgDiv = styled.div`
  width: 100vw;
  height: 717px;
  padding: 55px;

  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.maxWidth} {
    width: 100%;
    padding: 50px 10px;
    height: 100%;
  }
`;

export const Back = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  padding: 38px 34px 92px 44px;
  background: rgba(18, 14, 14, 0.37);

  @media ${device.maxWidth} {
    width: 100%;
    padding: 26px 32px;
  }
`;

export const H6 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 767px;

  @media ${device.maxWidth} {
    font-size: 10px;
    margin-top: 13px;

  }
`;

export const Formm = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;

  @media ${device.maxWidth} {
    flex-wrap: wrap;
  }
`;

export const Input = styled.input`
  padding: 18px 15px;
  width: 295px;
  height: 60px;
  background: #d9d9d9;
  border: none;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #000000;
  :focus {
    outline: none;
  }
  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
  }
`;
export const ButtonForm = styled.button`
  text-align: center;
  padding: 18px 0;
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

  @media ${device.maxWidth} {
    width: 100%;
    font-size: 10px;
  }
`;
