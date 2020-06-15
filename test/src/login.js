import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: '',
    password:''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleChange2 = (e) => {
    this.setState({
      password : e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo
    console.log(this.state.content)
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
          <label>password</label>
          <input type="password" onChange={this.handleChange2} value={this.state.password} />
        </form>
      </div>
    )
  }
}

export default AddTodo