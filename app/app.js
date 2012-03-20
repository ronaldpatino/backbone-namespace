window.App = {
    model:  {},
    view:   {},
    collection: {},
    router:  {},
    util: {},
    data: {},
    userCollection: null,

    init: function() {
        console.log('window.App Initialized')
        App.util.templates.loadTemplates([
                                            'user/list',
                                            'user/user',
                                            'user/show'
                                        ],
            function () {
                new App.router.user();
                Backbone.history.start();
            });
    }
}
