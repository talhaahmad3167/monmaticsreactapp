import { useEffect, useRef, useState } from "react";

// ✅ Card Component
function Wocard({ item }) {
  return (
    <div className="woccard">
      <div className="woccard-img">
        <img src="assets/personeimage/29.png" alt="" />
      </div>
      <div className="woc-card-body">
        <p>{item.desc}</p>
        <h3>{item.title}</h3>
        <div className="stars">
          {renderStars(item.star)}
        </div>
       <p>{item.company}</p>
      </div>
    </div>
  );
}

function renderStars(count) {
  const totalStars = 5;

  return Array.from({ length: totalStars }, (_, i) => (
    <svg
      key={i}
      width="18"
      height="18"
      viewBox="0 0 576 512"
      fill={i < count ? "#f5b50a" : "#e4e5e9"}
      style={{ marginRight: "3px" }}
    >
      <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>
  ));
}
// ✅ Main Component
export default function WhatOurClients() {
  const [index, setIndex] = useState(0);

  const intervalRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);

  const wocards = [
    {
      desc: "The Monmatics Accounting module has simplified our financial management with clear cash flow views and reliable automation features.",
      title: "Erica White",
      company: "CMC",
      star: 3,
    },
    {
      desc: "The Monmatics Accounting module has simplified our financial management with clear cash flow views and reliable automation features.",
      title: "Ali Khan",
      company: "XYZ",
      star: 5,
    },
    {
      desc: "The Monmatics Accounting module has simplified our financial management with clear cash flow views and reliable automation features.",
      title: "Sara Khan",
      company: "Tech",
      star: 4,
    },
    {
      desc: "The Monmatics Accounting module has simplified our financial management with clear cash flow views and reliable automation features.",
      title: "John Doe",
      company: "ABC",
      star: 5,
    },
    {
      desc: "The Monmatics Accounting module has simplified our financial management with clear cash flow views and reliable automation features.",
      title: "David",
      company: "Soft",
      star: 2,
    },
  ];

  const visibleCards = 3;
  const maxIndex = Math.max(wocards.length - visibleCards, 0);

  // ✅ Auto Slide
  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [maxIndex]);

  // ✅ Mouse Drag
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;

    const diff = e.clientX - startX.current;

    if (diff > 50 && index > 0) {
      setIndex((prev) => prev - 1);
    } else if (diff < -50 && index < maxIndex) {
      setIndex((prev) => prev + 1);
    }

    isDragging.current = false;
  };

  return (
    <div className="mt-5">
      <div className="mt-5" style={{ backgroundColor: "#F3F4F6" }}>
        <h2
          style={{
            fontSize: "30px",
            fontWeight: "700",
            lineHeight: "1.2",
            marginBottom: "20px",
          }}
        >
          What Our Clients Say
        </h2>
      </div>

      <div
        className="woc-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseEnter={() => clearInterval(intervalRef.current)}
        onMouseLeave={startAutoSlide}
      >
        <div
          className="woc-slider"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
          }}
        >
          {wocards.map((card, i) => (
            <div className="woc-slide" key={i}>
              <Wocard item={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
