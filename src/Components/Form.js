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
  

  render() {
    return (
      <form>
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
        </fieldset>
      </form>
    );
  }
}

export default Form;
