import styled from "styled-components";
import { device } from "../../utils/responsive";


export const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  padding: 60px;

  .carousel-indicators {
    bottom: -60px;
  }

  @media ${device.maxWidth} {
    width: 300px;
    padding: 24px;
  }
`;