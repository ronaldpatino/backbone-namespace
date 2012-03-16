App.router.usuario = App.router.usuario || {}

App.router.usuario = Backbone.Router.extend({

    routes:{
        "":"usuario"
    },

    initialize:function () {
        console.log('App.router.usuario Initialized');
    },

    usuario:function () {
        $('#content').html( new App.view.usuario.list({model: new App.model.usuario()}).render().el);
    }
});
