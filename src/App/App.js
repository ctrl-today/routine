import React from 'react';

import style from './App.sass';

export class App extends React.Component {
  constructor(props){
    super(props);
  }
  async componentDidMount(){
  }
  render(){
    return (
      <div className={style.App}>
        <h1>THIS IS THE THING</h1>
      </div>
    )
  }
}
