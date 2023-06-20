import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 77px;
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
  width: 1350px;
  height: 900px;
  margin: auto;
`;

export const FormContainer = styled.div`
  width: 1440px;
  height: 1547px;
  background: #d9d9d9;
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
export const FormText = styled.span`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: #000000;
`;

export const Form = styled.div`
  width: 405px;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* justify-content: space-between; */
`;
export const Input = styled.input`
  width: 395px;
  height: ${({ height }) => height || "46px"};
  display: flex;
  justify-content: center;
  /* align-items: center; */
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

export const Label = styled.label`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Button = styled.button`
  padding: 9px 30px;
  gap: 10px;
  width: 161px;
  height: 40px;
  background: #01aee7;
  font-family: "Inter";
  font-style: normal;
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
