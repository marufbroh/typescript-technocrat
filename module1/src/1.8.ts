{

    // object Destructuring

    const user = {
        id: 123,
        name: {
            firstName: "Tamim",
            middleName: "Iqbal",
            lastName: "Maruf"
        },
        contactNo: "01600000000",
        address: "Narsingdi"
    }

    // const { contactNo, name: { lastName } } = user;

    // destructuring and name alias
    const {address, name: {middleName: midName}, contactNo} = user;



    // array Destructuring

    const myFriends = ["tamim", "iqbal", "maruf", "bongbang", "tongtang"];
    const [, bestFriend, ...rest] = myFriends;

}