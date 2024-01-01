{
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    interface User2 {
        name: string;
        age: number;
    }

    // type alias intersection
    type UserWithRole1 = User1 & { role: string; }

    // interface intersection
    interface UserWithRole2 extends User2 {
        role: string;
    }

    const user1: UserWithRole2 = {
        name: "Tamim",
        age: 23,
        role: "20"
    }

    type RollNumber = number  // but i cant do it in interface



    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number;
    }

    const rollNumbers1: Roll2 = [1, 2, 3];

    interface IRoll {
        [index: number]: string;
    }

    const rollNumbers2: IRoll = ["1", "2", "3"];


    type Add1 = (num1: number, num2: number) => number;

    // interface for function
    interface Add2 {
        (num1: number, num2: number): number;
    }

    const add: Add2 = (num1, num2) => num1 + num2;

    // add(12, 15);










    //
}