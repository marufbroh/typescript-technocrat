{

    // learn spreed operators

    const bros1: string[] = ["tamim", "iqbal", "maruf"];
    const bros2: string[] = ["tamim", "iqbal", "maruf"];

    bros1.push(...bros2)

    const mentors1 = {
        typescript: "Mizba",
        redux: "Mir",
        dbms: "Mizan"
    }

    const mentors2 = {
        prizma: "Firoz",
        nextjs: "Tonmoy",
        cloud: "Nahid"
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }


    ///leann rest operators

    const greetingFriends = (...friends: string[]) => {
        friends.forEach((friend : String) => {
            console.log(`Hi ${friend}`);
        });
    }

greetingFriends("Abul", "Babul", "kabul")






}