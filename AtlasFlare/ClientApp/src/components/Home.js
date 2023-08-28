import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <p>Welcome to your new single-page application</p>                       
        </div>
    );
  }
}

//function Home() {
//    return (
//        <div>
//            <h1>Hello, world!</h1>
//            <p>Welcome to your new single-page application</p>                        
//        </div>
//    );
//}

//export default Home;