import styled from "styled-components";
import { ReactComponent as send } from "../../assets/icons/send.svg";
import { ReactComponent as ins } from "../../assets/icons/instagram.svg";
import { ReactComponent as youtube } from "../../assets/icons/bi_youtube.svg";
import { ReactComponent as facebook } from "../../assets/icons/ri_facebook-fill.svg";
import { device } from "./../../utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #01aee7;
  color: #ffffff;
  width: 100%;
  gap: 60px;
  padding: 44px 100px;

  @media ${device.maxWidth} {
    padding: 38px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    .titleText {
      font-size: 12px;
      width: 200%;
    }
  }
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 23%;
  max-height: fit-content;
  @media ${device.maxWidth} {
    width: 100%;
    gap: 12px;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .titleText {
    font-weight: 600;
  }
  @media ${device.maxWidth} {
    width: 100%;
  }
`;

export const P = styled.a`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  text-decoration: none;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  transition: 500ms;

  font-size: 13px;
  line-height: 16px;

  &:hover {
    cursor: pointer;
    border-bottom: 0.5px solid white;
    color: #ffffff;
  }

  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 10px;
  }
`;
export const SentEmail = styled.div`
  display: flex;
  gap: 8px;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 17px 10px 15px;
  gap: 10px;
  width: 175px;
  border: none;
  height: 44px;
  background: #ffffff;
  ::placeholder {
    color: black;
    font-weight: 700;
  }
  :focus {
    outline: none;
  }
`;
export const Button = styled.div`
  width: 59px;
  height: 44px;
  background: #fff500;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
`;

export const Send = styled(send)`
  width: 26px;
  height: 26px;
`;

export const Icons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 8px;
  align-items: end;
`;

export const Instogram = styled(ins)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;
export const Facebook = styled(facebook)`
  width: 24px;
  height: 26px;
  cursor: pointer;
`;
export const Youtube = styled(youtube)`
  width: 26px;
  height: 26px;
  cursor: pointer;
`;

export const Div = styled.div`
  display: flex;
  column-gap: 126px;
  max-height: fit-content;
  flex-direction: row;

  @media ${device.maxWidth} {
    flex-direction: column;
    width: 50%;
    gap: 15px;
  }
`;
