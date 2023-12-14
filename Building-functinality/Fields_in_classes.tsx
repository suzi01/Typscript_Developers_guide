class Vehicle {
    constructor(public color:string ) {
        this.color = color;
    }

    protected honk() : void {
        console.log('beep');
    }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color)

class Car extends Vehicle {
    constructor(public wheels:number, color:string){
        super(color);
    }

    startDrivingProcess(): void {
        this.honk();
    }
}

const car = new Car(4, 'red');
