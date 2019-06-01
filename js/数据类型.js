"use strict";
var flag = true;
var num = 1;
var str = 'str';
var array1 = [1, 2];
var array2 = [null, 1, undefined];
// 元组类型
var array3 = [1, ''];
// 枚举类型
var Flag1;
(function (Flag1) {
    Flag1[Flag1["success"] = 1] = "success";
    Flag1[Flag1["fail"] = 2] = "fail";
})(Flag1 || (Flag1 = {}));
var flag1 = Flag1.success;
var Flag2;
(function (Flag2) {
    Flag2[Flag2["blue"] = 0] = "blue";
    Flag2[Flag2["orange"] = 1] = "orange";
})(Flag2 || (Flag2 = {}));
var flag2 = Flag2.blue;
console.log(flag2);
// undefined 类型
var nnnn;
console.log(nnnn); // 报错，解决方法如下
var num2;
// null 类型
var num3;
var o = document.getElementById('id');
var str1 = '';
//void 类型
// 方法没有返回任何类型
function run() {
}
// never 类型
var nn;
nn = (function () {
    throw new Error('');
})();
//const array3:any[] = 1
