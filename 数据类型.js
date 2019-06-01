var flag = true;
var num = 1;
var str = 'str';
var array1 = [1, 2];
var array2 = [null, 1, undefined];
var array3 = [1, '']; // 元组类型
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
//const array3:any[] = 1
