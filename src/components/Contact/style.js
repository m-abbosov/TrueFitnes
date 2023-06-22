import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 15px;

  .map {
    border: 0;
    width: 50%;
    height: 100%;
  }

  @media ${device.maxWidth} {
    width: 100%;
    .carousel-indicators {
      bottom: -30px !important;
    }

    .map {
      width: 100%;
      height: 200px;
    }
  }
`;
export const MapVsContact = styled.div`
  width: 100%;
  height: 662px;
  display: flex;
  margin-top: 20px;
  @media ${device.maxWidth} {
    flex-direction: column-reverse;
    height: auto;
  }
`;
export const ContactDiv = styled.div`
  width: 50%;
  height: 100%;
  background: #d9d9d9;
  padding: 140px 115px;
  padding-right: 32px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media ${device.maxWidth} {
    padding: 22px 19px;
    width: 100%;
    gap: 15px;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
  }
`;

export const H1 = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 42px;
  text-transform: uppercase;
  color: #01aee7;

  @media ${device.maxWidth} {
    font-size: 15px;
    line-height: normal;
    text-align: center;
    width: 80%;
  }
`;
export const P = styled.div`
  font-style: normal;
  font-weight: ${({ color }) => (color ? "400" : "700")};
  font-size: 25px;
  line-height: 30px;
  text-transform: uppercase;
  color: ${({ color }) => color || "#01AEE7"};

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
    text-align: center;
    width: ${({ color }) => (color ? "90%" : "auto")};
  }
`;

export const Link = styled.a`
  text-transform: lowercase;

  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: ${({ color }) => color || "#01AEE7"};
  text-decoration: none;

  @media ${device.maxWidth} {
    font-size: 10px;
    line-height: normal;
  }
`;
