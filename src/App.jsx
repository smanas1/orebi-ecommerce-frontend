import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Menu />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
