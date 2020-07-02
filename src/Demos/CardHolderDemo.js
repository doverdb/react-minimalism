import React from "react";
import "../App.css";
import Card from "../Components/Card";
import CardHolder from "../Components/CardHolder";
import artOne from "./art-1.jpg";
import artTwo from "./art-2.jpg";
import artThree from "./art-3.jpg";
import artFour from "./art-4.jpg";

function CardHolderDemo() {
  return (
    <CardHolder cardHeight={350} cardWidth={300}>
      <Card title="Eye See You">
        <img src={artOne} alt="Eye See You (Painting)" height={225} width={225} />
        <p style={{ color: "#787878", fontSize: 12, fontWeight: "bold", marginTop: 15 }}>by Morag Myerscough and Luke Morgan</p>
      </Card>
      <Card title="Risk">
        <img src={artTwo} alt="Risk (Painting)" height={225} width={225} />
        <p style={{ color: "#787878", fontSize: 12, fontWeight: "bold", marginTop: 15 }}>by Meriç Dağlı</p>
      </Card>
      <Card title="The Fairy Grotto">
        <img src={artThree} alt="The Fairy Grotto (Print)" height={225} width={225} />
        <p style={{ color: "#787878", fontSize: 12, fontWeight: "bold", marginTop: 15 }}>by Currier & Ives</p>
      </Card>
      <Card title="Metric Alphabet">
        <img src={artFour} alt="MetricAlphabet" height={225} width={225} />
        <p style={{ color: "#787878", fontSize: 12, fontWeight: "bold", marginTop: 15 }}>by Scott Rodgerson</p>
      </Card>
    </CardHolder>
  );
}

export default CardHolderDemo;
