App.collection.users = App.collection.users || {}

App.collection.users = Backbone.Collection.extend({

    model: App.model.user,

    localStorage: new Backbone.LocalStorage("userCollection"),

    initialize: function() {
        console.log('App.collection.user Initialized');
    }
});