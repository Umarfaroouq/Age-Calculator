// Get the user input element for date

let userInput=document.getElementById("date")
//set the max date to allowed to today
userInput.max=new Date().toISOString().split("T")[0];

//Get the result element where age will be displayed
let result = document.getElementById("result");



//function to calculate age  based on entered date
function  calculateAge(){

    // get the birth dte from user input
let birthDate =new Date(userInput.value);

// Extract day, month, year components of the birth date
let d1 = birthDate.getDate();
let m1 = birthDate.getMonth() + 1;
let y1 =  birthDate.getFullYear();

//get todays date
let today=new Date();

//Extract day, month, year components of the today's date
let d2  =today.getDate();
let m2 =today.getMonth()+1;
let y2 =today.getFullYear();

let d3 ,m3 ,y3 ;

//Calculate age components
  y3=y2-y1;

  if(m2 >=m1){
    m3= m2 - m1;

  }
  else{
    y3--;
    m3=12 + m2 - m1;
  }

  if(d2>=d1){
    d3= d2 - d1;

  }
  else{
    m3--;
    d3 =getDaysInMonth(u1,m1)+ d2-d1;

  }
  if(m3<0){
    m3=11;
    y3--;
  }

  // Display the calculated age in the result Element
  result.innerHTML=`You are <span> ${y3} </span>years,<span>${m3} </span>months and <span>${d3} </span> days old `;
}


//function to get the number of days in a month
 function getDaysInMonth(year, month){
    return new Date(year, month, 0).getDate();
 }