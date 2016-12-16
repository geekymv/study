/**
 * Created by geekymv on 2016/12/16.
 */
'use strict'
var s = 'hello';
function greet(name) {
    console.log(s + ',' + name + '!');
}
module.exports = greet;

// 关于module.exports与exports的区别见http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434502419592fd80bbb0613a42118ccab9435af408fd000
// 建议使用module.exports