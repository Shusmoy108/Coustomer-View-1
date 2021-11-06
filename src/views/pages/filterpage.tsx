import Header from "../components/header/header";
import React from "react";
import Footer from "../components/footer/footer";
import FilterNav from "../components/filternav/filternav";
import FilterBody from "../components/filterbody/filterbody";
import FilterHead from "../components/filterhead/filterhead";
export default function FilterPage() {
  return (
    <div style={{ background: "#F2F2F2" }}>
      <Header />
      <FilterNav />
      <FilterHead />
      <FilterBody />
      {/* <FilterBlock />
      <FeaturedBox />
      <WhyBlock />
      <ExppertBlock />
      <SubscribeBlock /> */}

      <Footer />
    </div>
  );
}
