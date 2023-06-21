import styled from "styled-components";

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
    }
    ::placeholder {
      color: black;
    }
    :focus {
      outline: none;
    }
  }
`;

export const Img = styled.img`
  width: 50%;
  margin-top: 90px;
  object-fit: cover;
`;

export const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 31px;
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
`;

export const H1 = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 56px;
  text-transform: uppercase;

  color: #01aee7;
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 17px 51px;
  gap: 10px;
  width: 209px;
  height: 63px;
  background: #01aee7;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  :active {
    opacity: 0.8;
    scale: 0.98;
  }
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #ffffff;
`;

export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  color: #000000;
`;
