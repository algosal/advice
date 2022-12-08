
import React from 'react';
import ReactDOM from 'react-dom';

export default class Car extends React.Component<unknown, any>  {
  constructor(props:any){
    super(props);
    console.log(props); 
  }
  render() {
      return( <p>  Hi, I am a Car!</p>);
    }
  }

