{
    //
    // Ternary, optional chaining & nullish coalescing operator
    const age: number = 20;

    // if (age >= 18) {
    //     console.log("adult");
    // } else {
    //     console.log("not adult");
    // }

    const isAdult = age >= 18 ? "adult" : "not adult"
    // console.log(isAdult);
    // null / undefined -->> decision making
    const isAuthenticated = "";
    const result1 = isAuthenticated ?? "Guest";
    const result2 = isAuthenticated ? isAuthenticated : "Guest";
    // console.log({ result1 }, { result2 });

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        }
    }

    const user: User = {
        name: "Tamim",
        address: {
            city: "Nar",
            road: "Stadium Road",
            presentAddress: "Nar town",
            // permanentAddress: "bong"
        }
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
    console.log({permanentAddress});





    //
}