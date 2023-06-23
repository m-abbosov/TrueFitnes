import { useState } from "react";
import { Wrapper, ImgDiv, H6, Input, ButtonForm, Formm, Back } from "./style";
import { ClubText, Title } from "../OpenClub/style";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";
import { PhoneInput } from "react-international-phone";

function Form() {
  const { t } = useTranslation();
  const [phone, setPhone] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (
      e.target[2].value
        .split(" ")
        .filter((_, i) => i !== 0)
        .join("").length < 9
    ) {
      toast.error("Номер неправильный!");
      return;
    }

    const id = toast.loading("Загрузка...");
    formData.append("name", e.target[0].value);
    formData.append("email", e.target[3].value);
    formData.append(
      "phone",
      e.target[2].value
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
      <ImgDiv>
        <Back>
          <ClubText size="lg">
            TRUE FITNESS
          </ClubText>
          <Title size="lg" data-aos="fade-up">
            {t("form.title")}{" "}
            <span style={{ color: "#01AEE7" }}>{t("form.title2")}</span>{" "}
            {t("form.title3")}{" "}
            <span style={{ color: "#01AEE7" }}>{t("form.title4")}</span>
          </Title>
          <ClubText data-aos="fade-up" t size="lg">
            {t("form.yellow_text")}
          </ClubText>
          <Formm onSubmit={handleSubmit}>
            <Input
              type="text"
              required
              placeholder={t("input_placeholder.input_name")}
              data-aos="fade-up"
            />
            <PhoneInput
              defaultCountry="uz"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              placeholder="+998 (99)-999-99-99"
              name="data[phone]"
              hideDropdown={true}
              data-aos="fade-up"
            />
            <Input
              type="email"
              required
              placeholder={t("input_placeholder.input_email")}
              data-aos="fade-up"
            />
            <ButtonForm data-aos="fade-up">{t("form.button")}</ButtonForm>
          </Formm>
          <H6 data-aos="fade-right">{t("form.text")}</H6>
        </Back>
      </ImgDiv>
      <ToastContainer />
    </Wrapper>
  );
}

export default Form;
