import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


import libs from './lib/dependencies';
window.libs = libs;


require('/Users/nss/FoundationSandpit/src/assets/vendor/photoswipe/photoswipe.min.js');
require('/Users/nss/FoundationSandpit/src/assets/vendor/photoswipe/photoswipe-ui-default.min.js');
require('./lib/photoswipe');

// require('/Users/nss/FoundationSandpit/src/assets/vendor/test.js');
// require('../../vendor/test.js');
// require('{{root}}src/assets/vendor/test.js');


require('./lib/docready');


$(document).foundation();
