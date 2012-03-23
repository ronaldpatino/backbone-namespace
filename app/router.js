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
        this.changePage( new App.view.user.list({model: App.userCollection.findAll()}));
    },

    show:function (id) {
        var user = App.userCollection.localStorage.find(new App.model.user({id: id}));
        if (user)
        {
            $('#content').html(new App.view.user.show({model:user}).render().el);
        }
        else
        {
            var model = {error_message: 'User not found'};
            $('#content').html(new App.view.message.error({model:model}).render().el);
        }
    },

    about:function () {
        console.log('ABOUT')
        $('#content').html('About');
    },

    changePage:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        $.mobile.changePage($(page.el), {changeHash:false});
    }
});
