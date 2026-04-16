import "../assets/layoutcssfile/footer.css";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#F3F4F6",
        color: "white",
        textAlign: "center",
        padding: "15px",
        marginTop: "auto",
      }}
    >
      <div className="card border-0" style={{ background: "#F3F4F6" }}>
        <div className="row">
          {/* LEFT SIDE (half page) */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <div className="text-start ms-3">
                  <h3 className="apps-title">Apps & Features</h3>
                  <ul>
                    <li>Finance</li>
                    <li>CRM</li>
                    <li>HRM</li>
                    <li>Ticketing System</li>
                    <li>Document Manager</li>
                    <li>Supply Chain</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-start ms-3">
                  <h3 className="apps-title">Industries</h3>
                  <ul>
                    <li>Retail ERP</li>
                    <li>Distribution ERP</li>
                    <li>Manufacturing ERP</li>
                    <li>Education ERP</li>
                    <li>Non Profit Organization</li>
                    <li>Logistics & Cargo</li>
                    <li>Healthcare ERP</li>
                  </ul>
                </div>
              </div>

              <div className="col-md-4">
                <div className="text-start ms-3">
                  <h3 className="apps-title">Support</h3>
                  <ul>
                    <li>Help Center</li>
                    <li>Ticket Support</li>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Community</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <p style={{ fontSize: "20px", color: "#1e3a8a" }}>
              Sign up for our newsletter to get updates, information, news, and
              free insights.
            </p>

            <div className="input-group mt-3">
              <input
                type="email"
                className="form-control form-control"
                placeholder="Enter your email"
              />
              <button
                className="btn"
                style={{
                  backgroundColor: "#1e3a8a",
                  borderColor: "#1e3a8a",
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                </svg>
                Sign Up
              </button>
            </div>
            <div className="mt-3 d-flex gap-3" style={{ marginLeft: "10px" }}>
              <a href="#" style={{ color: "#1e3a8a", fontSize: "20px" }}>
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="#" style={{ color: "#1e3a8a", fontSize: "20px" }}>
                <i className="bi bi-facebook"></i>
              </a>

              <a href="#" style={{ color: "#1e3a8a", fontSize: "20px" }}>
                <i className="bi bi-twitter-x"></i>
              </a>

              <a href="#" style={{ color: "#1e3a8a", fontSize: "20px" }}>
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", padding: "20px 0" }}>
  <div style={{ flex: 1, borderTop: "1px solid #d1d5db" }}></div>
</div>

      <div className="row">
        <div className="col-md-6">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img
              src="assets/site logo-bm16FFqM.png"
              alt="Logo"
              style={{ height: "25px", marginLeft: "20px", marginTop: "20px" }}
            />

            <p
              style={{
                color: "#111827",
                marginTop: "40px",
                marginLeft: "10px",
              }}
            >
              Copyright © {new Date().getFullYear()} Monmatics, All rights
              reserved.
            </p>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "20px",
              paddingRight: "20px",
            }}
          >
            <a href="#" style={{ color: "#374151", textDecoration: "none" }}>
              Privacy Policy
            </a>

            <a href="#" style={{ color: "#374151", textDecoration: "none" }}>
              Terms of Service
            </a>

            <a href="#" style={{ color: "#374151", textDecoration: "none" }}>
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
