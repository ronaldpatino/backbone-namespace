window.App = {
    model:  {},
    view:   {},
    collection: {},
    router:  {},
    util: {},
    data: {},
    JST:{},
    userCollection: null,

    init: function() {
        console.log('window.App Initialized')
        new App.router.user();
        Backbone.history.start();
    }
}
