App.view.usuario = App.view.usuario || {}

App.view.usuario.list = Backbone.View.extend({

        tagName: 'div',

        initialize: function(options) {
            console.log('App.view.usuario.list Initialized');
            this.template = _.template(App.util.templates.get('usuario/list'));
        },

        render:function () {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });


