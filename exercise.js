/*
    ! Exercise Level 1  :

*/

/*
    TODO 1 : Declare a function fullName and it print out your full name.
*/
    function getfullName(){
        let firstName='Onur';
        let secondName='Karasu';
        let space=' ';
        let fullName=firstName+space+secondName;
        console.log(fullName);
    }
    getfullName();

/*
    TODO 2: Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
*/
    function fullName(firstName,secondName){
        let space=' ';
        return firstName+space+secondName;
    }
    console.log(fullName('onur','karasu'));

/*
    TODO 3 :Declare a function addNumbers and it takes two two parameters and it returns sum.
*/

    function addNumbers(numberOne,numberTwo){
        let sum=numberOne+numberTwo;
        return sum;
    }
    console.log(addNumbers(5,5));

/*
    TODO 4: An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
*/
    function areaOfRectangle(length,width){
        let area=length*width;
        return area;
    }
    console.log(areaOfRectangle(34,35));

/*
 TODO 5: A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
*/
    function rectangle(length,width){
        let rectangle=2*(length+width);
        return rectangle;
    }
    console.log(rectangle(15,16));

/*
    TODO 6: A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.    
*/
    function rectangular(length,width){
        let volume=(length*width*length);
        return volume;
    }
    console.log(rectangular(15,16));

/*
    TODO 7: Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
*/
   function circle(r){
    let area=Math.PI*r*r;
    return area;
   }
   console.log(circle(5));

/*
   TODO 8 : Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
*/


/*
   TODO 9: Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
*/
   function density(mass,volume){
        let density=mass/volume;
        return density;
   }
   console.log(density(5,10));

/*
   TODO 10 :Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken.
   TODO :  Write a function which calculates a speed of a moving object, speed.
*/
        function calcSpeed(d, t) {
            return d/t;
        }
            console.log(calcSpeed(25,5));

/*
   TODO 11: Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
*/
    function calcWeight(m) {
        return Math.PI ** 2 * m;
    }
    console.log(calcWeight(55));

/*
   TODO 12: Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32.
   *  Write a function which convert oC to oF convertCelsiusToFahrenheit.
*/
    function celciusToFahrenheit(c) {
        return (c * (9/5)) + 32;
    } celciusToFahrenheit(37);

/*
   TODO 13: Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi.
    TODO BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or
    TODO obese based the information given below.

    TODO The same groups apply to both men and women.
   todo Underweight: BMI is less than 18.5
   todo Normal weight: BMI is 18.5 to 24.9
   todo Overweight: BMI is 25 to 29.9
   todo  : Obese: BMI is 30 or more
*/
    function calcBMI(w, h) {
        return w/(h*h);
    } 
    let BMI = calcBMI(66, 1.78);
    if (BMI < 18.5) console.log("Underweight");
    else if (BMI < 24.9)   
        console.log("Normal Weight");
    else if (BMI < 29.9) {
        console.log("Overweight");
    } else {
        console.log("OBESE!")
    }; 
/*
   todo : Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
*/
function checkSeason(month) {
    let season;
    
    switch (month.toLowerCase()) {
       case "september":
       case "october":
       case "november":
          season = "Autumn";
          break;
    
       case "december":
       case "january":
       case "february":
          season = "Winter";
          break;
    
       case "march":
       case "april":
       case "may":
          season = "Spring";
    
       case "june":
       case "july":
       case "august":
          season = "Summer";
          break;
    }
    return season;
 } console.log(checkSeason("DecEMBer"));

/*
   todo: Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
*/
function findMax(a, b, c) {
    let max = 0;
    for(const elem of arguments) {
       if (elem > max) max = elem;
    } return max;
 } console.log(findMax(2, 34, 4));