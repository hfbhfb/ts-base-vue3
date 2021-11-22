// tsc index.ts --outDir out
function handleEvent(ele, eventName) {
    ele.addEventListener(eventName, function () {
    });
}
handleEvent(document.body, 'click');
