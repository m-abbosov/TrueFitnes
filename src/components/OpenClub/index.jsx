import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { useTranslation } from "react-i18next";
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

function OpenClub() {
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState("");
  const [time, setTime] = useState("");
  const [interest, setInterest] = useState("");
  const [size, setSize] = useState("");

  const { t } = useTranslation();

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
          render: "«ОТПРАВЛЕНО успешно!»",
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
        <ClubText data-aos="fade-up">{t("open_club.blue_fon.text")}</ClubText>
        <Title data-aos="fade-up">{t("open_club.blue_fon.title")}</Title>
      </TitleContainer>
      <img data-aos="zoom-in" alt="" className="openclub-img" src={img} />
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <FormTitle data-aos="fade-up" size="30px">
            {t("open_club.form.title")}
          </FormTitle>
          <FormTitle data-aos="fade-up">
            {t("open_club.form.input_name_title")}
          </FormTitle>
          <Input
            data-aos="fade-up"
            type="text"
            required
            placeholder={t("open_club.form.input_name_title")}
          />
          <FormTitle data-aos="fade-up">
            {t("open_club.form.input_email_title")}
          </FormTitle>
          <Input
            data-aos="fade-up"
            type="email"
            required
            placeholder={t("open_club.form.input_email_title")}
          />
          <FormTitle data-aos="fade-up">
            {t("open_club.form.input_phone_title")}
          </FormTitle>
          <PhoneInput
            defaultCountry="uz"
            value={phone}
            onChange={(phone) => setPhone(phone)}
            placeholder="+998 (99)-999-99-99"
            name="data[phone]"
            hideDropdown={true}
            data-aos="fade-up"
          />
          <FormTitle data-aos="fade-up">
            {t("open_club.form.input_city_title")}
          </FormTitle>
          <Input
            data-aos="fade-up"
            placeholder={t("open_club.form.input_city_title")}
            type="text"
            required
          />
          <FormTitle data-aos="fade-up">
            {t("open_club.form.radio_open_title")}
          </FormTitle>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="open"
              id="fitness-club"
              value="Фитнес клуб"
              onChange={handleOpen}
            />
            <FormText htmlFor="fitness-club">
              {t("open_club.form.open_text-1")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="open"
              id="fitness-studio"
              value="Фитнес студия"
              onChange={handleOpen}
            />
            <FormText htmlFor="fitness-studio">
              {t("open_club.form.open_text-2")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="open"
              id="corpo-sport"
              value="Корпоративный спортзал"
              onChange={handleOpen}
            />
            <FormText htmlFor="corpo-sport">
              {t("open_club.form.open_text-3")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="open"
              id="stanatory"
              value="Тренажерный зал в отеле, санатории"
              onChange={handleOpen}
            />
            <FormText htmlFor="stanatory">
              {t("open_club.form.open_text-4")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              id="home-sport"
              onChange={handleOpen}
              type="radio"
              name="open"
              value="Домашний спортзал"
            />
            <FormText htmlFor="home-sport">
              {t("open_club.form.open_text-5")}
            </FormText>
          </Label>
          <FormTitle data-aos="fade-up">
            {t("open_club.form.radio_date_title")}
          </FormTitle>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="fast"
              value="Срочно"
              onChange={handleTime}
            />
            <FormText htmlFor="fast">
              {t("open_club.form.date_text-1")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="month-1"
              value="до 1 месяца"
              onChange={handleTime}
            />
            <FormText htmlFor="month-1">
              {t("open_club.form.date_text-2")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="month-3"
              value="до 3 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-3">
              {t("open_club.form.date_text-3")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="month-6"
              value="до 6 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-6">
              {t("open_club.form.date_text-4")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="month-12"
              value="до 12 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-12">
              {t("open_club.form.date_text-5")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="time"
              id="month-12p"
              value="более 12 месяцев"
              onChange={handleTime}
            />
            <FormText htmlFor="month-12p">
              {t("open_club.form.date_text-6")}
            </FormText>
          </Label>

          <FormTitle>{t("open_club.form.radio_size_title")}</FormTitle>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-100"
              value="до 100 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-100">
              {t("open_club.form.size_text-1")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-200"
              value="100 - 200 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-200">
              {t("open_club.form.size_text-2")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-400"
              value="200 - 400 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-400">
              {t("open_club.form.size_text-3")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-700"
              value="400 - 700 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-700">
              {t("open_club.form.size_text-4")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-1000"
              value="700 - 1000 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1000">
              {t("open_club.form.size_text-5")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-1500"
              value="1000 - 1500 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1500">
              {t("open_club.form.size_text-6")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="radio"
              name="size"
              id="from-1500p"
              value="Более 1500 м2"
              onChange={handleSize}
            />
            <FormText htmlFor="from-1500p">
              {t("open_club.form.size_text-7")}
            </FormText>
          </Label>

          <FormTitle data-aos="fade-up">
            {t("open_club.form.select_title")}
          </FormTitle>
          <Label data-aos="fade-up">
            <input
              type="checkbox"
              id="consult"
              value="Консультация"
              onChange={handleInterest}
            />
            <FormText htmlFor="consult">
              {t("open_club.form.select_text-1")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="checkbox"
              id="selection"
              value="Подбор оборудования"
              onChange={handleInterest}
            />
            <FormText htmlFor="selection">
              {t("open_club.form.select_text-2")}
            </FormText>
          </Label>
          <Label data-aos="fade-up">
            <input
              type="checkbox"
              id="simulators"
              value="Расстановка тренажеров на плане"
              onChange={handleInterest}
            />
            <FormText htmlFor="simulators">
              {t("open_club.form.select_text-3")}
            </FormText>
          </Label>
          <FormTitle data-aos="fade-up">
            {t("open_club.form.comentary")}
          </FormTitle>
          <Input data-aos="fade-up" maxLength="200" height={"103px"} />
          <Button data-aos="fade-up" type="submit">
            {t("open_club.form.button")}
          </Button>
        </Form>
      </FormContainer>
      <ToastContainer />
    </Wrapper>
  );
}

export default OpenClub;
