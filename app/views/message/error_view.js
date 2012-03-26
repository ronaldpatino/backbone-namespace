App.view.message = App.view.message || {}

App.view.message.error = Backbone.View.extend({

    initialize: function (options) {
        console.log('App.view.message.error Initialized');
        this.template = App.JST['message\error']
    },

    events: {

    },

    render: function () {
        $(this.el).empty();
        $(this.el).append(this.template(this.model));
        App.container.html($(this.el));
        return this;
    }

});


