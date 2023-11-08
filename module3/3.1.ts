{
    // class and object
    class Animal {
        // name: string;
        // species: string;
        // sound: string;

        //Parameter Properties
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German kup vai", "Dog", "kupi kupi");

    const cat = new Animal("Mia Cat", "Cat", "Mew mew")

    cat.makeSound();







    //
}