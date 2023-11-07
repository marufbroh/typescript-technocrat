{
    // generics type

    type GenericArray<T> = Array<T>

    // const rollNumbers : number[] = [1,2,3,4,5];
    const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

    // const students: string[] = ["Tamim", "Iqbal", "Maruf"];
    const students: GenericArray<string> = ["Tamim", "Iqbal", "Maruf"];

    // const bollArray: boolean[] = [true, false, true];
    const bollArray: GenericArray<boolean> = [true, false, true];

    type User = {
        name: string;
        age: number;
    }

    const user: GenericArray<User> = [
        {
            name: "Tamim",
            age: 23,
        },
        {
            name: "Tamim",
            age: 23,
        },
    ]


    // generic tuple

    type GenericTuple<X, Y> = [X, Y]

    const manush: GenericTuple<string, string> = ["Mr. X", "Ms. Y"]

    const userWithId: GenericTuple<number, { name: string; email: string }> = [123, { name: "Tamim", email: "marufbroh@gmail.com" }]




    //
}