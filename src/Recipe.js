import React from "react";
import styles from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={styles.recipe}>
      <h2>{title}</h2>
      <img src={image} alt={title} className={styles.image} />
      <ul className={styles.ingredients}>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient.text}</li>
        ))}
      </ul>
      <p>Calories: {Math.round(calories)}</p>
    </div>
  );
};

export default Recipe;
