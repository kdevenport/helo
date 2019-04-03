import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Post from '../src/Components/Post/Post';
import Nav from '../src/Components/Nav/Nav';
import Form from '../src/Components/Form/Form';
import Dashboard from '../src/Components/Dashboard/Dashboard';
import Auth from '../src/Components/Auth/Auth';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
        <Nav />
        <Form />
        <Dashboard />
        <Auth />
      </div>
    );
  }
}

export default App;
