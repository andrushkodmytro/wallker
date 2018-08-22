import React, { Component } from 'react';
import './TopHW.css';
import TopHWTop from './TopHWTop.jsx';
import TopSearchWalkers from './TopSearchWalkers';
import '../../assets/fonts/fonts.css';
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
     // const { inputText } = this.state;

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

    handleBtnClick = (val) => {
      const { walkers } = this.props;
      var filteredWalkersArray;

      if(val === 'FAW'){
        filteredWalkersArray = walkers.filter(item => item.star);
      } else {
        filteredWalkersArray = walkers;
      }

      this.setState({
        filteredWalkersArray
      })
    }

    onStartClick = (id) => {
      const { filteredWalkersArray } = this.state;

      filteredWalkersArray.forEach(item => {
        if(item.id === id){
          item.star = !item.star
        }
      })

      this.setState({
        filteredWalkersArray
      })
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