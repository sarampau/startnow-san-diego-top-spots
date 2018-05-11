import React from 'react';

export default props => (
  <div id='topspots' className='spot card text-primary shadow mb-3'>
    <h4 className='pt-2 pb-2 pl-2'>{ props.name }</h4>
    <p className='pl-2'>{ props.description }</p>
    <div className='container'>
      <div className='row'>
        <div className='col-md-1 offset-md-11'>
          <a
            className='btn btn-small btn-outline-primary mb-2'
            href={ `https://maps.google.com/?q=${props.location}` }
            role='button'
          >Map</a>
        </div>
      </div>
    </div>
  </div>
);
