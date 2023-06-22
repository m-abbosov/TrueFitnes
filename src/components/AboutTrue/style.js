import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  height: 784px;
  padding: 80px 100px;
  display: flex;
  justify-content: center;
  gap: 45px;
  background-color: #eee;

  @media ${device.maxWidth} {
    height: auto;
    padding: 0;
    gap: 0;

    .about-true {
      display: none;
    }
  }
`;
export const Container = styled.div`
  width: 610px;
  height: 624px;
  background: #01aee7;
  padding: 30px 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media ${device.maxWidth} {
    width: 100%;
    height: auto;
    padding: 16px 18px;
    gap: 12px;
  }
`;

export const H1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;

  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 20px;
  }
`;

export const Span = styled.div`
  width: 167px;
  height: 5px;
  background: #fff500;
  border-radius: 5px;

  @media ${device.maxWidth} {
    height: 3.697px;
    height: 3px;
    width: 94px;
  }
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
    line-height: 20px;
  }
`;

export const Button = styled.button`
  background: #ffff19;

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #01aee7;
  transition: 0.3s;
  border: none;
  padding: 17px 84px;
  :hover {
    cursor: pointer;
  }
  :active {
    opacity: 0.8;
    scale: 0.98;
  }

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
    margin-bottom: 10px;
  }
`;
