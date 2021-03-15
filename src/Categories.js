import React, { Component } from "react";
import AddCategory from "./AddCategory";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories, selectCategory, addCategory } = this.props;

    return (
      <div id="categories">
        <AddCategory addCategory={addCategory} />
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
  }
}

export default Categories;
