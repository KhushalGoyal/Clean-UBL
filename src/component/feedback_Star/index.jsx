import React from "react";
import { Star } from "lucide-react";
import styles from "./styles.module.css"

const StarRating = (props) => {
  const rating=props.rating
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          size={27}
          fill={index< rating ? "#eab308":"white"}
          textDecoration={"white"}
          className={index < props.rating ? "fill_yellow" : "fill-white text-gray-300"}
        />
      ))}
    </div>
  );
};

export default StarRating;