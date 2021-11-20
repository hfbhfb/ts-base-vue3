// tsc index.ts --outDir out


// 接口用来定义对象
interface Person{
    name:String;
    age:Number;
    // 可选对象属性
    gender?:string;
    // 添加任意属性
    [propName:string]:any
}

let tom:Person = {
    name:"何",
    age:18,
    helloworld:'你好',
    hellorld:'你好2222222',
}