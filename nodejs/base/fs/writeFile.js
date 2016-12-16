/**
 * Created by geekymv on 2016/12/16.
 */
'use strict'
var fs = require('fs');
var data = 'hello world 大家好';
fs.writeFile('output.txt', data, function(err) {
    if(err) {
        console.log(err);
    }else {
        console.log('ok');
    }
});


