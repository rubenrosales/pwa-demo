  // Import React and Component
  import React, { Component } from 'react';
  // Import CSS from App.css
  import './App.css';
  import Post from './Post/Post'
  import Home from './Home/Home'
  import { Switch, Route } from 'react-router-dom'


  class App extends Component {
    render() {
      return (
        
        <div className="">
            <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/post' component={Post}/>
            {/* <Route path='/schedule' component={Schedule}/> */}
            </Switch>
        </div>
        
      );
    }
  }

  export default App;