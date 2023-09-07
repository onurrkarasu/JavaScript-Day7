// ! default parameter arrow functions.
/*
    const functionName = (param = value )   =>{
        codes
    }
    functionName()
    functionName(arg)
*/
    const greetings=(name='Peter')=>{
        let message=name+' , welcome to 30 days of javaScript';
        return message;
    }
    console.log(greetings());
    console.log(greetings('onur'));

    const generateFullName=(firstName='Onur',lastName='Karasu')=>{
        let space=' ';
        let fullName=firstName+space+lastName;
        return fullName;
    }
    console.log(generateFullName());
    console.log(generateFullName('Melike','Özcan'));

    /*
    const calculateAge=(birthYear,currentAge=new Date().getFullYear()) =>{
       return currentAge-birthYear;
    }
    console.log('Age  ',calculateAge(2003));
    */

    const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
    console.log('Age: ', calculateAge(1819))



    const weightOfObject=(mass,gravity=9.81) => mass*gravity+'N'
    
    console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
    console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon