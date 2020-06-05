import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import * as serviceWorker from './serviceWorker';
import MainContent from './components/MainContent';
import Footer from './components/Footer'

ReactDOM.render(
  <React.StrictMode>
    <div className="margin">
      <Header />
      <MainContent />
      <Footer />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

//#feb8f7 pink
//#eeee64 yellow
//#ea483a red
//#a8ff8e green
//#00cafa blue

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
