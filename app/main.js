'use strict';

var calculator = require('./calculator'),
    $ = require('../node_modules/jquery/dist/jquery'),
    number1 = $('#number1'),
    number2 = $('#number2');


$('#sum').on('click', function () {
    var value1 = parseInt(number1.val()),
        value2 = parseInt(number2.val());

    alert(calculator().sum(value1, value2));
});

