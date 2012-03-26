App.view.message = App.view.message || {}

App.view.message.about = Backbone.View.extend({

    initialize: function (options) {
        console.log('App.view.message.about Initialized');
        this.template = App.JST['message_about']
    },

    events: {

    },

    render: function () {
        $(this.el).empty();
        $(this.el).append(this.template(this.model));
        App.contentHolder.html($(this.el));
        return this;
    }

});


