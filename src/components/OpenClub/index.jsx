import { useState } from "react";
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
import img from "../../assets/imgs/club.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";

import { PhoneInput } from "react-international-phone";
function OpenClub() {
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (
      e.target[3].value
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("")
        .trim() === ""
    ) {
      toast.error("Где-то ошибка");
      return;
    }

    const id = toast.loading("Загрузка...");
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append(
      "phone",
      e.target[3].value
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("")
    );

    fetch(" https://sheetdb.io/api/v1/fl9x6zmo27z3l", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((html) => {
        toast.update(id, {
          render: "Добавлено успешно!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
      })
      .catch((err) =>
        toast.update(id, {
          render: "Где-то ошибка",
          type: "error",
          isLoading: false,
          autoClose: 2000,
        })
      );
  };
  return (
    <Wrapper>
      <TitleContainer>
        <ClubText>КЛУБ TRUE</ClubText>
        <Title>Открыть клуб вместе с TRUE</Title>
      </TitleContainer>
      <Img src={img} />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle size="30px">Отправить заявку</FormTitle>
          <FormTitle>Ваше имя</FormTitle>
          <Input type="text" required placeholder="имя" />
          <FormTitle>Е-mail:</FormTitle>
          <Input type="email" required placeholder="Е-mail:" />
          <FormTitle>Номер телефона</FormTitle>
          <PhoneInput
            defaultCountry="uz"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="+998 (99)-999-99-99"
            name="data[phone]"
            hideDropdown={true}
          />
          <FormTitle>Город</FormTitle>
          <Input placeholder="Город" />
          <FormTitle>Хотите открыть:</FormTitle>
          <Label>
            <input
              type="radio"
              name="open"
              id="fitness-club"
              value="Фитнес клуб"
            />
            <FormText htmlFor="fitness-club">Фитнес клуб</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="fitness-studio"
              value="Фитнес студия"
            />
            <FormText htmlFor="fitness-studio">Фитнес студия</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="corpo-sport"
              value="Корпоративный спортзал"
            />
            <FormText htmlFor="corpo-sport">Корпоративный спортзал</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="stanatory"
              value="Тренажерный зал в отеле, санатории"
            />
            <FormText htmlFor="stanatory">
              Тренажерный зал в отеле, санатории
            </FormText>
          </Label>
          <Label>
            <input id="home-sport" type="radio" name="open" />
            <FormText htmlFor="home-sport">Домашний спортзал</FormText>
          </Label>

          <FormTitle>Планируемый срок запуска проекта:</FormTitle>
          <Label>
            <input type="radio" name="time" id="fast" value="Срочно" />
            <FormText htmlFor="fast">Срочно</FormText>
          </Label>
          <Label>
            <input type="radio" name="time" id="month-1" value="до 1 месяца" />
            <FormText htmlFor="month-1">до 1 месяца</FormText>
          </Label>
          <Label>
            <input type="radio" name="time" id="month-3" value="до 3 месяцев" />
            <FormText htmlFor="month-3">до 3 месяцев</FormText>
          </Label>
          <Label>
            <input type="radio" name="time" id="month-6" value="до 6 месяцев" />
            <FormText htmlFor="month-6">до 6 месяцев</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-12"
              value="до 12 месяцев"
            />
            <FormText htmlFor="month-12">до 12 месяцев</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-12p"
              value="более 12 месяцев"
            />
            <FormText htmlFor="month-12p">более 12 месяцев</FormText>
          </Label>

          <FormTitle>Какие услуги Вас интересуют:</FormTitle>
          <Label>
            <input type="checkbox" id="consult" value="Консультация" />
            <FormText htmlFor="consult">Консультация</FormText>
          </Label>
          <Label>
            <input type="checkbox" id="selection" value="Подбор оборудования" />
            <FormText htmlFor="selection">Подбор оборудования</FormText>
          </Label>
          <Label>
            <input
              type="checkbox"
              id="simulators"
              value="Расстановка тренажеров на плане"
            />
            <FormText htmlFor="simulators">
              Расстановка тренажеров на плане
            </FormText>
          </Label>
          <Label>
            <input type="checkbox" id="lizing" value="Лизинг" />
            <FormText htmlFor="lizing">Лизинг</FormText>
          </Label>
          <FormTitle>Комментарий</FormTitle>
          <Input height={"103px"} />
          <Button type="submit">Oтпрвить</Button>
        </Form>
      </FormContainer>

      <ToastContainer />
    </Wrapper>
  );
}

export default OpenClub;
