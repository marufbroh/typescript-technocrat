{
    // instanceof guard

    // class Animal {
    //     name: string;
    //     species: string;

    //     constructor(name: string, species: string) {
    //         this.name = name;
    //         this.species = species;
    //     }

    //     makeSound() {
    //         console.log("He is making sound");
    //     }
    // }

    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("He is making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeBark() {
            console.log("He is barking");
        }
    }

    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log("He is meawing");
        }
    }


    // const getAnimal = (animal: Animal) => {
    //     if (animal instanceof Dog) {
    //         animal.makeBark()
    //     } else if (animal instanceof Cat) {
    //         animal.makeMeaw()
    //     } else {
    //         animal.makeSound()
    //     }
    // }


    // smart way for smart developer
    const isDog = (animal: Animal): animal is Dog => {
        return animal instanceof Dog;
    }

    const isCat = (animal: Animal): animal is Cat => {
        return animal instanceof Cat;
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        } else if (isCat(animal)) {
            animal.makeMeaw();
        } else {
            animal.makeSound();
        }
    }




    // instance
    const dog = new Dog("Dog bhai", "Dog");
    const cat = new Cat("Cat bhai", "Cat")
    // cat.makeMeaw()

    getAnimal(cat)






    //
}