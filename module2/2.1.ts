{
    //

    // Type assertion
    let anything: any;

    anything = "Next Level Web Development";

    anything = 123;

    // (anything as string).

    const kgToGm = (value: number | string): string | number | undefined => {
        if (typeof value === "number") {
            const convertedValue = value * 1000;
            return convertedValue;
        }
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `The converted value is ${convertedValue}`;
        }

    }

    const result1 = kgToGm("12") as string;



    type CustomError = {
        message: string;
    }

    try {

    } catch (error) {
        console.log((error as CustomError).message);
    }






    //
}