import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './Rating.css';
export default function StarRating({ noOfStars = 5 }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    function handleButtonClick(getCurrentIndex) {
        setRating(getCurrentIndex);
      }
    
      function handleMouseEnter(getCurrentIndex) {
        setHover(getCurrentIndex);
      }
    
      function handleMouseLeave() {
        setHover(rating);
      }
      return (
        <div className="star-rating">
        {[...Array(noOfStars)].map((_, index) => {
            index += 1;
            return(
                <FaStar
                key={index}
                className={index <= (rating || hover)? "active":"inactive"}
                onClick={()=>handleButtonClick(index)}
                onMouseOver={()=>handleMouseEnter(index)}
                onMouseLeave={()=>handleMouseLeave()}
                size={40}
                />
            );
        })}
    </div>
  );
}
