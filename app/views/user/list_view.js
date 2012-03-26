App.view.user = App.view.user || {}

App.view.user.list = Backbone.View.extend({

        tagName: 'ul',
        id: 'activities-list',
        attributes:{'data-role': 'listview','data-theme':'c' ,'class':'ui-listview'},

        initialize: function(options) {
            console.log('App.view.user.list Initialized');
        },

        render:function () {
            // Add each user to the list
            $(this.el).empty();
            _.each(this.model, function (user) {
                $(this.el).append(new App.view.user.user({model:user}).render().el);
            },this);

            App.contentHolder.html($(this.el));
            return this;
        }
    });


