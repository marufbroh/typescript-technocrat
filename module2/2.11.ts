{
    // utility types

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">;

    type ContactInfo = Omit<Person, "name" | "age">;

    type PersonRequired = Required<Person>

    type PersonPartial = Partial<Person>

    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly ={
        name: "Tamim Iq",
        age: 23,
        email: "maruf@gmail.com",
        contactNo: "017"
    }

    // person1.age = 200

    type MyObj = Record<string, string>;

    const emptyObj : Record<string, unknown> = {}

    const obj1: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd"
    }


    //
}