import "../assets/layoutcssfile/contact.css";
export default function Contactheader() {
  return (
    <>
      <div className="contact-header">
        <div className="grid-bg">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="grid-box"></div>
          ))}
        </div>
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-desc">
          Start the conversation to establish good relationships <br /> and
          business.
        </p>
      </div>
    </>
  );
}
