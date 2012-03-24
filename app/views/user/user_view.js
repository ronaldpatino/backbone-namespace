App.view.user = App.view.user || {}

App.view.user.user = Backbone.View.extend({

    tagName: 'li',

    initialize: function (options) {
        console.log('App.view.user.user Initialized');
        this.template = App.JST['user\user'];

    },

    events: {

    },

    render: function () {
        $(this.el).html(this.template(this.model));
        
        return this;
    }

});


