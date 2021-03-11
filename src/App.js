import axios from "axios";
import React, { Component } from "react";
import Navbar from "./Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
      selectedCategory: {},
      categoryDetail: false,
    };
  }
  async componentDidMount() {
    const categories = (await axios.get("/api/categories")).data;
    this.setState({ categories: categories });
  }
  render() {
    const { categories } = this.state;

    return (
      <div id="app">
        <Navbar />
        {categories.map(
          (category) => `
      ${category.title}
      `
        )}
      </div>
    );
  }
}
export default App;
