import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImageWithCenteredContent.js";
import Blog from "components/blogs/ThreeColSimpleWithImage.js";
import FAQ from "components/faqs/SimpleWithSideImage";
import ContactUsForm from "components/forms/SimpleContactUs.js";
import Pricing from "components/pricing/TwoPlansWithDurationSwitcher"
import Footer from "components/footers/SimpleFiveColumn.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
    <Blog />
    <FAQ/>
    <ContactUsForm />
    <Pricing />
    <Footer />
  </AnimationRevealPage>
);
