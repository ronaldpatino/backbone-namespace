window.App = {
    model:  {},
    view:   {},
    collection: {},
    router:  {},
    util: {},
    data: {},

    init: function() {
        console.log('window.App Initialized')
        App.util.templates.loadTemplates(['user/list','user/user'],
            function () {
                new App.router.user();
                Backbone.history.start();
            });
    }
}
