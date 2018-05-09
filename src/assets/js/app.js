import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';



import libs from './lib/dependencies';
window.libs = libs;

require('./lib/test2');
require('./lib/test1');


$(".slider").slick({
 
  // normal options...
  infinite: false,
 
  // the magic
  responsive: [{
 
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        infinite: true
      }
 
    }, {
 
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        dots: true
      }
 
    }, {
 
      breakpoint: 300,
      settings: "unslick" // destroys slick
 
    }]
});


$(document).foundation();
