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
            'click .close' : 'close'
        },

        initialize: function(){
            this.childrenViews = [];
            this.render();
        },

        render: function(){
            this.$el.html(this.template(this.model.toJSON() ));
            this.appendChildView(new ButtonView({time: 5}), '.modal-footer');
            //this.$el.find('.modal-footer').append((new ButtonView(5)).$el);
            //http://stackoverflow.com/questions/31963596/backbonejs-is-passing-a-parents-element-reference-to-a-child-view-a-good-pract

            this.$el.find('.modal.fade').addClass('in');
            return this;
        }
    });

    // вынос глобально метода для закрытия
    Backbone.View.prototype.close = function(){
        this.childrenViews && this.childrenViews.forEach(function(view){
            view.close();
        });

        this.remove();
    };

    // вынос глобально для нахождения дочерних вью
    Backbone.View.prototype.appendChildView = function(view, element){
        this.childrenViews.push(view);
        //проброс дочернего вью в родительный
        view.parent = this;
        this.$el.find(element).append((view).$el);
    };

    return popupView;

});