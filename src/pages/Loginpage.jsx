import { useState } from "react";
import Layout from "../components/Layout";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

export default function Loginpage() {
  const [activeTab, setActiveTab] = useState("login");
  const [phone, setPhone] = useState("");

  return (
    <Layout>
      <div style={{ marginLeft: "600px" }}>
        <div
          className="d-flex justify-content-center align-items-center mt-2"
          style={{ height: "80vh" }}
        >
          <div
            className="card p-4 shadow"
            style={{
              width: "450px",
              borderRadius: "20px",
              background: "#DBEAFE",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.10)",
            }}
          >
            {/* Tabs */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  border: "1px solid #1e3a8a",
                  borderRadius: "50px",
                  overflow: "hidden",
                }}
              >
                <button
                  onClick={() => setActiveTab("login")}
                  style={{
                    width: "120px",
                    padding: "8px 16px",
                    border: "none",
                    backgroundColor:
                      activeTab === "login" ? "#1e3a8a" : "black",
                    color: activeTab === "login" ? "white" : "white",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                >
                  Login
                </button>

                <button
                  onClick={() => setActiveTab("register")}
                  style={{
                    width: "120px",
                    padding: "8px 16px",
                    border: "none",
                    backgroundColor:
                      activeTab === "register" ? "#1e3a8a" : "black",
                    color: activeTab === "register" ? "white" : "white",
                    cursor: "pointer",
                    transition: "0.3s ease",
                  }}
                >
                  Register
                </button>
              </div>
            </div>

            {/* LOGIN FORM */}
            {activeTab === "login" && (
              <div className="mt-5">
                <h2 className="text-2xl text-blue-900 font-semibold mb-1">
                  Welcome Back
                </h2>
                <p className="text-primary">Login to your account</p>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <button className="btn btn-primary w-100">Login</button>
              </div>
            )}

            {/* REGISTER FORM */}
            {activeTab === "register" && (
              <div className="mt-4">
                <h2 className="text-start" style={{ color: "#1e3a8a" }}>
                  Create Account
                </h2>
                <p className="text-start" style={{ color: "#1e3a8a" }}>
                  Register to get started
                </p>
                <div className="row mt-1">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter First name"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last name"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Company Name"
                  />
                </div>
                <div className="mt-3">
                  <PhoneInput
                    defaultCountry="pk"
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    containerClass="w-100"
                    inputClass="form-control"
                    inputStyle={{
                      width: "100%",
                      height: "38px",
                      borderRadius: "0.375rem",
                    }}
                  />
                </div>

                <div className="mt-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mt-3">
                  <input
                    type="Password"
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>

                <button className="w-100 mt-3 register-btn">Register</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
