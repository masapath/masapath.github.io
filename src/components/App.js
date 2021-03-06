import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CheckListItem from "./CheckListItem";
import CheckboxList from "./CheckboxList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <h1>点呼アプリ</h1>
          <div>
            <CheckboxList title="点検項目"/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;