/*
    ! Function with default parameters
    * Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used.
    * both function declaration and arrow function can have a default value or values.
*/
    /*
        ! examples : 
        function functionName(param=value){
            codes
        }
        functionName()
        functionName(arg)
    */

        function greetings(name='Peter'){
            let message=`${name}, welcome to 30 Days of JavaScript!`;
            return message;
        }
        console.log(greetings());
        console.log(greetings('onur'));


        function generateFullName(firstName='onur',lastName='Karasu'){
            let space=' ';
            let fullName=firstName+space+lastName;
            return fullName;
        }
        console.log(generateFullName());
        console.log(generateFullName('İlkcan','Akman'));

        function calculateAge(birthYear,currentYear=new Date().getFullYear()){
            let age=currentYear-birthYear;
            return age;
        }
        console.log('Age : ',calculateAge(1996));

        function weightOfObject(mass,gravity=9.81){
            let weight=mass*gravity+'N'; // the value has to be changed to string first
            return weight;
        }
        console.log('Weight of an object in Newton',weightOfObject(100)); // gravity at the surface Earth
        console.log('Weight of an object in Newton',weightOfObject(100,1.62)); // gravity at the surface Moon

       