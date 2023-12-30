{
    // type guard

    // typeof --> type guard

    type Alphanumeric = string | number

    const add = (param1: Alphanumeric, param2: Alphanumeric): Alphanumeric => {

        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2
        } else {
            // concatenate "2" + "3" = 23
            // return (param1.toString()) + (param2.toString());

            // number 2+3 = 5
            return parseFloat(param1.toString()) + parseFloat(param2.toString());
        }

    }

    const result1 = add("2", "2")
    // console.log(result1);


    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        // in guard
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name} and my I am a normal user`); 
        }
    }

 const normalUser: NormalUser = {
    name: "Mr. Normal user"
 }

 const adminUser: AdminUser = {
    name: "Mr. Admin user",
    role: "admin"
 }

 getUser(adminUser)

    //
}