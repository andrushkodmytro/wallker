import React, { Component } from 'react';
import './TopHW.css';


import TopHWTop from './TopHWTop.jsx';
import TopSearchWalkers from './TopSearchWalkers';
import TopTable from './TopTable';
import { connect } from 'react-redux';

class TopHW extends Component {
  constructor(props){
    super(props)

    this.state = {
      filteredWalkersArray: [],
    };
  }

    handleUserInput = (e) => {
      this.filterWalkersArray(e.target.value);
    }

    filterWalkersArray = (val) => {
      const { walkers } = this.props;

      const filteredWalkersArray = walkers.filter(item => {
        if(val === '') return item;
        return item.name.toLowerCase().indexOf(val) !== -1
      });

      this.setState({
        filteredWalkersArray
      })
    }

    componentDidMount(){
      console.log(this.props)
      const { walkers } = this.props;
      var filteredWalkersArray;

      filteredWalkersArray = walkers.sort((a,b) => {
        return b.steps - a.steps;
      });

      filteredWalkersArray.forEach((elem, index) => {
        elem['count'] = index + 1;
      });

      this.setState({
        filteredWalkersArray
      })
    }

    handleBtnClick = (tabName) => {
      const { walkers } = this.props;
      var filteredWalkersArray;
      
      if(tabName === 'FAW'){
        filteredWalkersArray = this.filterWalkersForFavourite(walkers);
      } else {
        filteredWalkersArray = walkers;
      }
        this.setState({
          filteredWalkersArray,
          tabName
        })
    }

    onStartClick = (id) => {
      const { filteredWalkersArray } = this.state;
      let arr = [];
      arr = filteredWalkersArray.map(item => {
        if(item.id === id){
          item.star = !item.star
        }
         return item; 
      })
      if(this.state.tabName === 'FAW'){
        console.log(this.state.tabName)
        arr = this.filterWalkersForFavourite(filteredWalkersArray);
      }
      this.setState({
        filteredWalkersArray: arr || filteredWalkersArray
      })
    }

    filterWalkersForFavourite = (arr) => {
      return arr.filter(e => e.star)
    }

    render() {
      const { filteredWalkersArray } = this.state;

      return (
        <div className="top_hw">
            <TopHWTop handleBtnClick={ this.handleBtnClick } />
            <TopSearchWalkers inputText={ this.state.input } onUserInput={ this.handleUserInput }/>
            <TopTable
              walkers={ filteredWalkersArray }
              onStartClick={ this.onStartClick }
            />
        </div>
      );
    }
  }

function mapStateToProps (state) {
  return {
    walkers : state.walkers
  };
}
  
export default connect(mapStateToProps)(TopHW);