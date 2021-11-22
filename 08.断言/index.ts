// tsc index.ts --outDir out

function toBoolean(anything:any){
    return anything === Boolean
}

toBoolean(2)

// 自己定义,不带语法提示
// declare var $:(slector:string)=>any;
// $('abc')
// 

// 本地装上类型提示,这样就可以补全了
// npm install @types/jquery  --save-dev
jQuery('abc').append
