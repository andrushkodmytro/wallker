import React, { Component } from 'react';
import LandingPage from "./components/landing/landing_page";
import SignIn from "./components/signin/signin_page";
 
class App extends Component {
  constructor(props){
    super(props);
    this.state={view:"Landing"};
   
  }
  render() {
    let handler=(page)=>{
      this.setState({view:page})
      }
    let currentPage=val=>{
        switch(val){
          case "Landing":
           return <LandingPage handler={handler}/>;
          case "SignIn":
         return <SignIn handler={handler}/>
        default: 
        return <LandingPage handler={handler}/>
        }
      }
      
      
    return (
      <div className="app">
    {/* {this.state.view==="Landing"?<LandingPage handler={handler}/>:<SignIn/>} */}
     { currentPage(this.state.view)}
      </div>
    );
  }
}

export default App;
