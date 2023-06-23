import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 78px;
  margin: none;

  h2 {
    color: #000;
    font-size: 50px;
    font-weight: 700;
    text-transform: uppercase;
    padding-bottom: 65px;
  }

  ul {
    background: #000000;
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 97px 0;
    margin: 0 !important;
  }

  @media ${device.maxWidth} {
    padding-top: 40px;
    h2 {
      font-size: 20px;
      padding-bottom: 20px;
    }

    ul {
      padding: 15px;

      li {
        width: 30%;

        img {
          width: 100%;
        }
      }
    }
  }
`;
