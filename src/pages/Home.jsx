import Layout from "../components/Layout";
import "../assets/pages/home.css";

import HomeContactus from "../home/Contactus.jsx";
import Dashboardimage from "../home/Dashboardimage.jsx";
import FeelyourB from "../home/FeelyourB.jsx";
import Trustedby from "../home/Trustedby.jsx";
import TextLeft from "../home/TextLeft.jsx";
import FeelyourData from "../home/FeelyourData.jsx";
import WhatOurClients from "../home/WhatOurClients.jsx";
import Tailored from "../home/Tailored.jsx";

export default function Home() {
  return (
    <>
      <Layout>
        <div>
          <div className="main-layout">
            {/* contact us page end */}
            <HomeContactus />
            {/* Dashboard Image */}
            <Dashboardimage />
          </div>
          <div class="content-section">
            {/* Feel Your Buisnes Grouth */}
            <FeelyourB />
            {/* Trusted by multiple world-class brands */}
            <Trustedby />
            {/* Text Left Side */}
            <TextLeft />
            {/* Fueled by Data */}
            <FeelyourData/>

            {/* What Our Clients */}

            <WhatOurClients/>
            {/* Tailored */}
            <Tailored/>
            
          </div>
        </div>
      </Layout>
    </>
  );
}
