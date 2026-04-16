

function Card({ item }) {
  return (
    <div className="erp-card">
      <div className="erp-card-img">
        <img src={item.img} alt={item.title} />
      </div>
      <div className="erp-card-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <button className="learnmore">
          Learn More <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default function FeelyourB() {
  const cards = [
    {
      title: "Accounting",
      img: "assets/accountingIcon-DTkGKPIV.png",
      desc: "Streamline your financial operations with the best ERP system in Pakistan, featuring a powerful Accounts module to maintain accurate records, and generate insightful financial reports.",
    },

    {
      title: "CRM",
      img: "assets/crmIcon-BwPu75Xs.png",
      desc: "Enhance customer engagement and streamline sales processes with the best ERP system in Pakistan, featuring a fully integrated CRM tailored to your business needs.",
    },
    {
      title: "HR Management",
      img: "assets/hrmIcon-CPyfGLrL.png",
      desc: "Manage employee data, payroll, attendance, and performance effortlessly with the best ERP system in Pakistan, featuring a HR module for seamless and efficient workforce management.",
    },

    {
      title: "Ticketing",
      img: "assets/ticketingIcon-BCHrFwKL.png",
      desc: "Enhance customer support with the best ERP system in Pakistan, managing queries, tracking issue resolutions, and response times through an organized and automated support workflow.",
    },
    {
      title: "Document Manager",
      img: "/assets/documentManagerImg-jU0Ae7zs.png",
      desc: "Securely store, organize, and manage business documents with the best ERP system in Pakistan, offering seamless access control, version tracking, and effortless team collaboration.",
    },
    {
      title: "Supply Chain ERP",
      img: "/assets/SupplyChainImg-TSHQTj-b.png",
      desc: "Optimize your procurement, inventory, and distribution with the best ERP system in Pakistan, real time insights, reducing costs, and enhancing efficiency through automated supply chain.",
    },

  ];

  return (
    <>
      <div className="mt-5 p-5">
        <h2 className="feelbusinestext">
          Fuel Your Business Growth with <br />
          Monmatics ERP
        </h2>
        <p>
          Streamline your entire business operations—from finance and sales{" "}
          <br />
          to inventory and project management—with our all in one ERP solution
        </p>
      </div>
      
      {/* Modules Define */}
      <div>
        <div className="row">
          {cards.map((card) => (
            <div className="col-md-4 mt-5" key={card.title}>
              <Card item={card} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
