App.router.user = App.router.user || {}

App.router.user = Backbone.Router.extend({

    routes:{
        'about':       'about',
        'show/:id':    'show',
        '*actions':     'list'
    },

    initialize:function () {
        console.log('App.router.user Initialized');

        App.userCollection = new App.collection.users();
        localStorage.clear();
        App.userCollection.create(new App.model.user({uid: 1, name:'Cliff', lastName: 'Burton'}));
        App.userCollection.create(new App.model.user({uid: 2, name:'Steve', lastName: 'Harris'}));
        App.userCollection.create(new App.model.user({uid: 3, name:'Alejandro', lastName: 'Blanco'}));

    },

    list:function () {
        var vista = new App.view.user.list({model: App.userCollection.findAll()});
        vista.render();

    },

    show:function (id) {
        var user = App.userCollection.localStorage.find(new App.model.user({id: id}));
        if (user)
        {
            var vista = new App.view.user.show({model:user});
            vista.render();
        }
        else
        {
            var model = {error_message: 'User not found'};
            var error = new App.view.message.error({model:model});
            error.render();

        }
    },

    about:function () {
        var model = {about_message: 'About this app'};
        var about = new App.view.message.about({model:model});
        about.render();

    }
});
