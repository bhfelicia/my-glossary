import React from "react";

const SingleCategory = ({ selectedCategory, deselectCategory }) => {
  console.log(selectedCategory);
  return (
    <div id="single-category">
      <h1>{selectedCategory.title}</h1>
      {selectedCategory.words.map((word, idx) => {
        return (
          <div className="word" key={idx}>
            <h3>{word.name}</h3>
            <p>{word.definition}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SingleCategory;
