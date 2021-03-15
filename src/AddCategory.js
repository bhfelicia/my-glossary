import React, { Component } from "react";

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleKey = this.handleKey.bind(this);
  }
  handleKey(evt) {
    if (evt.key === "Enter") {
      this.props.addCategory(this.state.input);
      this.setState({ input: "" });
    }
  }

  render() {
    const { addCategory } = this.props;
    return (
      <div id="add-category">
        <input
          type="text"
          value={this.state.input}
          onChange={(ev) => this.setState({ input: ev.target.value })}
          onKeyDown={this.handleKey}
        />{" "}
        <button
          onClick={() => {
            addCategory(this.state.input);
            this.setState({ input: "" });
          }}
        >
          Add a Category
        </button>
      </div>
    );
  }
}

export default AddCategory;
