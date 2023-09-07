/*
    ! Function with a parameter
    * In a function we can pass different data types(number,string,boolean,object,function) as a parameter.

    function functionName(param1){
        code goes here
    }
    functionName(param1) during calling or invoking one argument needed.
*/

    // ! one parameter
    function areaOfCircle(r){
        let area=Math.PI*r*r;
        return area;
    }
    console.log(areaOfCircle(10)); // should be called with one argument

    function square(number){
        return number*number;
    }
    console.log(square(10)); 

    // ! two parameter
/*
    function functionName(param1,param2){
        code goes here
    }
*/
    function sum(num1,num2){
        let sum=num1+num2;
        console.log(sum);
    }
    sum(10,21);

    function minusTwoParameter(numOne,numTwo){
        let minus=numOne-numTwo;
        return minus;
    }
    console.log(minusTwoParameter(41,40));

    function personelİnfo(firstName,seconName){
        return `My Name is ${firstName} ${seconName}`;
    }
    console.log(personelİnfo('onur','karasu'));

// ! function with many parameters
    /*
        function functionName(param1,param2,param3,param4){
            code goes here
        }
    */
        function sumArrayValues(arr){
            let sum=0;
            for(let i=0;i<arr.length;i++){
                sum=sum+arr[i];
            }
            return sum;
        }
        const numbers=[1,2,3,4,5];
        // calling functions
        console.log(sumArrayValues(numbers)); // 15

        // ! arrow functions
        const areaOfCircle1 = (radius) => {
            let area = Math.PI * radius * radius;
            return area;
          }
      console.log(areaOfCircle1(10))