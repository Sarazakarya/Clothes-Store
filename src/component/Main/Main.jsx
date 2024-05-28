import React from "react";
import NavBar from "../NavBar/NavBar";
import Slider from "../Slider/Slider";
import NavigationBtn from "../NavigationBtn/NavigationBtn";
import ProductSection from "../ProductSection/ProductSection";
import Footer from "../Footer/Footer";

export default function Main() {
  return (
    <div>
      <NavBar />
      <Slider />
      <NavigationBtn />
      <ProductSection />
      <Footer />
    </div>
  );
}
