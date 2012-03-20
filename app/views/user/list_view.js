App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

        tagName: 'ul',

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
        },

        render:function () {
            _.each(this.model, function (user) {
                $(this.el).append(new App.view.user.user({model:user}).render().el);
            }, this);

            return this;
        }
    });


