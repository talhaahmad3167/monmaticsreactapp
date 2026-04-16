export default function Contactus() {
  return (
    <div className="row mt-5">
      <div className="col-12 col-lg-6 px-3 px-lg-5">
        <h1 className="my-heading">
          Join The #1 Most Powerful And All-In-One Cloud ERP Software
        </h1>
        <p className="my-paragraph">
          Monmatics ERP empowers your business with precise, real-time
          reporting, helping you streamline operations, maximize profitability,
          and stay ahead with confidence. Discover More
        </p>
        <button className="discover-btn">
          Discover More <span className="arrow">→</span>
        </button>
        <div className="logo-row">
          <img src="assets/capterra-4mq1m9fi.png" alt="Logo" />
          <img src="assets/google1-CUgERZ93.png" alt="Logo" />
          <img src="assets/trustpilot-B7xotUt2.png" alt="Logo" />
        </div>
      </div>

      {/* ///////////////////////////////////////////////// */}
      <div className="col-md-6 p-5">
        <div
          className="d-flex justify-content-center align-items-center p-5"
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
            <div className="text-start">
              <h2 className="text-2xl text-blue-900 font-semibold mb-1">
                Contect Us
              </h2>
              <p>Let's book an appointment</p>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Phone Number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Your Service"
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="What Your Messege About?"
                  rows="3"
                ></textarea>
              </div>

              <button className="w-100 sendmessegebtn">
                Send A Messege<span className="arrow">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
