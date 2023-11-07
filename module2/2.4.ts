{
    // Generic with Interface

    interface Developer<T, Y = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike?: Y;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
        name: "Tamim",
        computer: {
            brand: "Asus",
            model: "X-255UR",
            releaseYear: 2013
        },

        smartWatch: {
            brand: "Emilab",
            model: "kw66",
            display: "Oled"
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    type Bike = {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper: Developer<AppleWatch, Bike> = {
        name: "Maruf",
        computer: {
            brand: "HP",
            model: "X-255UR",
            releaseYear: 2015
        },

        smartWatch: {
            brand: "Apple",
            model: "Anything",
            heartTrack: true,
            sleepTrack: true
        },

        bike: {
            model: "Yamaha Fzs Deluxe",
            engineCapacity: "149CC"
        }
    }









    //
}