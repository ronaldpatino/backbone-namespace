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
                                            'user/user',
                                            'user/show',
                                            'message/error'
                                        ],
            function () {
                new App.router.user();
                Backbone.history.start();
            });
    }
}
