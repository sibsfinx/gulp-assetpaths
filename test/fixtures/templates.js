//static in template
define(function(){this["JST"] = this["JST"] || {};this["JST"]["app/scripts/templates/AsamPromo.ejs"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape;with (obj) {__p += '<div class="row-fluid asam-promo">\n\n\t<div class="span4">\n\n\t\t<img src="https://www.newDomain.com/criteriabook/images/book_cover_new.png" />\n\n\t</div>\n\t<div class="span8">\n\n\n\t\t<h1>Special Offer</h1>\n\t\t<p>Order the new edition of <em>The ASAM Criteria</em> and get free 45-day access to the beta enhanced web-based version. \n\t\tAfter the 45-day trial, two subscription add-ons will be available for purchase.</p>\n\t\t<div style="text-align:center;">\n\n\t\t\t<a style="color: #fff;" class="btn btn-warning btn-large" href="http://www.changecompanies.net/cart_checkout.php?action=add&id=ASM0">ORDER NOW!</a>\n\t\t</div>\n\t</div>\n</div>\n\n\n';'<div class="row-fluid asam-promo">\n\n\t<div class="span4">\n\n\t\t<img src="https://www.newDomain.com/criteriabook/images/book_cover_new.png" />\n\n\t</div>\n\t<div class="span8">\n\n\n\t\t<h1>Special Offer</h1>\n\t\t<p>Order the new edition of <em>The ASAM Criteria</em> and get free 45-day access to the beta enhanced web-based version. \n\t\tAfter the 45-day trial, two subscription add-ons will be available for purchase.</p>\n\t\t<div style="text-align:center;">\n\n\t\t\t<a style="color: #fff;" class="btn btn-warning btn-large" href="http://www.changecompanies.net/cart_checkout.php?action=add&id=ASM0">ORDER NOW!</a>\n\t\t</div>\n\t</div>\n</div>\n\n\n';}return __p};
//dynamic in template
this["JST"]["app/scripts/templates/Access.ejs"] = function(obj) {obj || (obj = {});var __t, __p = '', __e = _.escape, __j = Array.prototype.join;function print() { __p += __j.call(arguments, '') }with (obj) {__p += '<div class="digtal-access-item span5 '; iterator%2 !== 0 ? print('offset1') : ''; ;__p += '">\n\t<div class="row-fluid">\n\t\t<div class="span3">\n\t\t\t<div class="product-img">\n\t\t\t\t<img test="test" src="/' +((__t = ( Pimage )) == null ? '' : __t) +'" /><img src="/' +((__t = ( Pimage )) == null ? '' : __t) +'" />\n\t\t\t</div>\n\t\t</div>\n\t\t<div class="span9">\n\t\t\t<div class="product-title">\n\t\t\t\t<h5>' +((__t = ( dProductTitle )) == null ? '' : __t) +'</h5>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class="row-fluid">\n\t\t'; if(dProductTrackable === 1){ ;__p += '\n\t\t<div class="span6 complete-container">\n\t\t\t<h5>Complete</h5>\n\t\t\t<div class="progress-icon-container">\n\t\t\t\t\t'; if(dComplete == 1){ ;__p += '\n\t\t\t\t\t<i class="icon-ok-sign complete"></i>\n\t\t\t\t\t'; } else { ;__p += '\n\t\t\t\t\t<i class="icon-remove incomplete"></i>\n\t\t\t\t\t'; } ;__p += '\n\n\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t'; } ;__p += '\n\t\t<div class="span6 last-access-container">\n\t\t\t<h5>Last Access: </h5>\n\t\t\t'; if(dLastAccess){ ;__p += '\n\t\t\t<div>' +((__t = ( moment(dLastAccess).format('MMM Do, YYYY') )) == null ? '' : __t) +'</div>\n\t\t\t<div>' +((__t = ( moment(dLastAccess).format('h:mm A') )) == null ? '' : __t) +' </div>\n\t\t\t'; } else { ;__p += '\n\n\t\t\t   <h4>Never</h4>\n\t\t\t'; } ;__p += '\n\n\n\t\t</div>\n\n\n\n\t</div>\n\n\n\n</div>\n\n';}return __p};