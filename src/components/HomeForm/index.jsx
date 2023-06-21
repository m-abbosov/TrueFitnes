import { PhoneInput } from "react-international-phone";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Input, P, Title, Wrapper } from "./style";
import { ToastContainer, toast } from "react-toastify";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";

function HomeForm() {
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
    formData.append("interested", null);
    formData.append("comments", null);

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
        setPhone("")
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
      <Card onSubmit={handleSubmit}>
        <Title> {t("home.home_form.title")} </Title>
        <P> {t("home.home_form.text_1")} </P>
        <Input
          type="text"
          required
          placeholder={t("input_placeholder.input_name")}
        />
        <Input
          type="email"
          required
          placeholder={t("input_placeholder.input_email")}
        />
        <PhoneInput
          defaultCountry="uz"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="+998 (99)-999-99-99"
          name="data[phone]"
          hideDropdown={true}
        />
        <Button type="submit"> {t("home.home_form.button")}</Button>
        <P> {t("home.home_form.text")} </P>
        <ToastContainer />
      </Card>
    </Wrapper>
  );
}

export default HomeForm;
