{
    // asynchronous typescript

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const url = "https://jsonplaceholder.typicode.com/todos"
        const response = await fetch(url);
        const data: Todo = await response.json();
        return data
        console.log(data);

    }

    getTodo();

    // type Something = {
    //     something: string
    // }

    // const createPromise = (): Promise<Something> => {
    //     return new Promise<Something>((resolve, reject) => {
    //         const data: Something = { something: "something" }
    //         if (data) {
    //             resolve(data)
    //         } else {
    //             reject("Failed to load data")
    //         }
    //     })

    // }


    // const showData = async (): Promise<Something> => {
    //     const data: Something = await createPromise();
    //     return data
    //     // console.log(data);
    // }

    // showData();





    //
}