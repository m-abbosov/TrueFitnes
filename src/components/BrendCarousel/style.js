import styled from "styled-components";
import img from "../../assets/imgs/brandCarouselITPark.png";

export const Wrapper = styled.div`
  margin: 76px 0;
  .carousel-indicators {
    bottom: -40px;
  }
`;

export const Img = styled.img``;

export const UserName = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => size || "25px"};
  line-height: 30px;
  text-transform: uppercase;
  color: #01aee7;
  text-align: center;
`;
export const Title = styled.h2`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  text-align: center;
  text-transform: uppercase;
  color: rgba(17, 17, 17, 0.85);
  margin-bottom: 64px;
`;

export const WrapperCarousel = styled.div`
  width: 1440px;
  height: 100%;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  /* justify-content: space-between; */
  position: absolute;
  padding: 15px 300px;
  top: 0;
`;

export const P = styled.p`
  font-family: "Montserrat";
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  width: 60%;
  text-align: center;
  text-transform: capitalize;
  color: ${({ color }) => color || "#01aee7"};
`;
export const IMG = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`;

export const Span = styled.span`
  background: #ffff19;
  width: 200px;
  height: 3px;
`;
export const Video = styled.div`
  width: 480px;
  height: 280.06px;
  background-image: url(${img});
`;
