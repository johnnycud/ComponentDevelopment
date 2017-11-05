import React from 'react';
import './App.css';
import './index.js';


class SelectSite extends React.Component {
    render() {
         return (
           <div className="col-md-10">
          <input type="text" placeholder="Search" />
          Sort by:
          <select>
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
           </div>
          );
        }
  }
  
  class StarTrek extends React.Component{
  render(){
      var showlist = this.props.sites.map(function(fWork, index){
          return(
              <li key={index}>
                  <a href={fWork.url}>
                      {fWork.name} </a>
              </li>);
      
      });
      return (
          <div>
              <h1>{this.props.type}</h1>
              <ul>
                  {showlist}
              </ul>
          </div>
      );

  }
}

class FilteredSiteList extends React.Component {
    render() {
        var displayedSites = this.props.sites.map(function(site) {
          return <StarTrek key={AllSites.id} site={site } /> ;
        }) ;
        return (
                <div className="col-md-10">
                  <ul className="sites">
                      {displayedSites}
                  </ul>
                </div>
          ) ;
    }
  }

  class SiteCatalogueApp extends React.Component {
    render() {
        return (
            <div className="view-container">
            <div className="view-frame">
               <div className="container-fluid">
                 <div className="row">
                     <SelectSite />
                     {/* TODO */}
                </div> 
                </div>                   
              </div>
            </div>
        );
    }
  }

export default StarTrek;
