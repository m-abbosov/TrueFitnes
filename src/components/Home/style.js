import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  padding: 15px 0;
  margin-top: 30px;
`;
export const VideoContainer = styled.div`
  width: 100%;
  height: 672px;
  position: relative;
`;

export const Video = styled.video`
  width: 100%;
  height: 672px;
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
  font-family: "Inter";
  position: absolute;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContainerText = styled.div`
  background: #01aee7;
  line-height: 180px;
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
    line-height: 43px;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
    width: 893px;
  }
`;
