// tsc index.ts --outDir out

function sum(a:number,b:number):number{
    return a+b
}
// sum(1)
sum(1,2)



let x= function(a:number,b:number): void{
    console.log('你好')
}
x(1,2)

let y = (x:number,b:number):number => x*b;
console.log(y(5,6))


interface SearchFn{
    (keyword:string,type:string):string;
}

let mySearch:SearchFn = function(keyword,type){
    return "111"
}
mySearch("a","b")


function abcde(x:number):number;
function abcde(x:string):string;
function abcde(x:number|string):number|string{
    if(typeof x == 'number'){
        return x+6;
    }else{
        return x+ "何";
    }
}
abcde(3)
let m = 3
// m = abcde("sfk")  // ts提示报错
m = abcde(7)




