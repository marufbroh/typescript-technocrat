{
    // class and object
    class Animal {
        name: string;
        species: string;
        sound: string;

        //Parameter Properties
        constructor(name: string, species: string, sound: string) {
            this.name = name;
            this.species = species;
            this.sound = sound;
        }

        // method
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German kup vai", "Dog", "kupi kupi");

    const cat = new Animal("Mia Cat", "Cat", "Mew mew")

    cat.makeSound();
    //
}



{
    // class and object
    class Animal {

        //Parameter Properties Public
        constructor(public name: string, public species: string, public sound: string) { }

        // method
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal("German kup vai", "Dog", "kupi kupi");

    const cat = new Animal("Mia Cat", "Cat", "Mew mew")

    cat.makeSound();
    //
}