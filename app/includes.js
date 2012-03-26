head.js(
'app/lib/jquery.js',
'app/lib/jquery.mobile.js',
'app/lib/underscore.js',
'app/lib/backbone.js',
'app/lib/backbone.localstorage.js',
'app/app.js',
'app/util.js',
'app/router.js',
'app/tpl/templates.js',
'app/models/user/user_model.js',
'app/collections/user/user_collection.js',
'app/views/user/user_view.js',
'app/views/user/list_view.js',
'app/views/user/show_view.js',
'app/views/message/error_view.js',
'app/views/message/about_view.js',

function() {

    $.extend($.mobile, {

        // Don't allow jQM to handle link clicks and form submissions through Ajax
        ajaxEnabled: false,

        // Prevent jQuery Mobile from handling hash changes so we can handle them in Backbone
        hashListeningEnabled: false,

        // Don't use history.replaceState at this time for browser compatibility reasons.
        pushStateEnabled: false,

        // Prevent all anchor click handling including the addition of active
        // button state and alternate link bluring.  This is we can allow Backbone
        // to handle these requests.
        linkBindingEnabled:false
    });

    $.mobile.changePage.defaults.changeHash = false;

    App.init();
});

