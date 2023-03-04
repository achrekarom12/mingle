import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/light.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher.js"; 
import Footer from "components/footers/SimpleFiveColumn";
import FAQ from "components/faqs/SimpleWithSideImage";

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <Pricing />
      <FAQ />
      <Footer/>
    </AnimationRevealPage>
  );
};
