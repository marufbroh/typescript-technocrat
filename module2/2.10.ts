{
    // mapped types

    const arrayOfNumbers: number[] = [1, 2, 3, 4, 5]

    const arrayOfString: string[] = ["1", "2", "3", "4", "5"]

    const arrayOfNumbersToString: string[] = arrayOfNumbers.map(number => number.toString())
    // console.log(arrayOfNumbersToString);

    type areaNumber = {
        height: number;
        width: number;
    }

    type height = areaNumber["height"] // lookup type

    // type areaString = {
    //     [key in keyof areaNumber]: string
    // }

    type areaString<T> = {
        [key in keyof T]: T[key]
    }

    const area1: areaString<{ height: string; width: number }> = {
        height: "25",
        width: 12,
    }





    //
}