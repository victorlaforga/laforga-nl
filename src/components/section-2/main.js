import React from "react";
// import '../../styles/styles.scss'
const MainSectionTwo = ({ lang }) => {
  if (!lang) {
    return (
      <div className="main-section-two" id="over-ons">
        <div className="content-section-two">
          <div class="content">
            {" "}
            Wij zijn experts in het
            <div class="content__container">
              <ul class="content__container__list">
            
                <li class="content__container__list__item">opschalen</li>
                <li class="content__container__list__item">bouwen</li>
                <li class="content__container__list__item">optimaliseren</li>
                <li class="content__container__list__item">ontwikkelen</li>
              </ul>
            </div>
            <br />
            van shopify stores.
          </div>
          <p>
            We ondersteunen e-commerce brands in het optimaliseren en het automatiseren van processen binnen Shopify.<br /><br />  Wij zorgen voor de digitale kanalen van uw merk, zodat u zich kunt richten op uw visie. Wij zijn een full-service e-commerce bureau gespecialiseerd in fashion, lifestyle, beauty. Wij begrijpen de branche en uw klanten.{" "}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-section-two" id="over-ons">
        <div className="content-section-two">
          <div class="content">
            {" "}
            We are experts in
            <div class="content__container">
              <ul class="content__container__list">
                <li class="content__container__list__item eng-list">designing</li>
                <li class="content__container__list__item eng-list">building</li>
                <li class="content__container__list__item eng-list">optimizing</li>
                <li class="content__container__list__item eng-list">developing</li>
              </ul>
            </div>
            <br />
            your Shopify stores.
          </div>
          <p>
          We support e-commerce brands in optimizing and automating processes within Shopify.<br /><br /> We take care of your brand's digital channels so you can focus on your vision. We are a full-service e-commerce agency specializing in fashion, lifestyle, beauty. We understand the industry and your customers.
          </p>
        </div>
      </div>
    );
  }
};

export default MainSectionTwo;
