
import { Component } from 'react';
import React from 'react';


class App extends Component{
  constructor(){
    super();
    this.state = {
      
      show : true,
      Person : { 
                fullName : "dali habli", 
                imgSrc: dalipng, 
                profession:"dev"
              },
    }
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }



export default App;
