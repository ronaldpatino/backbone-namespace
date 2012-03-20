App.view.message = App.view.message || {}

App.view.message.error = Backbone.View.extend({

    initialize: function (options) {
        console.log('App.view.message.error Initialized');
        this.template = _.template(App.util.templates.get('message/error'));
    },

    events: {

    },

    render: function () {
        $(this.el).html(this.template(this.model));
        return this;
    }

});


