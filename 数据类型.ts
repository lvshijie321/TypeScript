var flag: boolean = true;
var num: number = 1
var str: string = 'str'
var array1: number[] = [1, 2];
var array2: Array<number> = [null, 1, undefined]

// 元组类型
var array3: [number, string] = [1, '']

// 枚举类型
enum Flag1 {
    success = 1,
    fail = 2,
}
var flag1: Flag1 = Flag1.success

enum Flag2 {
    blue,
    orange
}
var flag2: Flag2 = Flag2.blue
console.log(flag2)

// undefined 类型

var nnnn: number
console.log(nnnn) // 报错，解决方法如下


var num2: number | undefined;
// null 类型
var num3: number | null;


var o = document.getElementById('id');
var str1: string = ''

//void 类型
// 方法没有返回任何类型
function run(): void {

}
// never 类型
var nn: never

nn = (() => {
    throw new Error('')
})()
//const array3:any[] = 1