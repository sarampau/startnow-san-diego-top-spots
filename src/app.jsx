import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentDidMount() {
    axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className='container'>
        <div id='jumbo' className='jumbotron'>
          <div id='card'className='card shadow mt-4 pt-3 pb-3 pl-4'>
            <h1 className='display-2'>San Diego Top Spots</h1>
            <p className='font-weight-light'>A list of the top 30 places to see in San Diego, California</p>
          </div>
        </div>
        {
          this.state.topspots.map(topspot => (
            <TopSpot 
              key={topspot.id}
              name={topspot.name}
              description={topspot.description}
              location={topspot.location}
            />
          ))
        }
      </div>
    );
  }
}

export default App;
