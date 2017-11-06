//import './node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import SiteCatalogueApp from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import SiteDetail from './siteDetail';




class App extends React.Component {
    render() {
      return (
        <div>
          <h1>Site Catalogue </h1>
          {this.props.children}
        </div>
      )
    }
};

ReactDOM.render( 
    <Router history={browserHistory} >
      <Route path="/" component={App}>
         <IndexRoute component={SiteCatalogueApp}/>
         <Route path="sites/:id" component={SiteDetail} />
      </Route>
    </Router>
  ,
document.getElementById('root')
);

var sites = [
    {name: 'Original', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_The_Original_Series'},
    {name: 'Next Generation', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_The_Next_Generation'},
    {name: 'Deep Space Nine', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Deep_Space_Nine'},
    {name: 'Voyager', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Voyager'},
    {name: 'Enterprise', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Enterprise'},
    {name: 'Discovery', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Discovery'}];

var type = 'Star Trek Sites';
