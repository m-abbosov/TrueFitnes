import {
  Logo,
  Wrapper,
  WrapperLogo,
  Contact,
  Button,
  Links,
  Link,
} from "./style";
import logo from "../../assets/imgs/logo.png";
import { navbar } from "../../utils/navbar";
import { Outlet, useNavigate, Link as LinkR } from "react-router-dom";
import Footer from "../Footer";
import i18next from "i18next";
import cookie from "js-cookie";
import { useTranslation } from "react-i18next";

const lenguage = [
  {
    name: "Uzb",
    code: "uz",
    flag: "uz",
  },

  {
    name: "Russsia",
    code: "ru",
    flag: "ru",
  },
];
const uzb = [
  "",
  "Brend",
  "MAHSULOTLAR",
  "Afzalliklari",
  "Klub ochish",
  "Kontaktlar",
];
const Navbar = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const currentLenguageCode = cookie.get("i18next") || "uz";
  return (
    <Wrapper>
      <WrapperLogo>
        <Logo onClick={() => navigate("/")} src={logo} />
        <Contact>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="dropdown  ">
              <p
                className="btn  dropdown-togglem m-0 "
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <svg
                  fill="#000000"
                  width="24px"
                  height="24px"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                >
                  <path d="M854.4 800.9c.2-.3.5-.6.7-.9C920.6 722.1 960 621.7 960 512s-39.4-210.1-104.8-288c-.2-.3-.5-.5-.7-.8-1.1-1.3-2.1-2.5-3.2-3.7-.4-.5-.8-.9-1.2-1.4l-4.1-4.7-.1-.1c-1.5-1.7-3.1-3.4-4.6-5.1l-.1-.1c-3.2-3.4-6.4-6.8-9.7-10.1l-.1-.1-4.8-4.8-.3-.3c-1.5-1.5-3-2.9-4.5-4.3-.5-.5-1-1-1.6-1.5-1-1-2-1.9-3-2.8-.3-.3-.7-.6-1-1C736.4 109.2 629.5 64 512 64s-224.4 45.2-304.3 119.2c-.3.3-.7.6-1 1-1 .9-2 1.9-3 2.9-.5.5-1 1-1.6 1.5-1.5 1.4-3 2.9-4.5 4.3l-.3.3-4.8 4.8-.1.1c-3.3 3.3-6.5 6.7-9.7 10.1l-.1.1c-1.6 1.7-3.1 3.4-4.6 5.1l-.1.1c-1.4 1.5-2.8 3.1-4.1 4.7-.4.5-.8.9-1.2 1.4-1.1 1.2-2.1 2.5-3.2 3.7-.2.3-.5.5-.7.8C103.4 301.9 64 402.3 64 512s39.4 210.1 104.8 288c.2.3.5.6.7.9l3.1 3.7c.4.5.8.9 1.2 1.4l4.1 4.7c0 .1.1.1.1.2 1.5 1.7 3 3.4 4.6 5l.1.1c3.2 3.4 6.4 6.8 9.6 10.1l.1.1c1.6 1.6 3.1 3.2 4.7 4.7l.3.3c3.3 3.3 6.7 6.5 10.1 9.6 80.1 74 187 119.2 304.5 119.2s224.4-45.2 304.3-119.2a300 300 0 0 0 10-9.6l.3-.3c1.6-1.6 3.2-3.1 4.7-4.7l.1-.1c3.3-3.3 6.5-6.7 9.6-10.1l.1-.1c1.5-1.7 3.1-3.3 4.6-5 0-.1.1-.1.1-.2 1.4-1.5 2.8-3.1 4.1-4.7.4-.5.8-.9 1.2-1.4a99 99 0 0 0 3.3-3.7zm4.1-142.6c-13.8 32.6-32 62.8-54.2 90.2a444.07 444.07 0 0 0-81.5-55.9c11.6-46.9 18.8-98.4 20.7-152.6H887c-3 40.9-12.6 80.6-28.5 118.3zM887 484H743.5c-1.9-54.2-9.1-105.7-20.7-152.6 29.3-15.6 56.6-34.4 81.5-55.9A373.86 373.86 0 0 1 887 484zM658.3 165.5c39.7 16.8 75.8 40 107.6 69.2a394.72 394.72 0 0 1-59.4 41.8c-15.7-45-35.8-84.1-59.2-115.4 3.7 1.4 7.4 2.9 11 4.4zm-90.6 700.6c-9.2 7.2-18.4 12.7-27.7 16.4V697a389.1 389.1 0 0 1 115.7 26.2c-8.3 24.6-17.9 47.3-29 67.8-17.4 32.4-37.8 58.3-59 75.1zm59-633.1c11 20.6 20.7 43.3 29 67.8A389.1 389.1 0 0 1 540 327V141.6c9.2 3.7 18.5 9.1 27.7 16.4 21.2 16.7 41.6 42.6 59 75zM540 640.9V540h147.5c-1.6 44.2-7.1 87.1-16.3 127.8l-.3 1.2A445.02 445.02 0 0 0 540 640.9zm0-156.9V383.1c45.8-2.8 89.8-12.5 130.9-28.1l.3 1.2c9.2 40.7 14.7 83.5 16.3 127.8H540zm-56 56v100.9c-45.8 2.8-89.8 12.5-130.9 28.1l-.3-1.2c-9.2-40.7-14.7-83.5-16.3-127.8H484zm-147.5-56c1.6-44.2 7.1-87.1 16.3-127.8l.3-1.2c41.1 15.6 85 25.3 130.9 28.1V484H336.5zM484 697v185.4c-9.2-3.7-18.5-9.1-27.7-16.4-21.2-16.7-41.7-42.7-59.1-75.1-11-20.6-20.7-43.3-29-67.8 37.2-14.6 75.9-23.3 115.8-26.1zm0-370a389.1 389.1 0 0 1-115.7-26.2c8.3-24.6 17.9-47.3 29-67.8 17.4-32.4 37.8-58.4 59.1-75.1 9.2-7.2 18.4-12.7 27.7-16.4V327zM365.7 165.5c3.7-1.5 7.3-3 11-4.4-23.4 31.3-43.5 70.4-59.2 115.4-21-12-40.9-26-59.4-41.8 31.8-29.2 67.9-52.4 107.6-69.2zM165.5 365.7c13.8-32.6 32-62.8 54.2-90.2 24.9 21.5 52.2 40.3 81.5 55.9-11.6 46.9-18.8 98.4-20.7 152.6H137c3-40.9 12.6-80.6 28.5-118.3zM137 540h143.5c1.9 54.2 9.1 105.7 20.7 152.6a444.07 444.07 0 0 0-81.5 55.9A373.86 373.86 0 0 1 137 540zm228.7 318.5c-39.7-16.8-75.8-40-107.6-69.2 18.5-15.8 38.4-29.7 59.4-41.8 15.7 45 35.8 84.1 59.2 115.4-3.7-1.4-7.4-2.9-11-4.4zm292.6 0c-3.7 1.5-7.3 3-11 4.4 23.4-31.3 43.5-70.4 59.2-115.4 21 12 40.9 26 59.4 41.8a373.81 373.81 0 0 1-107.6 69.2z" />
                </svg>{" "}
                {t("lenguage")}
              </p>

              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                {lenguage.map(({ code, name, flag }) => {
                  return (
                    <li
                      className="Dropdawn"
                      key={code}
                      onClick={() => {
                        i18next.changeLanguage(code);
                      }}
                      style={{
                        opacity: code === currentLenguageCode ? 0.6 : 1,
                        cursor: "pointer",
                        paddingLeft: "20px"
                      }}
                    >
                      {<span className={`fi fi-${flag}`}></span>} {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <LinkR
              className="text-decoration-none text-dark"
              to="tel:+998906066666"
            >
              +998 (90)-606-66-66
            </LinkR>
          </div>
          <Button>
            <a
              href="#club-3d"
              className="navbarText text-decoration-none text-light"
            >
              {t("navbar.button")}
            </a>
          </Button>
        </Contact>
      </WrapperLogo>
      <Links>
        {navbar.map(({ name, path, id, hidden }, index) => {
          return (
            <Link
              className="navbarText fw-bold"
              onClick={() =>
                path === null
                  ? window.open("https://prowellness.uz/", "__blank")
                  : navigate(`${path}`)
              }
              key={id}
            >
              {currentLenguageCode === "uz"
                ? uzb[index]
                : !hidden
                ? name
                : null}
            </Link>
          );
        })}
      </Links>
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default Navbar;
