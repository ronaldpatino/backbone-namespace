App.view.user = App.view.user || {}

App.view.user.show = Backbone.View.extend({

    tagName: 'ul',

    initialize: function(options) {
        console.log('App.view.user.user Initialized');
        this.template = App.JST['user\show'];
    },

    render:function () {
        $(this.el).html(this.template(this.model));
        return this;
    }
});


