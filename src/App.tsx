import { useEffect, useState } from "react";
import { CardComponent } from "./components/card";
import { WinnerComponent } from "./components/winner";
import { shuffle, allCards } from "./utils/cards";
import "./app.scss";

type Card = {
  id: number;
  type: number;
};

export const App: React.FC = () => {
  const [cards, setCards] = useState<Array<Card> | []>([]);
  const [flipped, setFlipped] = useState<Array<number> | []>([]);
  const [selected, setSelected] = useState<Array<Card> | []>([]);
  const [matches, setMatches] = useState<Array<number> | []>([]);

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

  const sameCardClicked = (card: Card) => selected[0].type === card.type;

  const unFlip = (...unflip: Array<number>) => {
    const stayFlipped: Array<number> = [];
    flipped.forEach((id) => {
      if (!unflip.includes(id)) {
        stayFlipped.push(id);
      }
    });
    setFlipped(stayFlipped);
    setSelected([]);
  };

  const handleClick = (card: Card) => {
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

  const renderGrid = (cards: Card[]) => {
    return cards.map((card: Card) => {
      return (
        <CardComponent
          key={card.id}
          card={card}
          isFlipped={flipped.includes(card.id as never)}
          matched={matches.includes(card.id as never)}
          handleClick={handleClick}
        >
          {card}
        </CardComponent>
      );
    });
  };

  return (
    <main>
      <h1>Test Your Memory 🧠</h1>
      <div className='grid'>{renderGrid(cards)}</div>
      <WinnerComponent cards={cards} matches={matches} reset={resetGame} />
    </main>
  );
};

export default App;
