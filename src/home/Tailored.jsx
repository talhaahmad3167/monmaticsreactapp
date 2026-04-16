function Tailcard({ item }) {
  return (
    <>
      <div className="taicard">
        <div className="tailcard-img">
            <img src={item.img} alt={item.title} />
        </div>
        <div className="tailcard-body p-3">
          <h3 className="mt-3">{item.title}</h3>
          <p>{item.desc}</p>
          <button className="learnmore mt-5 mb-3">
            Contact Us <span className="arrow">→</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default function Tailored() {
    const Tailcards=[
        {
            title:'Startup',
            img:"assets/Startup-DaHit90N.png",
            desc:'Gain complete control over your finances, projects, and customer relationships with the best ERP system in Pakistan, automating processes and enabling growth without operational bottlenecks.',
        },
        {
            title:'Small Business',
            img:"assets/Small_MicroBusiness-CgosLv7V.png",
            desc:'Simplify inventory, sales, and HR automating processes with the best ERP system in Pakistan, a cloud based solution that helps small businesses operate efficiently with real time insights and automation.',
        },
        {
            title:'Enterprise',
            img:"assets/MediumEnterprise-xxUVLnL6.png",
            desc:'Optimize your business processes with the best ERP system in Pakistan, featuring advanced reporting, CRM, and financial management tools that enable seamless collaboration across departments.',
        },
        {
            title:'Multi-Branch',
            img:"assets/MultiBranch-D_a89dz1.png",
            desc:'Manage multiple locations with the best ERP system in Pakistan, featuring centralized data, automated workflows, and real time analytics to ensure consistency and efficiency across all branches',
        },
    ]
  return (
      <>
      <div className="row">
        <div className="col-md-12">
          <div className="split-bg">
            <h1
              style={{
                textAlign: "center",
                fontSize: "50px",
                color: "white",
                paddingTop: "50px",
              }}
            >
              Tailored ERP Solutions for Every Stage of Business <br /> Growth
            </h1>
            <p style={{ color: "white" }}>
              Monmatics ERP is designed to streamline operations, enhance
              productivity, and scale with your business,
              <br /> whether you’re a startup, small enterprise, or multi branch
              organization.
            </p>

            <div>
              <div className="row">
                {Tailcards.map((card)=>(
                <div className="col-md-3"key={card.title}><Tailcard item={card} /></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
