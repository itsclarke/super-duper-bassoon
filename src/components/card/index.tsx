import "./card.scss";

type Card = {
  id: number;
  type: number;
};

type Props = {
  card: Card;
  isFlipped: boolean;
  handleClick: (card: Card) => void;
  matched: boolean;
};

export const CardComponent: React.FC<Props> = (props) => {
  const { card, isFlipped, handleClick, matched } = props;
  const preventClick = isFlipped || matched;
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        matched ? "matched" : ""
      }`}
      onClick={() => (preventClick ? null : handleClick(card))}
    >
      <div className='inner'>
        <div className='front'>{card.type}</div>
        <div className='back'></div>
      </div>
    </div>
  );
};
