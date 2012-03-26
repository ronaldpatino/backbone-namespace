App.view.user = App.view.user || {}

App.view.user.show = Backbone.View.extend({

    tagName: 'ul',

    initialize: function(options) {
        console.log('App.view.user.user Initialized');
        this.template = App.JST['user\show'];
    },

    render:function () {
        $(this.el).empty();
        $(this.el).append(this.template(this.model));
        App.container.html($(this.el));
        return this;
    }
});


