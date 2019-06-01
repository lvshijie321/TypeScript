// 函数表达式
const fun1 = function():number {
    return 1
}
// 函数声明
function fun2():string {
    return ''
}

function getInfo(name:string, age:number): string {

    return `${name}---${age}`
}

getInfo(1,1);

function do11():void {
    return 1
}

// 函数可选参数
function param(name:string, age?:number):void {}
param('zhangsan', 1)
param('lisi')

// 函数默认参数
function paramDefault(age:number = 1):number {
    return age
}
console.log(paramDefault())

// 扩展运算符
function rest(...res:any[]):number {
    return res.reduce((acc,item) => acc+item)
}
console.log(rest(1,2,3))

//函数重载
function reload(name:string):string;
function reload(name:string,age:number):number;

function reload(name:string,age?:number):string|number{
    if (age) {
            //...
    }
    return name
}

(() => console.log(this===window))()