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

  @media ${device.mobile} {
    flex-wrap: wrap;
    padding: 0;
    justify-content: space-around;
    height: 900px;
  }
  @media ${device.dectop} {
    gap: 60px;
    padding: 44px 100px;
  }
  
`;
export const FooterDiv = styled.div`
  display: flex;
  flex-direction: column;
  /* max-width: 23%; */
  @media ${device.mobile} {
    gap: 5px;
    max-width: ${({mobile})=>mobile?'90%':'145px'};
    max-height: ${({height})=>height?height:"fit-content"};
  }
  @media ${device.dectop} {
    gap: 28px;
    max-width: 23%;
    max-height: fit-content;
  }
`;
export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  .titleText {
    font-weight: 600;
  }
  @media ${device.mobile} {
    gap: 5px;
  }
  @media ${device.dectop} {
   gap: 16px;
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

  @media ${device.mobile} {
    font-size: 12px;
    line-height: 16px;
  }
  @media ${device.dectop} {
    font-size: 13px;
    line-height: 16px;
  }

  &:hover {
    cursor: pointer;
    border-bottom: 0.5px solid white;
    color: #ffffff;
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
  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-height: ${({height})=>height?height:"fit-content"};

  }
  @media ${device.dectop} {
    display: flex;
    column-gap: 126px;
    max-height: fit-content;
    flex-direction: row;
  }
`;
