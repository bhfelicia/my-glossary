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
  }

  async componentDidMount() {
    try {
      const categories = (await axios.get("/api/categories")).data;
      this.setState({ categories: categories });
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

  render() {
    const { categories, selectedCategory, categoryDetail } = this.state;
    const { selectCategory, deselectCategory } = this;
    return (
      <div id="app">
        <Navbar deselectCategory={deselectCategory} />
        {!categoryDetail ? (
          <Categories categories={categories} selectCategory={selectCategory} />
        ) : (
          <SingleCategory selectedCategory={selectedCategory} />
        )}
      </div>
    );
  }
}
export default App;
