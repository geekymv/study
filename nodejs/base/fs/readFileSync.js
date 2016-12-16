/**
 * Created by geekymv on 2016/12/16.
 */
'use strict'
 var fs = require('fs');
// 同步读取文件
try {
    var data = fs.readFileSync('sample.txt1', 'utf-8');
    console.log(data);
}catch (err) {
    console.log('err = ' + err);
}
