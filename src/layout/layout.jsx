import { Outlet } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import ChatBot from "../components/ChatBot";

const Layout = () => {
  return (
    <div className="layout-container" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <main className="content" style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
      <ChatBot /> {/* <-- SIEMPRE visible en toda la app */}
    </div>
  );
};

export default Layout;
