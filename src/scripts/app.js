const slider = require('./common/slider')

slider();

$(document).ready(function() {

    setTimeout(function() {
        $('body').addClass('.loaded');
    }, 3000);


});