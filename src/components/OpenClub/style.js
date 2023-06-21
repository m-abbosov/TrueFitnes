import styled from "styled-components";

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
`;

export const Img = styled.img`
  display: block;
  width: 1350px;
  height: 900px;
  margin: auto;
  padding: 77px 0;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 1547px;
  background: #eee;
  padding: 65px 0;
`;
export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => size || "40px"};
  line-height: 48px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;

export const ClubText = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #fff500;
  text-align: center;
  margin-bottom: 20px;
`;

export const P = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const FormTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => size || "18px"};
  line-height: 36px;
  text-transform: uppercase;
  color: #000000;
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
`;
export const Input = styled.input`
  width: 395px;
  height: ${({ height }) => height || "46px"};
  display: flex;
  justify-content: center;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  ::placeholder {
    font-size: 18px;
    line-height: 22px;
  }
  :focus {
    outline: none;
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
  }
`;

export const Button = styled.button`
  padding: 9px 30px;
  gap: 10px;
  width: 161px;
  height: 40px;
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
`;
