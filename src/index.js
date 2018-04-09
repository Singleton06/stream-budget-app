import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  margin: 0
};

const Root = () => (
  <div style={styles}>
    <App />
  </div>
);

render(<Root />, document.getElementById('root'));
