App.view.user = App.view.user || {}

App.view.user.show = Backbone.View.extend({

    tagName: 'ul',

    initialize: function(options) {
        console.log('App.view.user.user Initialized');
        this.template = App.JST['user_show'];
    },

    render:function () {
        $(this.el).empty();
        $(this.el).append(this.template(this.model));
        App.contentHolder.html($(this.el));
        return this;
    }
});


