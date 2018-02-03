import * as React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Greeting from '../../containers/greeting';
import Increment from '../../containers/increment';

class App extends React.Component < {}, {} > {
  render() {
    return (
      <Router>
      <div id='app' style={{
        textAlign: 'center'
      }}>
        <Greeting/>
        <Route path="/greeting" exact component={Greeting}/>
        <Route path="/increment" exact component={Increment}/>
      </div>
      </Router>
    );
  }
}

export default App;
