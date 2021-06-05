import React from "react";
// import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const showStars = (ratingValue, value) => {
    if (ratingValue >= value) {
        return "fas fa-star";
    } else if (ratingValue >= value - 0.5) {
        return "fas fa-star-half-alt";
    }
    return "far fa-star";
};

const StarRating = ({ value, text, color }) => {
    const rating = [];
    for (let i = 1; i < 6; i++) {
        rating.push(
            <span>
                <i
                    style={{
                        color: color,
                        textShadow:
                            "-1px 0 #000, 0 1px #000, 1px 0 #000, 0 -1px #000",
                    }}
                    className={showStars(value, i)}
                ></i>
            </span>
        );
    }

    return (
        <div className="rating">
            {rating}
            {text && text}
        </div>
    );
};

StarRating.defaultProps = {
    color: "#f8e825",
};

StarRating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string,
};

export default StarRating;
