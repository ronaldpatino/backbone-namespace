window.App = {
    model:  {},
    view:   {},
    collection: {},
    router:  {},
    util: {},

    init: function() {
        console.log('window.App Initialized')
        App.util.templates.loadTemplates(['user/list'],
            function () {
                new App.router.user();
                Backbone.history.start();
            });
    }
}
