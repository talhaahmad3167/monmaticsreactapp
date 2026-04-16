import Layout from "../components/Layout";
import Contactheader from "../contactus/Contactheader";
import Cards from "../contactus/Cards";
import Location from "../contactus/Location.jsx";
import Contacform from "../contactus/Contacform.jsx";
export default function Contact() {
  return (
    <Layout>
      <div>
        {/* Contact Header */}
        <Contactheader />
        {/* Cards */}
        <Cards/>
        {/* Location */}
        <Location/>
        {/* Contacform */}
        <Contacform/>
        <div style={{ marginTop:"200px",height:"300px"}}>
            <h2>Take Control of Your Business</h2>
            <p>Take control of your business with the right tools and expert support.</p>
            <button className=" mt-3 register-btn">Discover more</button>
        </div>
      </div>
    </Layout>
  );
}
