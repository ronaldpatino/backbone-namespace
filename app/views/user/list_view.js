App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

       tagName: 'ul',

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
        },

        render:function () {
            // Add each user to the list
            _.each(this.model, function (user) {
                $(this.el).append(new App.view.user.user({model:user}).render().el);
            }, this);

            $(this.el).attr('data-role','listview');
            $(this.el).attr('data-theme','c');
            $(this.el).attr('class','ui-listview');
            return this;
        }
    });


