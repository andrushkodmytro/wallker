import React, { Component } from 'react';
import './TopHW.css';


import TopArticles from './TopArticles.jsx';
import TopRows from './TopRows.jsx';

export default class TopTable extends Component {   
    render() {
      const { walkers, onStartClick } = this.props;
      const { filteredWalkersArray } = this.props;

      return (
        <div className="table">
          <TopArticles name="Name" steps="Steps" distance="Distance" kcal="Kcal"/>
          { !!walkers.length && walkers.map(item =>
            <TopRows
              className="count"
              key={ item.key }
              id={ item.id }
              count={ item.count }
              name={ item.name }
              steps={ item.steps }
              distance={ item.distance }
              kcal={ item.kcal }
              star={ item.star }
              onStartClick={ onStartClick }
              walkers={ filteredWalkersArray }
            />
          )}
        </div>
      );
    }
  }
