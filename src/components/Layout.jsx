import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Layout({ children }) {
  return (
    <>
      <div
        style={{ background: "#F3F4F6", minHeight: "100vh", display: "flex" }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
          }}
        >
          <Navbar />
        </div>
        {/* Sidebar + Main */}
        <div style={{ marginTop: "70px" }}>
          {/* <Sidebar /> */}
          <main style={{}}>{children}</main>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <Footer />
      </div>
    </>
  );
}
