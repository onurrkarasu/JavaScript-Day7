/*
    ! Arrow functions : 
    Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.
    arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.
*/

// this is how we write normal or declaration function
// let us change this declaration function to an arrow function
function square(n){
    return n*n;
}
console.log(square(2));

// * Arrow Function
const squares = n => {
    return n*n;
}
console.log(squares(2)); 

// ! if we have only one line in the block, it can be written as follows, explicit return
const square2=n=>n*n;


const changeToUpperCase= arr =>{
    const newArr=[];
    for(const element of arr){
        newArr.push(element.toUpperCase());
    }
    return newArr;
}
const countries=['Finland','Sweden','Norway','Denmark','Iceland'];
console.log(changeToUpperCase(countries));

const printFullname=(firstName,lastName)=>{
    return `${firstName} , ${lastName}`;
}
console.log(printFullname('Asabeneh','Yateyeh'));

// ! The above function has only the return statement, therefore, we can explicitly return it as follows.
const printsFullName=(firstName,lastName)=>`${firstName} and ${lastName}`;
console.log(printsFullName('Onur','İlkcan'));