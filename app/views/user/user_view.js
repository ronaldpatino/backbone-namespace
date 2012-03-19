App.view.user = App.view.user || {}

App.view.user.user = Backbone.View.extend({

    tagName: 'li',

    initialize: function (options) {
        console.log('App.view.user.user Initialized');
        this.template = _.template(App.util.templates.get('user/user'));
    },

    events: {
        "click :li": 'alerta'
    },

    render: function () {
        $(this.el).html(this.template(this.model.toJSON()));
        return this;
    },

    alerta: function () {
        console.log('alerta');
    }
});


