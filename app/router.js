App.router.user = App.router.user || {}

App.router.user = Backbone.Router.extend({

    routes:{
        "/show/:id": "show",
        "*actions":"list"
    },

    initialize:function () {
        console.log('App.router.user Initialized');
    },

    list:function () {
        var userCollection = new App.collection.users();
        userCollection.create(new App.model.user({name:'Juan', lastName: 'Perez'}));
        userCollection.create(new App.model.user({name:'Pedro', lastName: 'Perez'}));
        userCollection.create(new App.model.user({name:'Abadala', lastName: 'Perez'}));

        $('#content').html( new App.view.user.list({model: userCollection}).render().el);
    }
});
