import React, { Component } from "react";

const textareaStyle = {
  height: "100px",
  width: "400px",
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "example@abc.xyz",
      comment: "Write your Comments here!",
      language: "Rust",
    };
  }

  // handleEmail = (event) => {
  //   console.log(event.target.name);
  //   this.setState({
  //     email: event.target.value,
  //   });
  // };

  // handleComment = (event) => {
  //   console.log(event.target.name);
  //   this.setState({
  //     comment: event.target.value,
  //   });
  // };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.email} ${this.state.comment} ${this.state.language}`);
    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <legend>Comment Section</legend>
        <fieldset>
          <label htmlFor="email">Email: </label>
          <input
            name="email"
            type="text"
            id="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="comment">Comment: </label>
          <textarea
            name="comment"
            id="comment"
            style={textareaStyle}
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <br />
          <br />
          <label htmlFor="languages">Your Language: </label>
          <select
            name="language"
            id="languages"
            onChange={this.handleChange}
            value={this.state.language}
          >
            <option value="HTML">HTML</option>
            <option value="Javascript">Javascript</option>
            <option value="Rust">Rust</option>
            <option value="Python">Python</option>
          </select>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    );
  }
}

export default Form;
