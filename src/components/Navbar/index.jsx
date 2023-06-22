/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Logo,
  Wrapper,
  WrapperLogo,
  Contact,
  Button,
  Links,
  Link,
  Menu,
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
  "Brend Haqida",
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
        <Menu>
          <a
            className="btn"
            data-bs-toggle="offcanvas"
            href="#offcanvasExample"
            role="button"
            aria-controls="offcanvasExample"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div className="offcanvas-header">
              <Logo onClick={() => navigate("/")} src={logo} />
              <button
                type="button"
                className="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div className="text-center">
                <Links mobile={true}>
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
                <LinkR
                  className="text-decoration-none text-dark fw-bold"
                  to="tel:+998906066666"
                >
                  +998 (90)-606-66-66
                </LinkR>
              </div>
            </div>
          </div>
        </Menu>
        <Logo onClick={() => navigate("/")} src={logo} />
        <Contact>
          <div className="d-flex w-100 justify-content-between align-items-center">
            <div className="dropdown ">
              <p
                className="btn d-flex gap-1 align-items-center dropdown-togglem m-0 fw-bold"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {<span className={`fi fi-${currentLenguageCode}`}></span>}
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
              className="displayNone text-decoration-none text-dark fw-bold"
              to="tel:+998906066666"
            >
              +998 (90)-606-66-66
            </LinkR>
          </div>
          <Button className="displayNone">
            <a
              href="#club-3d"
              className="navbarText text-decoration-none text-light"
            >
              {t("navbar.button")}
            </a>
          </Button>
        </Contact>
      </WrapperLogo>
      <Links mobile={!true}>
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
