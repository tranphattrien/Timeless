import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categorise from "../components/Categorise";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categorise />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
