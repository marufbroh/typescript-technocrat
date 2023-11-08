{
    // abstraction  : 1. interface 2. abstract

    // idea
    interface Vehicle1 {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    // real implementations
    class Car1 implements Vehicle1 {
        startEngine(): void {
            console.log("im staring the car engine");
        }

        stopEngine(): void {
            console.log("im stoping the car engine");
        }
        move(): void {
            console.log("im moving");
        }
        test() {
            console.log("Im just testing");
        }
    }

    const toyotaCar = new Car1();
    toyotaCar.startEngine();

    // idea
    abstract class Car2 {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log("Im just testing");
        }
    }

    // real implementations
    class HondaCar extends Car2{
        startEngine(): void {
            console.log("im staring the car engine");
        }

        stopEngine(): void {
            console.log("im stoping the car engine");
        }
        move(): void {
            console.log("im moving");
        }
    }

    const hondaCar = new HondaCar();
    hondaCar.test();
    





    //
}