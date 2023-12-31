import React, { useState } from "react";
import { data } from "./data";
import "./App.css";

interface CardProps {
  frontContent: string;
  backContent: string;
}

const Card: React.FC<CardProps> = ({ frontContent, backContent }) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleCardClick = () => {
    setFlipped(!isFlipped);
  };

  return (
    <div className="card" onClick={handleCardClick}>
      {!isFlipped && <div className="card-face card-front">{frontContent}</div>}
      {isFlipped && <div className="card-face card-back">{backContent}</div>}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div>
      <h1 className="flex justify-center	pb-10">Study Cards</h1>

      <div className="flex flex-wrap">
        {data.map((card) => (
          <Card frontContent={card.question} backContent={card.answer} />
        ))}
      </div>
    </div>
  );
};

export default App;
