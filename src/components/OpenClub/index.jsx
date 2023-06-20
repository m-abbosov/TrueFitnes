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
import img from "../../assets/imgs/club.png";
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
          <Input placeholder="имя" />
          <FormTitle>Е-mail:</FormTitle>
          <Input placeholder="Е-mail:" />
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
          <Button type="submit">Oтпрвить</Button>
        </Form>
      </FormContainer>

      <ToastContainer />
    </Wrapper>
  );
}

export default OpenClub;
