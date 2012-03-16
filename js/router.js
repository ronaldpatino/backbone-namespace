App.router.user = App.router.user || {}

App.router.user = Backbone.Router.extend({

    routes:{
        "":"user"
    },

    initialize:function () {
        console.log('App.router.user Initialized');
    },

    user:function () {
        $('#content').html( new App.view.user.list({model: new App.model.user()}).render().el);
    }
});
