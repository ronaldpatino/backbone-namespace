App.model.user = App.model.user || {}

App.model.user = Backbone.Model.extend({

    defaults: {
        'uid':0,
        'name' : 'Ronald',
        'lastName': 'Patino'
    },

    initialize: function() {
        console.log('App.model.user Initialized');
    }
});