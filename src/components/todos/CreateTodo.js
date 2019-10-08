import React, { Component } from "react";
import { connect } from "react-redux";

class CreateTodo extends Component {
  state = {
    text: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      text: ""
    });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add todo</label>
            <input
              type="text"
              name="text"
              value={this.state.todo}
              onChange={this.handleChange}
            />
          </p>
          Create Todo Component
          <input type="submit" />
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addTodo: formData => dispatch({ type: "ADD_TODO", payload: formData })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
