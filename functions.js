/*
    ! Functions : 
    * So far we have seen many builtin JavaScript functions. In the section, we will focus on customs functions. What is a function? before we
    * start making functions, lets understand what functions is and why we need actions?
    
    * A function is a reusable block of code or programming statements designed to perform a certain task. A function is declared by a function 
    * key word followed by a name, followed by parentheses.(). A parantheses can take a parameter. If a function take a parameter it will be called
    * with argument. A function can also take a default parameter. to store a data to a function, a function has to return certain data types. 
    * to get the value we call or invoke a function. Function makes code.
    * clean and easy to read
    * reusable
    * easy to test


    * A function can be declared or created in couple of ways :
    * Declaration function
    * Expression function
    * Anonymous function
    * Arrow function
*/
/*
    ! Function Declaration
    * Let us see how to declare a function and how to call a function.

    declaring a function without a parameter
    function functionName(){
        code goes here
    }
    functionName() - calling function by its name and with parentheses
*/

/*
    ! Function without a parameter and return 
    * Function can be declared without a parameter.

*/
    // ! function without parameter, a function which make a number square
    function square(){
        let num=2;
        let sq=num*num;
        console.log(sq);
    }   
        square(); // 4

    // ! function without parameter
    function addTwoParameter(){
        let numOne=10;
        let numTwo=20;
        let sum=numOne+numTwo;
        console.log(sum);
    }
        addTwoParameter(); // a function has to be called by its name to be executed., 30

    function printFullName(){
        let firstName="Onur";
        let secondName="Yetayeh";
        let space='  ';
        let fullName=firstName+space+secondName;
        console.log(fullName);
    }
    printFullName(); // calling a function

