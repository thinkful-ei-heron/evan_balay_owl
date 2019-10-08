import React, { Component } from 'react';
import List from './list';
import Stage from './stage';
import './App.css';

class App extends Component {
  static defaultProps = {
    store: {
      participants: [],
      chatEvents: []
    }
  };
  render() {
    const { store } = this.props
  return (
    <main className="App">
     <div className="people-list">
       {store.participants.sort((a, b) => (b.inSession > a.inSession) ? 1 : -1).map(list => (
         <List 
          key={list.id}
          name={list.name}
          avatar={list.avatar}
          inSession={list.inSession}
          onStage={list.onStage}
         />
       ))}
     </div>

     <div className='stage'>
       {store.participants.filter(item => (item.onStage === true)).map(list => (
        <Stage
        key={list.id}
        name={list.name}
        avatar={list.avatar}
        />
       ))} 
     </div>
    </main>
  );
  }
}

export default App;
