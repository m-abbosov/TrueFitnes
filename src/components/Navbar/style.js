import styled from "styled-components";
import { device } from "./../../utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  object-fit: contain;
  cursor: pointer;
  @media ${device.mobile} {
    width: 200px;
    height: 28px;
  }
  @media ${device.dectop} {
    width: 611px;
    height: 100px;
  }
`;
export const WrapperLogo = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.mobile} {
    border: none;
    align-items: center;
    padding: 10px 17px;
    width: 100%;
  }
  @media ${device.dectop} {
    padding: 24px 0 14px 0;
    border-bottom: 1px solid black;
    width: 90%;
    max-width: 1440px ;
  }
`;
export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
export const Button = styled.button`
  color: white;
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  width: 230px;
  height: 36px;
  padding: 9px 40px;

  border: none;
  background: #01aee7;
  letter-spacing: 1px;

  font-weight: 500;
  text-transform: uppercase;
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
  @media ${device.mobile} {
    display: none;
  }
  @media ${device.dectop} {
    display: block;
  }
`;
export const Links = styled.div`
  padding: 16px 100px;
  justify-content: center;
  width: 100%;
  @media ${device.mobile} {
    display: ${({ mobile }) => mobile? "flex": "none"};
    flex-direction: column;
    gap: 30px;
  }
  @media ${device.dectop} {
    flex-direction: row;
    gap: 120px;
    display: ${({ mobile }) => mobile? "none": "flex"};
  }
`;
export const Link = styled.div`
  transition: 500ms;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: #01aee7;
  }
`;

export const Menu = styled.div`
  @media ${device.mobile} {
    display: flex;
  }
  @media ${device.dectop} {
    display: none;
  }
`;
