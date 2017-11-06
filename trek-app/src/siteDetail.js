import React from 'react';
import localCache from './localCache';
import request from 'superagent' ; 


class Specification extends React.Component {
  render(){
      let site = this.props.site ;           
      let availability = site.availability.map(function(avb,index) {
          return <dd key={index}>{avb}</dd> ;
          }) ;
      
      let display = (
          <div>
            <ul className="shows">
              <li >
                <span>Best Show</span>
                <dl>
                  <dt>BestShow</dt>
                     {}
                </dl>
              </li>
              <li>
                <span>id</span>
                
              </li> 
              <li>
                <span>Images</span>
                
              </li>
              <li>
                <span>Crew</span>
                
              </li>
            </ul>  
          </div>     
       )
      return (
           <div>
              {display}
          </div>
         );
  }
};


class ImagesSection extends React.Component { 
  render(){
      var thumbImages = this.props.site.images.map(function(img,index) {
          return (
            <li>
               <img key={index} src={"/show/" + img}
                   alt="missing" />
            </li>
            ) ;
          } );
      var mainImage = (
        <div className="site-images">
          <img src={"/shows/pics/" + this.props.site.images[0]} 
                alt={this.props.site.name}
                className="site" />
        </div>
        ) ;
        return (
            <div>
               {mainImage}
               <h1>{this.props.site.name}</h1>
               <p>{this.props.site.description}</p>
               <ul className="site-thumbs">
                   {thumbImages}
               </ul>
              </div>
              );
      }
};


class SiteDetail extends React.Component {
    state = { };

   componentDidMount() {
      request.get(
         '/show/characters/' + this.props.params.id + '.json', (err, res) => {
            let json = JSON.parse(res.text);
            localCache.setSite(json);
            this.setState({});
       }) ;
  } 

  render(){
      let display = <p>No Site Details details</p> ; 
      let site = localCache.getsite();
      if (site) {
          display =  (
            <div>
               <ImagesSection site={site} />
               <Specification  site={site} />       
             </div>);
      }
      return (
        <div>
          {display}
        </div>
        );
  }
};

    export default SiteDetail;