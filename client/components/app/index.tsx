import * as React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div id='app' style={{
        textAlign: 'center'
      }}>
      <h1>WELCOME</h1>
      </div>
      </Router>
    );
  }
}

export default App;
