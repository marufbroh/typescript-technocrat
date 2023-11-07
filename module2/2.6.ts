{
    // constraints in typescript

    const addCourseToStudent = <T extends {id: number; name: string; email: string }>(student: T) => {
        const course: string = "Next Level Web Development";
        return {
            ...student,
            course
        }
    }

    type Student = {
        id: number;
        name: string;
        email: string;
        devType?: string;
        hasWatch?: string;
        emni?: string;
    }

    const student1 = addCourseToStudent<Student>({ id: 1, name: "Tamim", email: "tamim@gmail.com", devType: "NLWD" })
    const student2 = addCourseToStudent<Student>({ id: 2, name: "Maruf", email: "maruf@gmail.com", hasWatch: "Apple Watch" })
    const student3 = addCourseToStudent<Student>({ id: 3, name: "Mr. X", email: "x@gmail.com", emni: "emni" })





    //
}