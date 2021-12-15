import React, { useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import "swiper/swiper.scss";
import { navigate } from "gatsby";
import Swiper from "react-id-swiper";
// import "../styles/styles.scss";
const SectionWork = ({ lang }) => {
  const sliderParams = {
    centeredSlides: false,
    slidesPerView: "auto",
  };
  const { maglashic, celestial, fourEditors, delicou, fietsenwinkel, aerial, ilana, morcy, ginelwatches } =
    useStaticQuery(
      graphql`
        query {
          maglashic: file(relativePath: { eq: "work-maglashic.webp" }) {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fourEditors: file(relativePath: { eq: "four-editors-work.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          celestial: file(relativePath: { eq: "celestial.jpeg" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          morcy: file(relativePath: { eq: "morcy.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          ginelwatches: file(relativePath: { eq: "ginel.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          ilana: file(relativePath: { eq: "ilara.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          aerial: file(relativePath: { eq: "aerial2.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          delicou: file(relativePath: { eq: "delicou.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          fietsenwinkel: file(relativePath: { eq: "fietsenwinkel.webp" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 420) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      `
    );
  const bgRef = useRef();
  if (!lang) {
    return (
      <section id="ons-werk" className="study-case-container">
        <h3 className="h2">
          Meest <mark>recente werk</mark>
        </h3>
        <div className="recent-work">
          <div className="recent-work-container">
            <Swiper {...sliderParams}>
              
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={celestial.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/maglashic")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://www.celestialcrystals.store">
                    <h3>Celestial Crystals</h3>
                    <p>
                      {" "}
                      Fashion merk ontworpen in de toekomst met oog voor detail.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={maglashic.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/maglashic")}
              >
                <div className="thumbnail__text">
                  <a href="/maglashic/">
                    <h3>Maglashic</h3>
                    <p>
                      {" "}
                      Maakt wimpers aanbrengen eenvoudiger dan ooit met een
                      natuurlijke look.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={fourEditors.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/four-editors")}
              >
                <div className="thumbnail__text">
                  <a href="/four-editors/">
                    <h3>Four Editors</h3>
                    <p>
                      De meest complete & hoogwaardige bundels voor het editing
                      proces van film.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={morcy.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://morcy-nobasic.com/")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://morcy-nobasic.com/">
                    <h3>Morcy</h3>
                    <p>
                      {" "}
                      Het luxe en exclusieve kledingsmerk made & based in Amsterdam. Designed for class. Loved for fit.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={ilana.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://www.ilana.shop/")}
              >
                <div className="thumbnail__text ">
                  <a href="https://www.ilana.shop/">
                    <h3>Ilana Shop</h3>
                    <p>
                    Huidverzorging met natuurlijke ingredienten.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={ginelwatches.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://www.ginelwatches.com/")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://www.ginelwatches.com/">
                    <h3>Ginelwatches</h3>
                    <p>
                      {" "}
                      Ontdek de luxe horloges van Ginel. Ze staan bekend om kwaliteit en chic.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={fietsenwinkel.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/tm-tweewielers")}
              >
                <div className="thumbnail__text ">
                  <a href="/tm-tweewielers/">
                    <h3>T&M Tweewielers</h3>
                    <p>
                      De grootste scooter & fietsenwinkel van Haarlem met het
                      grootste aanbod!
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={delicou.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                onClick={(e) => navigate("https://eu.deliciou.com/")}
                style={{ cursor: "pointer" }}
              >
                <div className="thumbnail__text">
                  <a href="https://eu.deliciou.com/">
                    <h3>Deliciou</h3>
                    <p>
                      De lekkerste bacon kruiden met als missie om plantaardig koken makkelijk en lekker voor iedereen te maken!
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={aerial.childImageSharp.fluid}
                backgroundColor={`transparent`}
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/aerial-access")}
              >
                <div className="thumbnail__text">
                  <a href="/aerial-access/">
                    <h3>Aerial Access</h3>
                    <p>
                      Aerial Access is in staat op moeilijk toegankelijke
                      locaties werkzaamheden uit te voeren.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              
            </Swiper>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section id="ons-werk" className="study-case-container">
        <h3 className="h2">
          Most <mark>recent work</mark>
        </h3>
        <div className="recent-work">
          <div className="recent-work-container">
            <Swiper {...sliderParams}>
            <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={celestial.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/maglashic")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://www.celestialcrystals.store">
                    <h3>Celestial Crystals</h3>
                    <p>
                      {" "}
                      Fashion brand designed in the future. Wear Celestial and get lost in space with us.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={maglashic.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/en/maglashic")}
              >
                <div className="thumbnail__text">
                  <a href="/en/maglashic">
                    <h3>Maglashic</h3>
                    <p>
                      Makes lash application easier than ever with a natural
                      look.
                    </p>
                  </a>
                </div>
              </BackgroundImage>

              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={fourEditors.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/en/four-editors")}
              >
                <div className="thumbnail__text">
                  <a href="/en/four-editors">
                    <h3>Four Editors</h3>
                    <p>
                      The most complete & high-quality bundles for the editing
                      process of film.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={morcy.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://morcy-nobasic.com/")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://morcy-nobasic.com/">
                    <h3>Morcy</h3>
                    <p>
                      {" "}
                      The luxury fashion brand based & made in Amsterdam. Designed for class. Loved for fit.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={ilana.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://www.ilana.shop/")}
              >
                <div className="thumbnail__text ">
                  <a href="https://www.ilana.shop/">
                    <h3>Ilana Shop</h3>
                    <p>
                    Skin care with natural ingredients.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                ref={bgRef}
                onStartLoad={() =>
                  bgRef.current.selfRef.classList.toggle("loading")
                }
                onLoad={() => bgRef.current.selfRef.classList.toggle("loading")}
                Tag="section"
                className="thumbnail__col"
                fluid={ginelwatches.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("https://www.ginelwatches.com/")}
              >
                <div className="thumbnail__text">
                  <a target="_blank" href="https://www.ginelwatches.com/">
                    <h3>Ginelwatches</h3>
                    <p>
                      {" "}
                    
    Discover the luxury watches from Ginel. They are known for quality and chic.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={fietsenwinkel.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                style={{ backgroundPositionX: "0%", cursor: "pointer" }}
                onClick={(e) => navigate("/en/tm-tweewielers")}
              >
                <div className="thumbnail__text ">
                  <a href="/en/tm-tweewielers">
                    <h3>T&M Tweewielers</h3>
                    <p>
                      The largest scooter & bicycle shop in Haarlem with the
                      largest selection!
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={delicou.childImageSharp.fluid}
                backgroundColor={`transparent`}
                background-position="center"
                onClick={(e) => navigate("https://eu.deliciou.com/")}
                style={{ cursor: "pointer" }}
              >
                <div className="thumbnail__text">
                  <a href="https://eu.deliciou.com/">
                    <h3>Delicou</h3>
                    <p>On a mission to make plant-based cooking easy and delicious for everyone! </p>
                  </a>
                </div>
              </BackgroundImage>
              
              <BackgroundImage
                Tag="section"
                className="thumbnail__col"
                fluid={aerial.childImageSharp.fluid}
                backgroundColor={`transparent`}
                style={{ cursor: "pointer" }}
                onClick={(e) => navigate("/en/aerial-access")}
              >
                <div className="thumbnail__text">
                  <a href="/en/aerial-access">
                    <h3>Aerial Access</h3>
                    <p>
                      Aerial Access is able to perform work in difficult to
                      access locations.
                    </p>
                  </a>
                </div>
              </BackgroundImage>
              
            </Swiper>
          </div>
        </div>
      </section>
    );
  }
};

export default SectionWork;
