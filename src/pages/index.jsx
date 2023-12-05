import React, { useContext } from "react";
import { PageStateContext } from "../context/PageState";
import DefaultPage from "../components/DefaultPage";
import AboutMePage from "../components/AboutMePage";
import ExperiencePage from "../components/ExperiencePage";
import ContactPage from "../components/ContactPage";

const Home = () => {
  const { pageState } = useContext(PageStateContext);
  return (
    <div style={{ height: "calc(100vh - 80px)" }}>
      {pageState === "default" && <DefaultPage />}
      {pageState === "about-me" && <AboutMePage />}
      {pageState === "experience" && <ExperiencePage />}
      {pageState === "contact" && <ContactPage />}
    </div>
  );
};

export default Home;
