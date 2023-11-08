{
    // inheritance in OOP

    class Person {
        name: string;
        age: number;
        address: string;

        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }
    }

    class Student extends Person {

        constructor(name: string, age: number, address: string) {
            super(name, age, address)
        }

    }


    const student1 = new Student("Tamim", 23, "Narsingdi")
    student1.getSleep(5)




    class Teacher extends Person {
        designation: string;

        constructor(name: string, age: number, address: string, designation: string) {
            super(name, age, address)
            this.designation = designation;
        }

        getSleep(numOfHours: number) {
            console.log(`${this.name} will sleep for ${numOfHours}`);
        }

        takeClass(numOfClass: number) {
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }


    const teacher1 = new Teacher("Maruf", 43, "Narsingdi", "Teacher")

    teacher1.takeClass(4)






    //
}