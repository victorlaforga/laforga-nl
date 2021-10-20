import React from "react";
import Faq from "./faq";

const SectionFaq = ({ lang }) => {
  return (
    <section id="faq"  className="section-faq">
      <div className="container" lang={lang}>
        <h2>FAQ</h2>
        <Faq
          defaultOpen
          title="Werken jullie ook voor B2B bedrijven?"
          description="Ja zeker, naast dat wij vooral gefocust zijn op B2C, zijn wij
                  ook in staat om voor B2B bedrijven een online verkoopkanaal
                  aan te maken. Met het platform waar wij mee werken is het
                  mogelijk om een apart portaal te developen waarbij de webshop
                  alleen voor bepaalde groepen/klanten zichtbaar is die daar
                  toegang tot hebben."
        />
        <Faq
          title="Hoe krijg ik een prijsvoorstel?"
          description=" Als u op zoek bent naar een digitale agency, vul dan eerst
          ons formuluier die u op de contact pagina kan vinden. We
          antwoorden binnen 24 uur om een gesprek in te plannen en
          eventuele directe vragen te stellen. Tijdens ons eerste
          gesprek zullen we veel vragen stellen over de
          projectdoelen, het publiek, het budget, de tijdlijn en
          andere essentiële details. We behandelen alle gesprekken
          met klanten altijd vertrouwelijk. Hoewel veel digitale
          agencies alleen per uur werken, proberen wij de
          projectkosten afhankelijk van het soort project, zo
          nauwkeurig mogelijk in te schatten voordat we beginnen. Na
          het gesprek kunnen we kijken naar verschillende
          documentatie zoals een bestaand ontwerp, projectvereisten,
          eerdere ontwerpen, etc."
        />
        <Faq
          title="Hoe lang duurt het voordat mijn webshop klaar is?"
          description="Dit is erg afhankelijk van het soort project. Ons standaard webshop pakket is binnen 10 dagen afgerond, mits de
          communicatie goed en helder verloopt. Voor grotere projecten
          zijn wij gemiddeld 1 a 2 maanden bezig. Kleinere taken kunnen
          wij binnen enkele dagen afronden. Wij vinden het belanrgijker
          om kwaliteit te leveren."
        />
        <Faq
          title="Ontwerpen jullie ook of coderen jullie alleen?"
          description="Wij zijn een full-service e-commerce agency waarbij wij het
          complete pakket aanbieden. Van strategie tot het developen.
          <br />
          We positioneren ons als een nieuw soort agency die zich dat
          zich richt op retail winkels, B2B bedrijven, digitale producten en
          direct-to-consumer-merken. Onze branding-mogelijkheden
          omvatten onder meer onderzoek, merk- en digitale strategie,
          logo-ontwerp, visuele identiteit, grafisch ontwerp, motion
          design en de ontwikkeling van stijlgidsen, en webdesign."
        />
        <Faq
          title="Maken jullie ook websites of alleen webshops?"
          description="Wij zijn een full-service e-commerce agency met een team van digitale bouwmeesters. Wij hebben ook collega's in ons team die gespecialiseerd zijn in informatieve websites. Het verschil tussen een webshop en een website is dat een webshop meer verkoop gericht is en doelt vooral op conversie."
        />
      </div>
    </section>
  );
};

export default SectionFaq;
