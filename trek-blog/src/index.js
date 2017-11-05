import React from 'react';
import ReactDOM from 'react-dom';
import HackerApp from './App';
//import '~node_modules/bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.css';

var posts = [
         {   title : 'Who is the best star trek captain?',
            link : 'https://www.space.com › Entertainment',
            username : 'jcudds',
            comments : [],
            upvotes : 8
          },
         { 
            title : 'Discovery a war propaganda',
            link : 'http://www.twcenter.net/forums/showthread.php?758701-Star-Trek-Discovery-and-Leftist-Propaganda/page5',
            username : 'notme',
            comments : [],
            upvotes : 15
          },
          { 
            title : ' Why is Spocks blood copper based if he is half human?',
            link : 'https://scifi.stackexchange.com/questions/21996/why-is-spocks-blood-copper-based-if-he-is-half-human',
            username : 'pbyrne',
            comments : [],
            upvotes : 13
          },
          { 
            title : 'Why are vulcans and Romulans so different',
            link : 'https://scifi.stackexchange.com/questions/5578/how-are-vulcans-and-romulans-different-from-each-other',
            username : 'psmith',  
            comments : [],
            upvotes : 8
          }
      ] ;

ReactDOM.render(
  <HackerApp posts={posts} />,
  document.getElementById('root')
);
