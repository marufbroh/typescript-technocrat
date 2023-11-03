{

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Tamim",
        age: 23,
        gender: "Male",
        contactNo: "01688855544",
        address: "Narsingdi"
    }


    const student2: Student = {
        name: "Oli",
        age: 22,
        gender: "Male",
        address: "Narsingdi"
    }


    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;



}