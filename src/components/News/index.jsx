import { Card, Date, Img, P, Title, Wrapper } from "./style";
import { H1, Cards } from "../Catalog/style";
import img from "../../assets/imgs/news1.png";
import img2 from "../../assets/imgs/news2.png";
import img3 from "../../assets/imgs/news3.png";

function News() {
  return (
    <Wrapper>
      <H1>Новости и события</H1>
      <Cards>
        <Card>
          <Img src={img} alert="hello" />
          <Title>Внимание: True Fitness Line!</Title>
          <P>
            Предлагаем подробнее ознакомиться с нашей серией тренажеров Fitness
            Line.
          </P>
          <Date>04.10.2021</Date>
        </Card>
        <Card>
          <Img src={img2} />
          <Title>Новая консоль Escalate</Title>
          <P>
            Новая консоль Escalate с 9 дюймовым сенсорным Touch Screen дисплеем.
          </P>
          <Date>29.09.2021</Date>
        </Card>
        <Card>
          <Img src={img3} />
          <Title>На Старт, Внимание, Бегите!</Title>
          <P>Что такое Zwift? Если вы не знакомы с Zwift, мы поможем вам!</P>
          <Date>25.02.2021</Date>
        </Card>
      </Cards>
    </Wrapper>
  );
}

export default News;
