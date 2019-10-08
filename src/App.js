import React, { Component } from 'react';
import List from './list';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      participants: []
    }
  };
  render() {
    const { store } = this.props
  return (
    <main className="App">
     <div className="people-list">
       {store.participants.map(list => (
         <List 
          key={list.id}
          name={list.name}
          avatar={list.avatar}
          inSession={list.inSession}
          onStage={list.onStage}
         />
       ))}
     </div>
    </main>
  );
  }
}

export default App;
