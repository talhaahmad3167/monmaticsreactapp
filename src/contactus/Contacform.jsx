export default function Contacform() {
  return (
    <>
      <div>
        <div className="cotactform">
          <div
            className="card"
            style={{
                width: "90%",
                margin: "0 auto",
                maxHeight: "95vh",
                padding: "30px",
                boxSizing: "border-box"
              }}
          >
            <p>Send us a message</p>
            <h2>Don’t hesitate to contact us for more information.</h2>
            <div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="Email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="mb-3">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                    >
                      {" "}
                    </textarea>
                  </div>
                </div>
              </div>

              <button className="w-100 mt-3 register-btn">SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
