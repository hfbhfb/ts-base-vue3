// tsc index.ts --outDir out

class GenAny<T=string>{
    value:T;
    add:(x:T,y:T)=>T;
}

let myNum = new GenAny<number>()
myNum.value = 1
myNum.add = (x,y)=>{
    return x+y
}
myNum.add(3,4)


let myStr = new GenAny<string>()
myStr.value="111"
myStr.add=(x,y)=>{
    return x+y
}

