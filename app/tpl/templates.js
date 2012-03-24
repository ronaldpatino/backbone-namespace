App.JST = App.JST || {};

App.JST['message\error'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<div class="alert alert-error">\n\n    <a href="#" class="close">×</a>\n    <p><strong>Error!</strong>  ',error_message,'.</p>\n</div>');}return __p.join('');
};


App.JST['user\user'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-inline="false" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="g" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-g"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#show/',id,'" class="ui-link-inherit"><a href="#show/',id,'"> ',name,' ',lastName,'</a></a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow"></span></div></li>\n');}return __p.join('');
};


App.JST['user\list'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<ul data-role="listview" data-theme="g" id=\'list_view\'></ul>');}return __p.join('');
};


App.JST['user\show'] = function anonymous(obj,_) {
var __p=[],print=function(){__p.push.apply(__p,arguments);};with(obj||{}){__p.push('<li>Name: ',name,'</li>\n<li>Last Name:  ',lastName,'</li>');}return __p.join('');
};
