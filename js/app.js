/**
 * Created by v.bogoroditskiy on 11/5/2015.
 */

requirejs.config({
    baseUrl: 'js/lib',
    paths:{
        jquery: 'jquery-2.1.4.min',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text',
        stickit: 'backbone.stickit'
    }
});

require([
        '../views/mainView',
        'stickit'
    ],
    function(App) {
        new App();
    }
);