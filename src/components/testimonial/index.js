import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Slider from "react-slick";
// import "../../styles/styles.scss";

const LeftArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
    >
      <svg
        width="16"
        height="30"
        viewBox="0 0 16 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.9998 1.6665L1.6665 14.9998L14.9998 28.3332"
          stroke="#134354"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

const RightArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
      onKeyDown={onClick}
      aria-hidden="true"
    >
      <svg
        width="16"
        height="30"
        viewBox="0 0 16 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.00016 28.3335L14.3335 15.0002L1.00016 1.66683"
          stroke="#134354"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <RightArrow />,
  prevArrow: <LeftArrow />,
};

const TestimonialSection = ({ lang }) => {
  if (!lang) {
    return (
      <section className="testimonial-section">
        <Slider {...settings}>
          <div className="slider__item">
            <StaticImage
              src="../../assets/aerialaccess.png"
              alt="aerial access"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Aerial Access</span>
            <p>
              “Enthousiaste agency met inzicht. Heeft voor Aerial Access een
              mooie site ontworpen die volledig voldeed aan onze eisen. Denkt
              mee met het ontwerp vanuit de perspectief van de klant en laat ruimte
              voor eigen ideeën. Fijne samenwerking met oog voor service."
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/four-editors.png"
              alt="four editors partner laforga agency shopify design ecommerce development"
              width={200}
              height={25}
              loading="lazy"
            />
            <span className="h2">Four Editors</span>
            <p>
              “Erg goed geholpen door Laforga. We zaten met wat problemen op de
             en dit werd direct opgelost. Altijd beschikbaar, snel en
              kwalitatief. Thanks!"
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/clientsLogo/maglashic.png"
              alt="maglashic"
              width={200}
              height={50}
              loading="lazy"
            />
            <span className="h2">Maglashic</span>
            <p>
              “Wij zijn zeer tevreden met het resultaat. Laforga luistert goed
              en heeft gevoel voor wat u wilt. Uitstekende service, snel,
              professioneel, creatief, oplossingsgericht, en persoonlijk. Nooit
              te beroerd om die extra stappen te zetten."
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/studio-marinade.svg"
              alt="studio marinade partner laforga agency shopify design ecommerce development"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Marinade Studios</span>
            <p>
              “Wij hebben als design agency een fijne samenwerking ervaren met
              Laforga. Laforga kan goed de Figma designs vertalen naar
              front/back-end, ook geven ze daar waar nodig is goede tips! Ze zijn in staat om
              mee te denken waar wij als designers tekort in schieten. Dat is erg prettig. De communicatie loopt goed en er
              wordt hard gewerkt. Kortom kan ik Laforga zeker aan raden voor
              een goed werkende web applicatie."
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../assets/aerialaccess.png"
              alt="partner laforga agency shopify design ecommerce development"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Aerial Access (owner)</span>
            <p>
              “Laforga Digital Creative Agency is mede verantwoordelijk voor
              onze vernieuwde website. Onze ervaring is zeer positief en wij
              hebben de samenwerking als zeer prettig en waardevol beschouwd...
              onze website is helemaal naar wens ontworpen en geïmplementeerd."
            </p>
          </div>
        </Slider>
      </section>
    );
  } else {
    return (
      <section className="testimonial-section">
        <Slider {...settings}>
          <div className="slider__item">
            <StaticImage
              src="../../assets/aerialaccess.png"
              alt="aerial access"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Aerial Access</span>
            <p>
              “Enthusiastic agency with insight. Designed a beautiful site for
              Aerial Access that fully met our requirements. Thinks along with
              the design from the customer's perspective and leaves room for
              your own ideas. Pleasant cooperation with an eye for service."
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/four-editors.png"
              alt="four editors partner laforga agency shopify design ecommerce development"
              width={200}
              height={25}
              loading="lazy"
            />
            <span className="h2">Four Editors</span>
            <p>
              “Very good help from Laforga. We had some problems on the website,
              and this was solved immediately. Always available, fast and
              qualitative. Thanks!"
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/clientsLogo/maglashic.png"
              alt="maglashic"
              width={200}
              height={50}
              loading="lazy"
            />
            <span className="h2">Maglashic</span>
            <p>
              “We are very pleased with the result. Laforga listens well and has
              a feeling for what you want. Excellent service, fast,
              professional, creative, solution-oriented, and personal. Never
              afraid to take those extra steps."
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../images/studio-marinade.svg"
              alt="studio marinade partner laforga agency shopify design ecommerce development"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Marinade Studios</span>
            <p>
              “As a design agency, we have experienced a great collaboration
              with Laforga. Laforga is good at translating the Figma designs to
              front/back-end and gives good tips where necessary! They are able
              to think along where sometimes the technical knowledge is lacking
              as a designer. That's very nice. Communication is good and hard
              work is being done. In short, I can certainly recommend Laforga
              for a well- functioning website.""
            </p>
          </div>
          <div className="slider__item">
            <StaticImage
              src="../../assets/aerialaccess.png"
              alt="partner laforga agency shopify design ecommerce development"
              width={165}
              height={70}
              loading="lazy"
            />
            <span className="h2">Aerial Access (owner)</span>
            <p>
              “Laforga Digital Creative Agency is partly responsible for our
              renewed website. Our experience has been very positive and we have
              considered the cooperation very pleasant and valuable... our
              website has been designed and implemented completely according to
              your wishes."
            </p>
          </div>
        </Slider>
      </section>
    );
  }
};

export default TestimonialSection;
