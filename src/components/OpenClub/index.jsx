import { useState } from "react";
import {
  Button,
  ClubText,
  Form,
  FormContainer,
  FormText,
  FormTitle,
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
import { LazyLoadImage } from "react-lazy-load-image-component";
function OpenClub() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");
  const [size, setSize] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (
      phone
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("").length < 9
    ) {
      toast.error("Номер неправильный!");
      return;
    }
    const id = toast.loading("Загрузка...");

    formData.append("name", e.target[0].value);
    formData.append("email", e.target[1].value);
    formData.append(
      "phone",
      phone
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("")
    );
    formData.append("city", e.target[4].value);
    formData.append("want", open);
    formData.append("term", time);
    formData.append("size", size);
    formData.append("interested", interest);
    formData.append("comments", e.target[20].value);
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
        e.target.reset();
        setPhone("");
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

  const handleOpen = (e) => {
    setOpen(e.target.value);
  };
  const handleTime = (e) => {
    setTime(e.target.value);
  };
  const handleSize = (e) => {
    setSize(e.target.value);
  };

  const handleInterest = (e) => {
    if (interest.trim() === "") {
      setInterest(e.target.value);
    } else {
      setInterest((prev) => setInterest(`${prev}, ${e.target.value}`));
    }
  };
  return (
    <Wrapper>
      <TitleContainer>
        <ClubText>КЛУБ TRUE</ClubText>
        <Title>Открыть клуб вместе с TRUE</Title>
      </TitleContainer>
      <img alt="" className="d-block m-auto my-5" width="1350px" src={img} />
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
          <Input placeholder="Город" type="text" required />
          <FormTitle>Хотите открыть:</FormTitle>
          <Label>
            <input
              type="radio"
              name="open"
              id="fitness-club"
              value="Фитнес клуб"
              onChange={handleOpen}
            />
            <FormText htmlFor="fitness-club">Фитнес клуб</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="fitness-studio"
              value="Фитнес студия"
              onChange={handleOpen}
            />
            <FormText htmlFor="fitness-studio">Фитнес студия</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="corpo-sport"
              value="Корпоративный спортзал"
              onChange={handleOpen}
            />
            <FormText htmlFor="corpo-sport">Корпоративный спортзал</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="open"
              id="stanatory"
              value="Тренажерный зал в отеле, санатории"
              onChange={handleOpen}
            />
            <FormText htmlFor="stanatory">
              Тренажерный зал в отеле, санатории
            </FormText>
          </Label>
          <Label>
            <input
              id="home-sport"
              onChange={handleOpen}
              type="radio"
              name="open"
              value="Домашний спортзал"
            />
            <FormText htmlFor="home-sport">Домашний спортзал</FormText>
          </Label>
          <FormTitle>Планируемый срок запуска проекта:</FormTitle>
          <Label>
            <input
              type="radio"
              name="time"
              id="fast"
              value="Срочно"
              onChange={handleTime}
            />
            <FormText htmlFor="fast">Срочно</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-1"
              value="до 1 месяца"
              onChange={handleTime}
            />
            <FormText htmlFor="month-1">до 1 месяца</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-3"
              value="до 3 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-3">до 3 месяцев</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-6"
              value="до 6 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-6">до 6 месяцев</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-12"
              value="до 12 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-12">до 12 месяцев</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="time"
              id="month-12p"
              value="более 12 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-12p">более 12 месяцев</FormText>
          </Label>

          <FormTitle>Общая площадь тренажерного зала:</FormTitle>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-100"
              value="до 100 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-100">до 100 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-200"
              value="100 - 200 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-200">100 - 200 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-400"
              value="200 - 400 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="month-3">200 - 400 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-700"
              value="400 - 700 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-700">400 - 700 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-1000"
              value="700 - 1000 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1000">700 - 1000 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-1500"
              value="1000 - 1500 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1500">1000 - 1500 м2</FormText>
          </Label>
          <Label>
            <input
              type="radio"
              name="size"
              id="from-1500p"
              value="Более 1500 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1500p">Более 1500 м2</FormText>
          </Label>

          <FormTitle>Какие услуги Вас интересуют:</FormTitle>
          <Label>
            <input
              type="checkbox"
              id="consult"
              value="Консультация"
              onChange={handleInterest}
            />
            <FormText htmlFor="consult">Консультация</FormText>
          </Label>
          <Label>
            <input
              type="checkbox"
              id="selection"
              value="Подбор оборудования"
              onChange={handleInterest}
            />
            <FormText htmlFor="selection">Подбор оборудования</FormText>
          </Label>
          <Label>
            <input
              type="checkbox"
              id="simulators"
              value="Расстановка тренажеров на плане"
              onChange={handleInterest}
            />
            <FormText htmlFor="simulators">
              Расстановка тренажеров на плане
            </FormText>
          </Label>
          <FormTitle>Комментарий</FormTitle>
          <Input maxLength="200" height={"103px"} />
          <Button type="submit">Oтпрвить</Button>
        </Form>
      </FormContainer>
      <ToastContainer />
    </Wrapper>
  );
}

export default OpenClub;
