import styled from "styled-components";
import { device } from "../../utils/responsive";

export const Wrapper = styled.div`
  width: 100vw;
  margin-top: 30px;
  @media ${device.maxWidth} {
    margin: 0;
    padding: 0;
  }
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 672px;
  position: relative;
  @media ${device.maxWidth} {
    height: 182px;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const BgFon = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`;

export const H1 = styled.div`
  color: white;
  font-size: 50px;
  font-weight: 700;
  line-height: 61px;

  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media ${device.maxWidth} {
    font-size: 20px;
    line-height: 24px;
    width: 100%;
  }
`;

export const ContainerText = styled.div`
  background: #01aee7;
  padding: 48px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  p {
    font-weight: 700;
    font-size: 35px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    width: 893px;
    margin: 0;
  }
  @media ${device.maxWidth} {
    padding: 13px 0;

    p {
      width: 100%;
      font-size: 10px;
      width: 274px;
    }
  }
`;
