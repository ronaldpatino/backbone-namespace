App.model.usuario = App.model.usuario || {}

App.model.usuario = Backbone.Model.extend({

    defaults: {
        'nombre' : 'Ronald',
        'apellido': 'Patino'
    },

    initialize: function() {
        console.log('App.model.usuario Initialized');
    }
});