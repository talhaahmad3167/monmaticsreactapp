export default function TextLeft()
{
    return (
        <>
       <div
              style={{
                height: "550px",
                display: "flex",
                alignItems: "center",
                padding: "50px",
                borderRadius: "12px",
                color: "#fff",

                // 👇 THIS is the key (blue overlay + image together)
                backgroundImage:
                  "linear-gradient(90deg, rgba(0, 70, 180, 0.85) 30%, rgba(0, 70, 180, 0.2) 60%, rgba(0,0,0,0) 100%), url('/assets/20.png')",

                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              
              <div style={{ maxWidth: "600px", textAlign: "left" }}>
                <h2
                  style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    lineHeight: "1.2",
                    marginBottom: "20px",
                  }}
                >
                  Fueled by Data, Driven by Monmatics: Your Business’ Digital
                  Transformation
                </h2>

                <p style={{ fontSize: "16px", opacity: 0.9 }}>
                  Unlock the power of data with Monmatics — transforming the way
                  you manage, analyze, and grow your business. Experience
                  seamless digital transformation built for efficiency, insight,
                  and success.
                </p>
                <button
                  style={{
                    marginTop: "20px",
                    padding: "12px 24px",
                    backgroundColor: "#white",
                    color: "#0046b4",
                    border: "none",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                  onClick={() => console.log("Discover More clicked")}
                >
                  Discover More
                </button>
              </div>
            </div>
        </>
    );
}