import React from "react";
// import { Helmet } from "react-helmet";
import SectionFaq from "../components/section-faq";
import {
  SectionOne,
  SectionTwo,
  SectionThree,
  SectionFour,
  SectionFive,
  SectionSix,
  SectionSeven,
  OurWork,
  Testimonials,
  Footer
} from "../components";
import { AccessProvider } from "../contexts/access";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Seo from "../components/seo";
import image from "../images/black-logo.png";
import whatsapp from "../images/WhatsApp-Logo.png"
// import Menu from "../components/menu";
const IndexPage = ({ location }) => {
  const metaImage = {
    src: image,
    width: 512,
    height: 512,
  };

  return (
    <div>
      {/* <Helmet
        htmlAttributes={{
          lang: "nl",
        }}
      >
        <meta charSet="utf-8" />
        <title>Laforga | Shopify Agency</title>
        <link rel="canonical" href="https://www.laforga.nl" />
      
      </Helmet> */}
      <Seo
        lang="nl"
        image={metaImage}
        title="Laforga | E-commerce Agency"
        pathname={location.pathname}
      />
      <AccessProvider>
        <div className="whatsapp-contact">
        <a href="https://api.whatsapp.com/send?phone=+31628340312">
          <img src={whatsapp} />
          </a>
        </div>
        <SectionOne />
        <SectionTwo />
        <OurWork />
        <SectionFive />
        <SectionFour />
        <SectionThree />

        <SectionSix />
        <SectionSeven />
<SectionFaq />
        <Testimonials />
        <Footer />
      </AccessProvider>
    </div>
  );
};

export default IndexPage;
