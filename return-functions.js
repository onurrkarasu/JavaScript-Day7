/*
    ! Function returning value
    * Function can also return values, if a function does not return values the value of the function is undefined. Let us write the above functions
    * with return. From now on, we return value to a function instead of printing it.
*/
    function printFullName(){
        let firstName='Asabeneh';
        let secondName='Yetayeh';
        let space=' ';
        let fullName=firstName+space+secondName;
        return fullName;
    }
    console.log(printFullName());

    function personelİnformation(){
        let name='Onur';
        let sirName='Karasu';
        let age=26;
        let job='Cyber Security Red Team Member';
        let relationShip=false;
        let personelİnfo=name+' '+sirName+' '+age+' '+job+' '+relationShip;
        return personelİnfo;
    }
    console.log(personelİnformation());

    function addTwoParameter(){
        let numOne=2;
        let numTwo=3;
        let sum=numOne+numTwo;
        return sum;
    }
    console.log(addTwoParameter());