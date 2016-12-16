/**
 * Created by geekymv on 2016/12/16.
 * Node.js标准的回调函数：第一个参数代表错误信息，第二个参数代表结果。
 *
 */
'use strict'
var fs = require('fs');

// 异步读取文件
fs.readFile('sample.txt', 'utf-8', function(err, data) {
    if(err) {
        console.log(err);
    }else {
        console.log(data);
    }
});
