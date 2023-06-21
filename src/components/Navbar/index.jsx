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
        <div></div>
        <Logo onClick={() => navigate("/")} src={logo} />
        <Contact>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="dropdown  ">
              <p
                className="btn  dropdown-togglem m-0 fw-bold"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
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
                        paddingLeft: "20px",
                      }}
                    >
                      {<span className={`fi fi-${flag}`}></span>} {name}
                    </li>
                  );
                })}
              </ul>
            </div>
            <LinkR
              className="text-decoration-none text-dark fw-bold"
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
