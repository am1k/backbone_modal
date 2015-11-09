define(['backbone'], function(Backbone) {

    var TimerModel = Backbone.Model.extend({

        defaults: {
            time: 0
        },

        initialize: function(){
            this.start();
        },

        start: function(){
            this.timer = setInterval(this.countdown.bind(this),1000);
        },

        countdown: function(){
            this.set('time', this.get('time') - 1);
            if(this.get('time') <= 0 ){
                this.set('finished', true);
                clearInterval(this.timer);
            }
        }

    });

    return TimerModel;
});