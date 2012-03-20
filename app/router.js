App.router.user = App.router.user || {}

App.router.user = Backbone.Router.extend({

    routes:{
        "/show/:id": "show",
        "*actions":"list"
    },

    initialize:function () {
        console.log('App.router.user Initialized');
        App.userCollection = new App.collection.users();
        App.userCollection.localStorage.create(new App.model.user({id: 1, name:'Juan', lastName: 'Perez'}));
        App.userCollection.localStorage.create(new App.model.user({id: 2, name:'Pedro', lastName: 'Perez'}));
        App.userCollection.localStorage.create(new App.model.user({id: 3, name:'Abadala', lastName: 'Perez'}));


    },

    list:function () {

        console.log(App.userCollection.localStorage.findAll())
        $('#content').html( new App.view.user.list({model: App.userCollection.localStorage.findAll()}).render().el);
    },

    show:function (id) {
        var user = App.userCollection.localStorage.find(new App.model.user({id: id}));
        $('#content').html(new App.view.user.show({model:user}).render().el);
    }
});
