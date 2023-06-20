import {
  Button,
  ClubText,
  Form,
  FormContainer,
  FormText,
  FormTitle,
  Img,
  Input,
  Label,
  Title,
  TitleContainer,
  Wrapper,
} from "./style";
import img from "../../assets/imgs/club.png";

function OpenClub() {
  return (
    <Wrapper>
      <TitleContainer>
        <ClubText>КЛУБ TRUE</ClubText>
        <Title>Открыть клуб вместе с TRUE</Title>
      </TitleContainer>
      <Img src={img} />
      <FormContainer>
        <Form>
          <FormTitle size="30px">Отправить заявку</FormTitle>
          <FormTitle>Ваше имя</FormTitle>
          <Input placeholder="имя" />
          <FormTitle>Е-mail:</FormTitle>
          <Input placeholder="Е-mail:" />
          <FormTitle>Номер телефона</FormTitle>
          <Input placeholder=" +7(999)-999-99-99" />
          <FormTitle>Город</FormTitle>
          <Input placeholder="Город" />
          <FormTitle>Хотите открыть:</FormTitle>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Фитнес студия</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Фитнес клуб</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Домашний спортзал</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Тренажерный зал в отеле, санатории</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>

          <FormTitle>Планируемый срок запуска проекта:</FormTitle>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Фитнес студия</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Фитнес клуб</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Домашний спортзал</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Тренажерный зал в отеле, санатории</FormText>
          </Label>
          <Label htmlFor="">
            <input type="radio" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>
          <FormTitle>Какие услуги Вас интересуют:</FormTitle>
          <Label>
            <input type="checkbox" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>
          <Label>
            <input type="checkbox" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>
          <Label>
            <input type="checkbox" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>
          <Label>
            <input type="checkbox" name="open" />
            <FormText>Корпоративный спортзал</FormText>
          </Label>
          <FormTitle>Загрузить план помещения</FormTitle>
          <Button>ADD FILES</Button>
          <FormTitle>Комментарий</FormTitle>
          <Input height={"103px"} />
          <Button>Oтпрвить</Button>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}

export default OpenClub;
