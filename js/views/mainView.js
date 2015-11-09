/**
 * Created by v.bogoroditskiy on 11/5/2015.
 */

define([
    'backbone',
    'text!../templates/main.html',
    '../models/MainModel',
    './popupView'

], function(Backbone, myTemplate, MainModel, PopupView){

   var mainView = Backbone.View.extend({

       el: '#applications',

       model: new MainModel,

       template: _.template(myTemplate),

       events: {
           'click #btn' : 'openPopup'
       },

       initialize: function(){
           this.render();
       },

       render: function(){
           this.$el.html(this.template(this.model.toJSON() ));
           return this;
       },

       openPopup: function(e){
           e.preventDefault();
           this.$el.find('.popup').append((new PopupView()).$el);
       }

   });

   return mainView;

});