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

        initialize: function(options){
            this.model = new TimerModel({
                time: options.time
            });
            this.listenTo(this.model, 'change:time', function(){
                this.render();
            });
            this.listenTo(this.model, 'change:finished', this.action);
            this.render();
            return this;
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            return this;
        },
        action: function(){
            try{
                this.parent.close();
            }catch(e){
                new Error('parent view isn\'t exist');
            }
        }

    });

    return buttonView;

});