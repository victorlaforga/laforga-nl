import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useInView } from "react-intersection-observer";
// import "../../styles/styles.scss";
const MainSectionFive = ({ lang }) => {
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  if (!lang) {
    return (
      <div className={`main-section-five ${inView && "show"}`}>
        <h3>
          <mark>Vertrouwd</mark> door:
        </h3>
        <div class={`container-clients`} ref={ref}>
          <ul className={`logogrid`}>
            <li class="logogrid__item">
            <a href="https://bankhoesdiscounter.nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/bankhoes discounter.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={187}
                height={70}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item">
            <a href="https://maglashic.nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/maglashic.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={50}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item">
            <a href="https://www.gigivitale.com/nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/gigivitale.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={41}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item"> 
              <StaticImage
                src="../../images/clientsLogo/11-removebg-preview.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={99}
                loading="lazy"
              />
        
            </li>
            <li class="logogrid__item">
            <a href="https://foureditors.com/" target="_blank" >
              <StaticImage
                src="../../images/four-editors.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={25}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item">
            <a href="https://www.nl.smoothly.com/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/logo-smoothly.png"
                class="logogrid__img smoothly"
                alt="smoothly client ecommerce developer code"
                width={210}
                height={59}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item">
            <a href="https://socksfactory.nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/logo-socks.png"
                class="logogrid__img"
                alt="socksfactory client ecommerce developer code"
                width={177}
                height={64}
                loading="lazy"
              />
              </a>
            </li>
            <li class="logogrid__item">
            <a href="https://faminci.nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/faminci.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={46}
                loading="lazy"
              />
              </a>
            </li>
          
            <li class="logogrid__item">
            <a href="https://www.maneti.nl/" target="_blank" >
              <StaticImage
                src="../../images/clientsLogo/logo_zwart.png"
                class="logogrid__img"
                alt="client ecommerce developer code"
                width={200}
                height={59}
                loading="lazy"
              />
              </a>
            </li>
          

          
            <li class="logogrid__item">
              <a href="https://www.ginelwatches.com/" target="_blank" >
              <StaticImage
                src="../../images/ginel2.jpeg"
                class="logogrid__img"
                alt="ginel watches agency luxury"
                width={157}

                height={67}
                loading="lazy"
              />
              </a>
            </li>
          </ul>
        </div>
        <a className="contact-us-btn" href="/contact/">
          Contact ons
        </a>
      </div>
    );
  } else {
    return (
      <div className={`main-section-five ${inView && "show"}`}>
        <h3>
          <mark>Trusted</mark> by:
        </h3>
        <div class={`container-clients`} ref={ref}>
          <ul className={`logogrid`}>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/bankhoes discounter.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={187}
                height={70}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/maglashic.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={50}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/gigivitale.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={41}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/11-removebg-preview.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={99}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/four-editors.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={25}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/faminci.png"
                class="logogrid__img"
                alt="shopify partners webshop ecommerce agency we design build bouwen mooie webshop modern fris website online verkopen"
                width={200}
                height={46}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/logo_zwart.png"
                class="logogrid__img"
                alt="Nike"
                width={200}
                height={59}
                loading="lazy"
              />
            </li>
            <li class="logogrid__item">
              <StaticImage
                src="../../images/clientsLogo/aerialaccess.png"
                class="logogrid__img"
                alt="Netflix"
                width={157}
                height={67}
                loading="lazy"
              />
            </li>
          </ul>
        </div>
        <a className="contact-us-btn" href="/en/contact/">
          Contact us
        </a>
      </div>
    );
  }
};

export default MainSectionFive;
