import { useEffect, useState } from "react";
import Card from "./components/card";
import Winner from "./components/winner";
import { shuffle, allCards } from "./utils/cards";
import "./app.scss";

const App = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [selected, setSelected] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const shuffled = shuffle(allCards);
    setCards(shuffled);
  }, []);

  const resetGame = () => {
    setMatches([]);
    setSelected([]);
    setFlipped([]);
    const shuffled = shuffle(allCards);
    setCards(shuffled);
  };

  const sameCardClicked = (card) => selected[0].type === card.type;

  const unFlip = (...unflip) => {
    const stayFlipped = [];
    flipped.forEach((id) => {
      if (!unflip.includes(id)) {
        stayFlipped.push(id);
      }
    });
    setFlipped(stayFlipped);
    setSelected([]);
  };

  const handleClick = (card) => {
    if (selected.length === 0) {
      setSelected([card]);
      setFlipped([...flipped, card.id]);
    } else if (selected.length === 1) {
      setFlipped([...flipped, card.id]);
      setSelected([...selected, card]);
      const match = sameCardClicked(card);
      if (match) {
        setTimeout(() => {
          setMatches([...matches, card.id, selected[0].id]);
        }, 200);
        setSelected([]);
      } else {
        setTimeout(() => {
          unFlip(selected[0].id, card.id);
        }, 1000);
      }
    }
  };

  const renderGrid = (cards) => {
    return cards.map((card) => {
      return (
        <Card
          key={card.id}
          card={card}
          isFlipped={flipped.includes(card.id)}
          matched={matches.includes(card.id)}
          handleClick={handleClick}
        >
          {card}
        </Card>
      );
    });
  };

  return (
    <main>
      <h1>Test Your Memory 🧠</h1>
      <div className='grid'>{renderGrid(cards)}</div>
      <Winner cards={cards} matches={matches} reset={resetGame} />
    </main>
  );
};

export default App;
