import React from 'react';
import _ from 'lodash';
import api from './test/stubAPI';
import { Link } from 'react-router';

class Form extends React.Component {
    state = { title: '', link: ''};

    render() {
       return (
         <form style={{marginTop: '30px'}}>
            <h3>Add a new blogg</h3>
            <div className="form-group">
              <input type="text"
                className="form-control" placeholder="Title"
                value={this.state.title} ></input>
            </div>
            <div className="form-group">
              <input type="text"
                 className="form-control" placeholder="Link"
                 value={this.state.link} ></input>
            </div>
            <button type="submit" className="btn btn-primary" >Blogg</button>
          </form>
        );
      }
   };

class NewsItem extends React.Component {
  handleVote = () =>  this.props.upvoteHandler(this.props.blogg.id);

  render() {
      let lineStyle = {
           fontSize: '20px', marginLeft: '10px'  };
      let cursor = { cursor: 'pointer' } ;
      let line ;
      if (this.props.blogg.link ) {
         line = <a href={this.props.blogg.link} >
                      {this.props.blogg.title} </a> ;
      } else {
         line = <span>{this.props.blogg.title} </span> ;
      }
      return (
        <div >
          <span className="glyphicon glyphicon-thumbs-up" 
              style={cursor} 
              onClick={this.handleVote} ></span>
          {this.props.blogg.upvotes}
          <span style={lineStyle} >{line}<span>
              <Link to={'#/bloggs/' + this.props.blogg.id }>Comments</Link>
            </span>
          </span>
        </div>  
        );
    }
}

class NewsList extends React.Component {
  render() {
      let items = this.props.bloggs.map((blogg,index) => {
         return <NewsItem key={index} 
                          blogg={blogg} 
                          upvoteHandler={this.props.upvoteHandler}  /> ;
        } )
    return (
       <div>
          {items}
       </div>
      );
  } 
}

class Trekblogg extends React.Component {
  incrementUpvote = (id) => {
      api.upvote(id) ;
      this.setState({});
  };

  render() {
      let bloggs = _.sortBy(api.getAll(), function(blogg) {
          return - blogg.upvotes;
      }
      );
      return (
        <div >
           <NewsList bloggs={bloggs} 
                upvoteHandler={this.incrementUpvote} />
           <Form addHandler={this.addblogg}  />
      </div>
      );
  } 
}

export default Trekblogg;