import styled from "styled-components";
import img from "../../assets/imgs/formbg.png";

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
    }
    ::placeholder {
      color: black;
    }
    :focus {
      outline: none;
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
`;

export const H6 = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: #ffffff;
  max-width: 767px;
`;

export const Formm = styled.form`
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
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #000000;
  :focus {
    outline: none;
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
