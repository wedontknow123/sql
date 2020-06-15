import React, { Component,Fragment } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  state={
    bitch:''
  }
  handlechange=(e)=>{
    this.setState({
      bitch:e.target.value
    })
  }
  handleclick=(event)=>{
    event.preventDefault();
    axios.get("/employees").then(res=>{
      console.log(res.data)
    })
  }
  render(){


  return (
    <div >
      <form>
      <input onChange={this.handlechange} name="bitch" type="text" placeholder="hello" />
      <button onClick={this.handleclick}>bitcha</button>
      </form>
    </div>
  );
}}

export default App;
