import React, { Component } from 'react';
import '../../assets/css/App.css';
import Header from './header/Header';
import Summary from './summary/Summary';
import SettingsProfile from './settings/settingsProfile/SettingsProfile';
import Today from './today/Today';
import TopHW from './topHappyWalkers/TopHW';
import Footer from './footer/Footer';
import SettingsPassword from './settings/settingsPassword/SettingsPassword';
import {Route} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios"

 class Dashboard extends Component {
   constructor(props){
     super(props)
     this.state={img:""}

     this.handler=this.handler.bind(this)
   }
   handler(e){
    //  alert("Hello")
     e.preventDefault()
     var pic=document.querySelector('input[type="file"]').files[0]
     var data=new FormData();
     
     data.append('image', pic)
     console.log(data)
    //  console.log(pic)

     axios.post("https://a-qa-backend-happy-walker.herokuapp.com/users/image",data,{withCredentials: true})
     .then(res=>this.setState({img:"https://a-qa-backend-happy-walker.herokuapp.com"+res.data.image}))
     .catch(error=>console.log(error))
   }
   
  render() {
    const summary = "summary";
    const settings = "settings";
    
    const userData = { 
      // username : "",
      // first_name : "Effie",
      // last_name : "Robbins",
      // email : "effie.robbins@gmail.com",
      steps : 9.593,
      distance : 7.42 + " KM",
      kcal : 482
     }

     console.log("hi");
     console.log(this.props.user);
     console.log("hi");
    return (
      <div className="container">
        <Header user={ this.props.user }/>
        <Route exact path="/dashboard" render= {()=><Summary text={ summary }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><Summary text={ settings }/>}/>
        <Route exact path="/dashboard" render= {()=><Today data={ userData } user={ this.props.user }/>}/>
        <Route exact path="/dashboard" render= {()=><TopHW/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsProfile user={ this.props.user }/>}/>
        <Route exact path="/dashboard/settings" render= {()=><SettingsPassword/>}/>
        
        <Footer />
        {/* <form enctype="multipart/form-data" onSubmit={this.handler}>
          <input id="picture" type="file"/>
          <img src={this.state.img}/>
          <input type="submit"/>

        </form> */}
      </div>
    );
  }
}
const mapStateToProps=state=>{
  return {
    user: state.reducer.user
  }
}

export default connect(mapStateToProps)(Dashboard)
