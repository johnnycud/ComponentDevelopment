import React from 'react';

    class BloggForm extends React.Component {
      render() {
        return (
           <form style={{marginTop: '30px'}}>
              <h3>Add a new Blogg</h3>

              <div className="form-group">
                <input type="text"
                  className="form-control"
                  placeholder="Title"></input>
              </div>
              <div className="form-group">
                <input type="text"
                className="form-control"
                placeholder="Link"></input>
              </div>
              <button type="submit" className="btn btn-primary">Post</button>
            </form>
            );
        }
    }

    class BloggItem extends React.Component {
      render() {
          var divStyle = {
               fontSize: '20px', 
               marginLeft: '10px' 
              };
          var cursor = { cursor: 'pointer' } ;
          var line ;
          if (this.props.post.link ) {
             line = <a href={this.props.post.link} >
            {            this.props.post.title} </a> ;
          } else {
             line = <span>{this.props.post.title} </span> ;
          }
        return (
            <div >
              <span className="glyphicon glyphicon-thumbs-up"
                    style={cursor} />
              {this.props.post.upvotes}
              <span style={divStyle} >{line}<span>
                  <a href={'#/posts/' + this.props.post.id }>Blogg Comments</a>
                </span>
              </span>
            </div>  
            );
      }
    }

    class BloggList extends React.Component {
       render() {
        var items = this.props.posts.map(function(post,index) {
          return <BloggItem key={index} post={post} /> ;
      } );
   return (
     <div>
           {items}
           </div>
     );
 }
}  

    class BloggApp extends React.Component {
      render() {
          return (
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3">
               <div className="page-header">
                      <h1>Bloggs</h1>
                      <BloggList posts={this.props.posts}  />       {/* TODO - incomplete */}
                      <BloggForm />
               </div>
                 </div>
                </div>
              </div>
          );
      }
    }

    export default BloggApp;
