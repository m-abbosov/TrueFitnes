import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.img`
  width: 611px;
  height: 100px;
  object-fit: contain;
  cursor: pointer;
`;
export const WrapperLogo = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  /* padding-bottom: 16px; */
  padding: 24px 0 14px 0;
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 9px 40px;
  gap: 10px;
  width: 230px;
  height: 36px;
  border: none;
  background: #01aee7;
  letter-spacing: 1px;
  :active {
    scale: 0.98;
    opacity: 0.8;
  }
`;
export const Links = styled.div`
  display: flex;
  padding: 16px 100px;
  justify-content: center;
  gap: 120px;
  width: 100%;
`;
export const Link = styled.div`
  transition: 500ms;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    color: #01aee7;
  }
`;
