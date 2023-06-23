import { useState } from "react";
import { Button, Form, H1, Img, Input, P, Wrapper } from "./style";
import img from "../../assets/imgs/club.jpg";
import { useTranslation } from "react-i18next";
import { PhoneInput } from "react-international-phone";
import { ToastContainer, toast } from "react-toastify";

import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";

function Club() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (
      e.target[3].value
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
      e.target[3].value
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("")
    );
    formData.append("city", null);
    formData.append("want", null);
    formData.append("term", null);
    formData.append("size", null);
    formData.append("interested", null);
    formData.append("comments", null);

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

  return (
    <Wrapper id="club-3d">
      <Img src={img} alt="" data-aos="zoom-in-right" />
      <Form data-aos="fade-left" id="sheetdb-form" onSubmit={handleSubmit}>
        <H1 data-aos="fade-left"> {t("home.club.title")} </H1>
        <Input
          data-aos="fade-left"
          required
          type="text"
          placeholder="Имя"
          name="data[name]"
        />
        <Input
          required
          type="email"
          placeholder="Электронная почта"
          name="data[email]"
          data-aos="fade-left"
        />
        <PhoneInput
          defaultCountry="uz"
          value={phone}
          hideDropdown={true}
          onChange={(phone) => setPhone(phone)}
          placeholder="+998 (99)-999-99-99"
          name="data[phone]"
          data-aos="fade-left"
        />
        <Button onSubmit={handleSubmit} data-aos="fade-left" type="submit">
          {t("home.club.button")}
        </Button>
        <P data-aos="fade-left"> {t("home.club.text")} </P>
        <ToastContainer />
      </Form>
    </Wrapper>
  );
}

export default Club;
