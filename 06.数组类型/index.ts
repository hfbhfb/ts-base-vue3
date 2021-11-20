// tsc index.ts --outDir out


let arrnum:number[]=[1,2,34,5,5,5,5,5]
let arrstr:string[]=['1kdf',"kdjsf","中国"]

let arrnum2:Array<number> =[8,8,8,9]
console.log(arrnum2[1])


interface NumberArray{
    [index:number]:number
}
let numarr:NumberArray = [12,1,1,1,11,]


function sum(...argsaa){
    let args:IArguments = arguments
    console.log(argsaa[0])
}

sum(1,2,3,4,5)

