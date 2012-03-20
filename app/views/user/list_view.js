App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

        tagName: 'ul',

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
            this.template = _.template(App.util.templates.get('user/list'));
        },

        render:function () {
            _.each(this.model, function (usuario) {
                $(this.el).append(new App.view.user.user({model:usuario}).render().el);
            }, this);
            return this;
        }
    });


