import styled from "styled-components";

export const Wrapper = styled.div`
  height: 784px;
  padding: 80px 100px;
  display: flex;
  justify-content: center;
  gap: 45px;
  background-color: #EEE;
`;
export const IMG = styled.img`
  width: 585px;
  height: 624px;
  object-fit: cover;
`;
export const Container = styled.div`
  width: 610px;
  height: 624px;
  background: #01aee7;
  padding: 30px 27px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const H1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 72px;
  text-transform: uppercase;
  color: #ffffff;
  text-align: center;
`;

export const Span = styled.div`
  width: 167px;
  height: 5px;
  background: #fff500;
  border-radius: 5px;
`;
export const Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const Button = styled.button`
  width: 300px;
  height: 63px;
  background: #ffff19;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  text-transform: uppercase;
  color: #01aee7;
  transition: 0.3s;
  border: none;
  :hover{
    cursor: pointer;
  }
  :active{
    opacity: 0.8;
    scale: 0.98;
  }
`;

