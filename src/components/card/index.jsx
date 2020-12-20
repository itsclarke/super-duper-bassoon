import PropTypes from "prop-types";
import "./card.scss";

const Card = ({ card, isFlipped, handleClick, matched }) => {
  const preventClick = isFlipped || matched;
  return (
    <div
      className={`card ${isFlipped ? "flipped" : ""} ${
        matched ? "matched" : ""
      }`}
      onClick={() => (preventClick ? null : handleClick(card))}
      id={card.id}
    >
      <div className='inner'>
        <div className='front'>{card.type}</div>
        <div className='back'></div>
      </div>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.object.isRequired,
  isFlipped: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
  matched: PropTypes.bool.isRequired,
};

export default Card;
