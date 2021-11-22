// tsc index.ts --outDir out

type EventName = 'click'|'scroll'|'mousemove'

function handleEvent(ele:Element,eventName:EventName){
    ele.addEventListener(eventName,()=>{
    })
}

handleEvent(document.body,'click')

