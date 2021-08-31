import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { AccessContext } from "../../contexts/access";
import lottieJson from "../../assets/laforga-newLottie.json";
// import '../../styles/styles.scss'
const MainSection = ({ lang }) => {
  const [isFirstAccess] = React.useContext(AccessContext);

  if (!lang) {
    return (
      <div className="main-section">
        <Player
          autoplay={true}
          play
          loop
          speed="3"
          background="transparent"
          src={lottieJson}
        >
          {" "}
        </Player>
        <div className={`intro-text ${isFirstAccess && "intro-text-animated"}`}>
          <h1>
            Wij zetten <br /> merken & bedrijven <br /> <mark>om</mark>{" "}
            <mark> in legendes </mark> <mark>op het web.</mark>
          </h1>
          <p>
            wees de concurrentie voor en creëer samen met ons een{" "}
            <br className="hide-media" />
            <mark>echte digitale ervaring.</mark>
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="main-section">
        <Player
          autoplay={true}
          play
          loop
          speed="3"
          background="transparent"
          src={lottieJson}
        >
          {" "}
        </Player>
        <div className={`intro-text ${isFirstAccess && "intro-text-animated"}`}>
          <h1>
            We turn
            <br />
            brands & companies <br />
            <mark> into </mark>{" "}
            <mark> online</mark>{" "}
            <mark> legends.</mark>
          </h1>
          <p>
            stay ahead of the competition and create a{" "}
            <br className="hide-media" />
            <mark>true digital experience with us.</mark>
          </p>
        </div>
      </div>
    );
  }
};

export default MainSection;
