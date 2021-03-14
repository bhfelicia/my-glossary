import React from "react";

const Categories = ({ categories, selectCategory }) => {
  return (
    <div id="categories">
      {categories.map((category) => (
        <div
          className="category"
          key={category.id}
          onClick={() => {
            selectCategory(category);
          }}
        >
          <a>{category.title}</a>
        </div>
      ))}
    </div>
  );
};
export default Categories;
