{

    // union types
    // type FrontendDeveloper = "bongbangDeveloper" | "juniorDeveloper";

    // const newDeveloper: FrontendDeveloper = "juniorDeveloper";

    type User = {
        name: string;
        email?: string;
        gender: "Male" | "Female"; // union type
        bloodGroup: "O+" | "A+" | "AB+";
    }

    const user1 : User= {
        name: "Tamim",
        gender: "Male", // example of union type
        bloodGroup: "O+",
    }


    // Intersection types
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer"
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer"
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "EXPRESS"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer"
    }

}