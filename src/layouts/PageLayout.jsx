import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Footer } from "../sections";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
