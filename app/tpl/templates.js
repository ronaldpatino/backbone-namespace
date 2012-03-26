App.JST = App.JST || {};

App.JST['message_about'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<p>',about_message,'</p>\n');}return __p.join('');
};


App.JST['user_list'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul data-role="listview" data-theme="g" id=\'list_view\'></ul>');}return __p.join('');
};


App.JST['message_error'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="alert alert-error">\n\n    <a href="#" class="close">×</a>\n    <p><strong>Error!</strong>  ',error_message,'.</p>\n</div>');}return __p.join('');
};


App.JST['user_show'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li>Name: ',name,'</li>\n<li>Last Name:  ',lastName,'</li>');}return __p.join('');
};


App.JST['user_user'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#show/',id,'"> ',name,' ',lastName,'</a>\n');}return __p.join('');
};


