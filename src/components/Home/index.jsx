import Carousel from "../Corausel";
import {
  BgFon,
  ContainerText,
  H1,
  Video,
  VideoContainer,
  Wrapper,
} from "./style";
import video from "../../assets/videos/Salom Tashkent.mp4";
import WeOffer from "../WeOffer";
import Catalog from "../Catalog";
// import News from "../News";
import Club from "../3dClub";
import AboutTrue from "../AboutTrue";
import HomeForm from "../HomeForm";
import BestFeatures from "../BestFeatures";
import img from "../../assets/imgs/aboutTrue.png";
import OtherProject from "../OtherProject";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <VideoContainer backgroundClip={video}>
        <Video
          autoPlay
          loop
          src={video}
          muted
          playsInline
          controls={false}
        ></Video>
        <BgFon></BgFon>
        <H1 className="title">{t("home.bg_video")}</H1>
      </VideoContainer>
      <ContainerText>
        <div
          style={{ width: "230px", height: "1.5px", background: "#FFF500" }}
        ></div>
        <p>{t("home.blue_fon")}</p>
        <div
          style={{ width: "230px", height: "1.5px", background: "#FFF500" }}
        ></div>
      </ContainerText>
      <Carousel />
      <BestFeatures />
      <WeOffer />
      <Catalog />
      <Club />
      <AboutTrue img={img} button={true} />
      <HomeForm />
      <OtherProject />
    </Wrapper>
  );
}

export default Home;
