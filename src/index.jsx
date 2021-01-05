import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyles from './global-styles';
import FirebaseContext from './context/firebase';

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
