import { useState } from "react";
import "./Rating.css";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  return (
    <div className="rating_container">
      {[...Array(5)].map((star, index) => {
        const currentRating = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onClick={() => {
                setRating(currentRating);
              }}
            />
            <FaStar
              className="star"
              size={40}
              color={currentRating <= (rating || hover) ? "#CD9003" : "#A1A1A1"}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
