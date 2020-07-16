import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './pages/Home';
import About from './pages/About';
import Cushions from './pages/Cushions';
import Prints from './pages/Prints';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/index" component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/cushions" component={Cushions}/>
             <Route path="/prints" component={Prints}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
  
 
export default App;