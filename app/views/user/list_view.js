App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

       tagName: 'span',

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
            this.template = App.JST['user\list'];
        },

        render:function () {

            // Set the template for the list_view component
            $(this.el).html(this.template());
            // Add each user to the list
            _.each(this.model, function (user) {
                $('#list_view', this.el).append(new App.view.user.user({model:user}).render().el);

            }, this);

            return this;
        }
    });


