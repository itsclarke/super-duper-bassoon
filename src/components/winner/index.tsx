import "./winner.scss";

type Card = {
  id: number;
  type: number;
};

type Props = {
  cards: Array<Card>;
  matches: Array<number>;
  reset: () => void;
};

export const WinnerComponent: React.FC<Props> = (props) => {
  const { cards, matches, reset } = props;
  const showCongrats = cards.length > 0 && cards.length === matches.length;
  return (
    <div className={`congrats ${showCongrats ? "" : "hidden"}`}>
      <p>
        <i>🎉</i>You Win!<i>🎉</i>
      </p>
      <button onClick={reset}>Play Again</button>
    </div>
  );
};
