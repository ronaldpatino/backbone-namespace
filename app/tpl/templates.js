
App.JST = App.JST || {}

App.JST["user\show"] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li>Name: ',name,'</li>\r\n<li>Last Name:  ',lastName,'</li>');}return __p.join('');
};


App.JST["user\user"] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<a href="#show/',id,'"> ',name,' ',lastName,'</a>');}return __p.join('');
};


App.JST["message\error"] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="alert alert-error">\r\n\r\n    <a href="#" class="close">×</a>\r\n    <p><strong>Error!</strong>  ',error_message,'.</p>\r\n</div>');}return __p.join('');
};


App.JST["user\list"] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('THE BEST BASS PLAYERS');}return __p.join('');
};


