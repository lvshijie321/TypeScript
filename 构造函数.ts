class Person {
    public name:string // public 可省略 对象上的属性

    constructor(name:string) {
        this.name = name
    }
    
    work():void {} // prototype 上的函数

    getName():string {
        return this.name
    }

    setName(name:string):void {
        console.log(1111)
        this.name = name
    }
}

const person = new Person('zhangsan')
person.name = 'lise'
console.log(person)