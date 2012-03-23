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

function() {
    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    // Remove page from DOM when it's being replaced
    $('div[data-role="page"]').live('pagehide', function (event, ui) {
        $(event.currentTarget).remove();
    });
    App.init();
});

