import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../sections";
import BackToTopButton from "../components/BackToTopButton";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <BackToTopButton />
    </>
  );
};

export default PageLayout;
