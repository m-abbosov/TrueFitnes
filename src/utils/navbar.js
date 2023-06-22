/* eslint-disable no-const-assign */
import React from "react";
import HomePage from "../pages/Home";
import OpenClub from "../pages/OpenClub";
import AdvantagesPage from "../pages/Advantages";
import ContactPage from "../pages/Contact";
import Brand from "../pages/Brend";

export const navbar = [
  {
    id: 1,
    path: "/",
    name: "Home",
    hidden: true,
    Element: <HomePage />,
    search: "?",
  },
  {
    id: 2,
    path: "/brend",
    name: "O бренде",
    hidden: false,
    Element: <Brand />,
    search: "?",
  },
  {
    id: 6,
    path: null,
    name: "продукции",
    hidden: false,
    Element: <Brand />,
    search: "?",
  },
  {
    id: 3,
    path: "/advantages",
    name: "Преимущества ",
    hidden: false,
    Element: <AdvantagesPage />,
    search: "?",
  },
  {
    id: 4,
    path: "/openclub",
    name: "Oткрыть клуб",
    hidden: false,
    Element: <OpenClub />,
    search: "?",
  },
  {
    id: 5,
    path: "/contact",
    name: "контакты",
    hidden: false,
    Element: <ContactPage />,
    search: "?",
  },
];
