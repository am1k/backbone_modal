define([
    'backbone',
    'text!../templates/button.html',
    '../models/TimerModel'

], function(Backbone, myTemplate, TimerModel){

    var buttonView = Backbone.View.extend({

        tagName: 'div',

        idName: '#close-popup',

        template: _.template(myTemplate),
        events: {
            'click': 'action'
        },

        initialize: function(time, cb){
            this.action = function(){
                this.remove();
                cb();
            };
            this.model = new TimerModel({
                time: time
            });
            this.listenTo(this.model, 'change:time', function(){
                this.render();
            });
            this.listenTo(this.model, 'change:finished', this.action);
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            return this;
        }
    });

    return buttonView;

});