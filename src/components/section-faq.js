import React from "react";
import '../styles/styles.scss'

const SectionFaq = ({ lang }) => {
  return (
    <section className="section-faq">
     <div className="container" lang={lang}>
         <h2>FAQ</h2>
         <div className="single-faq">
            <div className="question"> <h3>Werken jullie ook voor B2B bedrijven?</h3><span>+</span></div>
<div className="answer"><p>
Ja zeker, naast dat wij vooral gefocust zijn op B2C, zijn wij ook in staat om voor B2B bedrijven een online verkoopkanaal aan te maken. Met het platform waar wij mee werken is het mogelijk om een apart portaal te developen waarbij de webshop alleen voor bepaalde groepen/klanten zichtbaar is die daar toegang tot hebben.
</p>
</div>
         </div>
         <div className="single-faq">
           <div className="question"><h3>Hoe krijg ik een prijsvoorstel?</h3> <span>+</span></div>  
<div className="answer">
    <p>
Als u op zoek bent naar een digitale agency, vul dan eerst ons formuluier die je op de contact pagina kan vinden. We antwoorden binnen 24 uur om een
gesprek in te plannen en eventuele directe vragen te stellen. Tijdens ons eerste gesprek zullen we veel
vragen stellen over de projectdoelen, het publiek, het budget, de tijdlijn en andere essentiële
details. We behandelen alle gesprekken met klanten altijd
vertrouwelijk. 

Hoewel veel digitale agencies alleen per uur werken, proberen we de
projectkosten afhankelijk van het soort project, zo nauwkeurig mogelijk in te schatten voordat we beginnen. Na het gesprek kunnen we kijken naar
verschillende documentatie zoals een bestaand ontwerp, projectvereisten, eerdere ontwerpen, etc. 
</p>
</div>
         </div>
         <div className="single-faq">
             <div className="question"><h3>Hoe lang duurt het voordat mijn webshop klaar is?</h3><span>+</span></div>
<div className="answer"><p>
Dit is erg afhankelijk van het soort project. Voor een basis webshop communiceren wij 10 dagen aan onze klanten. Mits de communicatie goed en helder verloopt. Voor grotere projecten zijn wij gemiddeld 1 a 2 maanden bezig. Kleinere taken kunnen wij binnen enkele dagen afronden. Wij vinden het belanrgijker om kwaliteit te leveren dan haastig te werk gaan.
</p>
</div>
         </div>
         <div className="single-faq">
            <div className="question"> <h3>Ontwerpen jullie ook of coderen jullie alleen?</h3><span>+</span></div>
            
<div className="answer">
<p>Wij zijn een full-service e-commerce agency waarbij wij het complete pakket aanbieden. Van strategie tot het developen ervan.
             <br />
             We positioneren ons als een nieuw soort agency die zich
dat zich richt op technologiebedrijven, digitale producten en direct-to-consumer-merken.
 Onze branding-mogelijkheden omvatten onder meer onderzoek, merk- en digitale
strategie, logo-ontwerp, visuele identiteit, grafisch ontwerp, motion design en de
ontwikkeling van stijlgidsen, en webdesign.</p>

</div>
         </div>
         <div className="single-faq">
            <div className="question"> <h3>Maken jullie ook websites of alleen webshops?</h3><span>+</span></div>
             
<div className="answer">
<p>Wij zijn een full-service e-commerce agency waarbij wij het complete pakket aanbieden. Van strategie tot het developen ervan. We hebben een compleet team met specialisten.</p>

</div>
         </div>
     </div>
    </section>
  );
};

export default SectionFaq;