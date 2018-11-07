import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar';

const title = 'My React Webpack Babel Setup for Dasset';

ReactDOM.render(

  <div style={{backgroundColor: 'red'}}>
  	<Navbar />
  	{title}
  </div>,
  document.getElementById('app')
);

module.hot.accept();