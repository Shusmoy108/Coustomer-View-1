import React from "react";
import ExppertBlock from "../components/expertblock/expert";
import FeaturedBox from "../components/featuredbox/featuredbox";
import Filter from "../components/filter/filter";
import FilterBlock from "../components/filter/filterblock";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import SubscribeBlock from "../components/subscribe/subscribe";
import WhyBlock from "../components/whybox/why";

export default function HomePage() {
  return (
    <div style={{ background: "#F2F2F2" }}>
      <Header />
      <FilterBlock />
      <FeaturedBox />
      <WhyBlock />
      <ExppertBlock />
      <SubscribeBlock />
      <Footer />
    </div>
  );
}
