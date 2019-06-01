"use strict";
var _this = this;
// 函数表达式
var fun1 = function () {
    return 1;
};
// 函数声明
function fun2() {
    return '';
}
function getInfo(name, age) {
    return name + "---" + age;
}
getInfo(1, 1);
function do11() {
    return 1;
}
// 函数可选参数
function param(name, age) { }
param('zhangsan', 1);
param('lisi');
// 函数默认参数
function paramDefault(age) {
    if (age === void 0) { age = 1; }
    return age;
}
console.log(paramDefault());
// 扩展运算符
function rest() {
    var res = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        res[_i] = arguments[_i];
    }
    return res.reduce(function (acc, item) { return acc + item; });
}
console.log(rest(1, 2, 3));
function reload(name, age) {
    if (age) {
        //...
    }
    return name;
}
(function () { return console.log(_this === window); })();
