import React from "react";
import HeroSlider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import ClassVest from "../components/ClassVest";
import OurTeam from "../components/OurTeam";
import CostVest from "../components/CostVest";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import { Helmet } from "../components/Helmet";
import Reviews from "../components/Reviews";
import { Api } from "../services/api";
import { useTrans } from "../hooks/useTrans";
import VideoBlock from "../components/VideoBlock";
import Details from "../components/Details";
import Everyday from "../components/Everyday";


export default function Home() {

  const { trans } = useTrans();

  return (
    <div>
      <Helmet
        customTitle="Mercy Vest"
        description="share_text"
        image="images/logo/Logo.png"
      />
      <HeroSlider />
      <VideoBlock />
      <AboutUs />
      <ClassVest />
      <CostVest />
      <Everyday />
      <Reviews />
      <Details />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}
