import axios from "axios";
import React, { Component } from "react";
import Navbar from "./Navbar";
import Categories from "./Categories";
import SingleCategory from "./SingleCategory";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: {},
      categoryDetail: false,
    };
    this.selectCategory = this.selectCategory.bind(this);
    this.deselectCategory = this.deselectCategory.bind(this);
    this.addCategory = this.addCategory.bind(this);
    this.deleteCategory = this.deleteCategory.bind(this);
  }

  async componentDidMount() {
    try {
      const categories = (await axios.get("/api/categories")).data;
      this.setState({ categories: categories });
    } catch (error) {
      console.log(error);
    }
  }
  async deleteCategory(categoryId) {
    try {
      await axios.delete(`/api/categories/${categoryId}`);
      const { data } = await axios.get("/api/categories");
      this.setState({ categories: data });
    } catch (error) {
      console.log(error);
    }
  }
  selectCategory(category) {
    this.setState({
      categoryDetail: !this.state.categoryDetail,
      selectedCategory: category,
    });
  }
  deselectCategory() {
    this.setState({
      categoryDetail: !this.state.categoryDetail,
      selectedCategory: {},
    });
  }
  async addCategory(title) {
    const newCategory = await axios.post("/api/categories", {
      title: title,
    });
    const { data } = await axios.get("/api/categories");
    this.setState({ categories: data });
  }
  render() {
    const { categories, selectedCategory, categoryDetail } = this.state;
    const {
      selectCategory,
      deselectCategory,
      addCategory,
      deleteCategory,
    } = this;
    return (
      <div id="app">
        <h1>My Glossary</h1>
        <Navbar deselectCategory={deselectCategory} />
        {!categoryDetail ? (
          <Categories
            categories={categories}
            selectCategory={selectCategory}
            addCategory={addCategory}
            deleteCategory={deleteCategory}
          />
        ) : (
          <SingleCategory selectedCategory={selectedCategory} />
        )}
      </div>
    );
  }
}
export default App;
