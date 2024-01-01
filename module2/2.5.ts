{
    // Function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param]
    }

    type User = {
        id: number;
        name: string;
    }

    const res1 = createArray('tamim')
    const res2 = createArrayWithGeneric<string>("maruf")
    const res3 = createArrayWithGeneric<User>({ id: 123, name: "Tamim" })


    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    const res4 = createArrayWithTuple<string, number>('tamim', 10)
    const res5 = createArrayWithTuple<string, { name: string }>("maruf", { name: "Asia" })
    const res6 = createArrayWithTuple<User, number>({ id: 123, name: "Tamim" }, 10)


    const addCourseToStudent = <T>(student: T) => {
        const course: string = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }


    const student1 = addCourseToStudent<{ id: number; name: string }>({ id: 1, name: "Tamim" })
    const student2 = addCourseToStudent<{ id: number; name: string }>({ id: 2, name: "Maruf" })
    // const student3 = addCourseToStudent<string>("tamim")
    console.log(student2);

    //
}