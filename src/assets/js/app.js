import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


import libs from './lib/dependencies';                                    // Import Slick module
window.libs = libs;


require('/Users/nss/FoundationSandpit/src/assets/vendor/photoswipe/photoswipe.min');               // Plugin file for Photoswipe
require('/Users/nss/FoundationSandpit/src/assets/vendor/photoswipe/photoswipe-ui-default.min');    // Plugin file for PHotoswipe
require('./lib/photoswipe');                                              // Photoswipe code


require('./lib/docready');                                                // Initialise plugins/modules – in dist app.js this gets printed before the Photoswipe code


$(document).foundation();
