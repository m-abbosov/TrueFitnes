import styled from "styled-components";
import { ReactComponent as naushnik } from "../../assets/icons/naushniks.svg";
import { ReactComponent as youtube } from "../../assets/icons/videovou.svg";
import { ReactComponent as home } from "../../assets/icons/home.svg";
import { ReactComponent as burchak } from "../../assets/icons/6burchak.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as settings } from "../../assets/icons/Settings.svg";
export const Wrapper = styled.div`
  height: 1200px;
  background: #eeeeee;
  margin: auto;
  padding: 112px 0 0 100px;
  display: flex;
  gap: 73px;
  display: flex;
  justify-content: space-between;
`;

export const TextCotainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 767px;
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 107px;
  row-gap: 92px;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 299px;
  height: 195px;
  justify-content: start;
  gap: 20px;
`;

export const Icon = styled.div``;
// <--------- Icons  -------------->
Icon.Naushnik = styled(naushnik)`
  width: 80px;
  height: 80px;
`;
Icon.You = styled(youtube)`
  width: 80px;
  height: 80px;
`;
Icon.Burchak = styled(burchak)`
  width: 80px;
  height: 80px;
`;
Icon.Car = styled(car)``;
Icon.Setting = styled(settings)``;
Icon.Home = styled(home)`
  width: 80px;
  height: 52px;
`;

export const Title = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;
  color: #000000;
`;
export const P = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-transform: lowercase;

  color: #000000;
`;

export const Img = styled.img`
  height: 100%;
  
`;
