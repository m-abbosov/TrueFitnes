import { Routes, Route } from "react-router-dom";
import { Wrapper } from "./style";
import { navbar } from "../utils/navbar";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map(({ id, hidden, path, Element }) => {
            return  <Route key={id} path={path} element={Element} />;
          })}
        </Route>
        <Route path="*" element={<h2>Not Faund</h2>} />
      </Routes>
    </Wrapper>
  );
};

export default Root;
