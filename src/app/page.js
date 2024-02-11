import Benefits from "../../components/Benefits";
import ChoosePlan from "../../components/ChoosePlan";
import Client from "../../components/Client";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Nav from "../../components/Nav"
import Support from "../../components/Support";

export default function Home() {
  return (
   <>
    <Nav/>
    <Hero/>
    <Client/>
    <Support/>
    <Features/>

    <Benefits/>
    <ChoosePlan/>
    <Footer/>
   </>
  );
}
