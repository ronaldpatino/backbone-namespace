App.collection.users = App.collection.users || {}

App.collection.users = Backbone.Collection.extend({

    model: App.model.user,

    localStorage: new Backbone.LocalStorage("UsersCollection"),

    initialize: function() {
        console.log('App.collection.user Initialized');
    },

    create: function(user) {
        this.localStorage.create(user);
    },

    save: function() {
        this.localStorage.save();
    },

    update: function(model) {
        this.localStorage.update(model);
    },

    findAll: function() {
        return this.localStorage.findAll();
    },

    find: function(model) {
        return this.localStorage.find(model);
    },

    destroy: function(model) {
        this.localStorage.destroy(model);
    }




});