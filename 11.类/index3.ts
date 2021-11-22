
// tsc index3.ts --outDir out

interface music{
    playMusic():void
}

interface light{
    open():void
    close():void
}

class LandCar{
    showLandCarInfo(){
        console.log('can run on load')
    }
}

class car extends LandCar implements light,music{
    playMusic(){
        console.log('car playMusic')
    }
    open(){
        console.log('car open')
    }
    close(){
        console.log('car close')
    }
}

let car1 = new car()
car1.playMusic()
car1.showLandCarInfo()
car1.open()
car1.close()



