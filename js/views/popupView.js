define([
    'backbone',
    'text!../templates/popup.html',
    '../models/MainModel',
    './buttonView'

], function(Backbone, myTemplate, MainModel, ButtonView){

    var popupView = Backbone.View.extend({

        tagName: 'div',

        className: 'wrapper-modal',

        model: new MainModel,

        template: _.template(myTemplate),

        events: {
            'click .close' : 'closePopup',
            'click .btn-default': 'closePopup'
        },

        initialize: function(){
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            this.$el.find('.modal-footer').append((new ButtonView(5, function(){
                this.remove();
            }.bind(this))).$el);
            this.$el.find('.modal.fade').addClass('in');
            return this;
        },

        closePopup: function(){
            this.remove();
        }





    });

    return popupView;

});