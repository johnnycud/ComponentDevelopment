//import './node_modules/bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import StarTrek from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Phones from './Data';



var startreks = [
    {name: 'Original', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_The_Original_Series'},
    {name: 'Next Generation', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_The_Next_Generation'},
    {name: 'Deep Space Nine', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Deep_Space_Nine'},
    {name: 'Voyager', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Voyager'},
    {name: 'Enterprise', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Enterprise'},
    {name: 'Discovery', url:'http://memory-alpha.wikia.com/wiki/Star_Trek:_Discovery'}];
    
var type = 'Star Trek Generations';

ReactDOM.render(
    <StarTrek sites={startreks} type={type}/>,
     document.getElementById('mount-point'))
