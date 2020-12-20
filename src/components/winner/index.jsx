import PropTypes from "prop-types";
import "./winner.scss";

const Winner = ({ cards, matches, reset }) => {
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

Winner.propTypes = {
  cards: PropTypes.array.isRequired,
  matches: PropTypes.array.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Winner;
