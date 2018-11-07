// react
import React from 'react';
import ReactDOM from 'react-dom';
// components
import Navbar from './components/navbar';
import Home from './components/home';
// fonts
// to do: buy Eina Font!

import './app.scss';

const title = 'My React Webpack Babel Setup for Dasset';

ReactDOM.render(

  <div>
  	<Navbar />
  	
  	<Home />

  </div>,
  document.getElementById('app')
);

module.hot.accept();