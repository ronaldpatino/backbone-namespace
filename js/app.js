window.App = {
    model:  {},
    view:   {},
    collection: {},
    router:  {},
    util: {},

    init: function() {
        console.log('window.App Initialized')
        App.util.templates.loadTemplates(['usuario/list'],
            function () {
                new App.router.usuario();
                Backbone.history.start();
            });
    }
}
