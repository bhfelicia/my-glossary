import React, { Component } from "react";
import AddCategory from "./AddCategory";
import axios from "axios";

class Categories extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      categories,
      selectCategory,
      addCategory,
      deleteCategory,
    } = this.props;
    return (
      <div id="categories">
        <AddCategory addCategory={addCategory} />
        {categories.map((category) => (
          <div className="category" key={category.id}>
            <a
              onClick={() => {
                selectCategory(category);
              }}
            >
              {category.title}
            </a>
            <button onClick={() => deleteCategory(category.id)}>x</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Categories;
