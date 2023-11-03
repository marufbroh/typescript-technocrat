{

// leading function


// NOrmal function
function add(num1: number, num2: number): number {
    return num1 + num2
}

add(2, 2)

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> funtion --> method
const poorUser = {
    name: "Tamim",
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance
    }
}


const arr : number[] = [1,2,3,4];
const squareArray : number[] = arr.map((num : number) => num*num)

}