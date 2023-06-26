import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  background: #eeeeee;
  margin: auto;
  margin-top: 20px;
  display: flex;
  gap: 73px;
  display: flex;
  justify-content: space-between;
  .title {
    font-weight: 700;
  }

  @media ${device.maxWidth} {
    padding: 20px 26px;

    .mobile {
      display: none;
    }

    .title {
      font-size: 20px;
      line-height: normal;
      text-align: center;
    }
  }
`;

export const TextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 767px;
  padding: 100px 0;
  @media ${device.maxWidth} {
    width: 100%;
    padding: 0;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 107px;
  row-gap: 92px;

  @media ${device.maxWidth} {
    margin-top: 20px;
    gap: 30px;
    display: grid;
    grid-template-columns: repeat(2, 147px);
    gap: 10px;
  }
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 299px;
  height: 195px;
  justify-content: flex-start;
  gap: 20px;

  .icon {
    width: 80px;
    height: 80px;
  }

  
  @media ${device.maxWidth} {
    width: 100%;
    height: 142px;
    gap: 10px;
    justify-items: center;

    .icon {
      width: 40px !important;
      height: 40px !important;
    }
  }
`;

export const Icon = styled.div`
  width: 80px;
  height: 80px;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #000000;
  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 10px;
  }
`;
export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: capitalize;
  color: #000000;
  @media ${device.maxWidth} {
    line-height: normal;
    font-size: 10px;
  }
`;

export const Img = styled.img`
  height: 100%;

  @media ${device.maxWidth} {
    display: none;
  }
`;
