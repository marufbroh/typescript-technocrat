{
    // constraint using key of
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship";

    type Owner2 = keyof Vehicle;


    const getPropertyValue = <X,Y extends keyof X> (obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "Tamim",
        age: 23,
        address: "Narsingdi"
    }

    const result1 = getPropertyValue(user, "address")








    //
}