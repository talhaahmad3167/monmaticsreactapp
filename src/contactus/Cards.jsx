function Icon({ paths }) {
  if (!Array.isArray(paths)) return null;
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        style={{
          width: "25px",
          height: "25px",
          color: "#1e3a8a",
        }}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    </>
  );
}

function Card({ item }) {
  return (
    <>
      <div className="cards">
        <div className="cards-img mt-4">
          <Icon paths={item.icon} />
        </div>
        <div className="cards-body">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
          <button className="learnmore">{item.btnname}</button>
        </div>
      </div>
    </>
  );
}

export default function Cards() {
  const cards = [
    {
      title: "Product & Sales Support",
      icon: [
        "M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z",
      ],
      desc: "Nisl nullam nibh dis nunc at consequat ipsum efficitur primis taciti rutrum.",
      btnname: "Send Ticket",
    },
    {
      title: "Technical Support",
      icon: [
        "M2.25 5.25a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3V15a3 3 0 0 1-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 0 1-.53 1.28h-9a.75.75 0 0 1-.53-1.28l.621-.622a2.25 2.25 0 0 0 .659-1.59V18h-3a3 3 0 0 1-3-3V5.25Zm1.5 0v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5Z",
      ],
      desc: "Nisl nullam nibh dis nunc at consequat ipsum efficitur primis taciti rutrum.",
      btnname: "Contact Sales",
    },
    {
      title: "Schedule a Meeting",
      icon: [
        "M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z",
        "M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z",
      ],
      desc: "Nisl nullam nibh dis nunc at consequat ipsum efficitur primis taciti rutrum.",
      btnname: "Shedule Now",
    },
  ];
  return (
    <>
      <div>
        <div className="row mt-5">
          {cards.map((card) => (
            <div className="col-md-4" key={card.title}>
              <Card item={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}