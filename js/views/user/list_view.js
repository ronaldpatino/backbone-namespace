App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

        tagName: 'div',

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
            this.template = _.template(App.util.templates.get('user/list'));
        },

        render:function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });


