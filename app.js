// ALERT

// Qs No 1
// alert ("Hello,");

// // Qs No 2
// alert('Error! Please enter a valid password.');

// // Qs No 3
// alert ('Welcome to JS Land... \nHappy Coding! ')

// // Qs No 4
// alert ('Welcome to JS Land...')

// Qs No 5
var a = "Hello... I can run JS through my web browser's console";
console.log(a);

// // Qs No 6
// alert ('Used above');

// // Qs No 7





// // CHP 2

// // Qs No 1
// var username ;

// Qs No 2
var myName;
myName = 'Ruba Rasheed';

// Qs No 3
// var message;
// message = 'Hello World';
// alert(message);

// // Qs No 4
// var name = 'Johne Doe ';
// var age = '15 years old';
// var degree = 'Certified Mobile Application Development';
// alert(name);
// alert(age);
// alert(degree);

// Qs No 5
// var p = 'PIZZA \nPIZZ \nPIZ \nPI \nP';
// alert(p);

// Qs No 6
// var email;
// email = 'My email is' + ' abc@xzy.com';
// alert(email);

// Qs No 7
// var book = 'A smarter way to learn JavaScript';
// var a = 'I am trying to learn from the Book ' + book;
// alert(a);

// Qs No 8
document.write('Yah! I can write HTML content through JavaScript ');
document.write("<br>");
document.write("<br>");

// Qs No 9
var b = ' “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ';
alert(b);
document.write(b);
document.write("<br>");
document.write("<br>");

// CHP 3

// Qs No 1
// var age = 'I am 15 years old';
// alert(age);

// Qs No 2




// Qs No 3
var birthYear = '1997';
var c = 'My birth year is '+ birthYear;
var d = 'Data type of my declared variable is number';
document.write(c);
document.write("<br>");
document.write(d);
document.write("<br>");
document.write("<br>");

// Qs No 4
var  visitorName  = '<strong> John Doe </strong>';
var title = '<strong> 5 T-shirt(s) </strong>';
var quantity = visitorName + 'ordered' + title +' on XYZ Clothing store'
document.write(quantity);
document.write('<br>');
document.write('<br>');


// CHP 4
// Qs No 1
var a , b ,c = 'Hi';

// Qs No 2
var name = 'Right';
var variableName = 'NAME';
var $myName = 'Ruba';
var $1 = 'Number';
var _correct = '5 legal variable names are above';

// Illegal variable names
// var 1 = 'wrong';
// var alert = 'wrong';
// var Myname ='wrong';
// var my name = 'wrong';

// Qs No 3
var heading = '<h2>"Rules for naming JS variables"</h2>';
document.write(heading);
var detail1 = ' Variable names can only contain ,numbers ,$ and _ .For example : $my_1stVariable';

var detail2 = 'Variable must begin with a letter, $ or _ .For example : $name: _name or name';

var detail3 = 'Variable names are case sensitive';

var detail4 = 'Variable names should not be JS keywords';
document.write(detail1,'<br>');
document.write(detail2,'<br>');
document.write(detail3,'<br>');
document.write(detail4,'<br>');
document.write('<br>');


// chp 5

// Qs No 1
var sum1 = 3;
var sum2 = 5;
var result =sum1 + sum2;
var result2 ='The sum of 3 and 5 is ' + result;
document.write(result2);
document.write('<br>');

// Qs No 2
var sum1 = 3;
var sum2 = 5;
var result =sum1 - sum2;
var result2 ='The subtraction of 3 and 5 is ' + result;
document.write(result2);
document.write('<br>');
// multiplication
var sum1 = 3;
var sum2 = 5;
var result =sum1 * sum2;
var result2 ='The multiplication of 3 and 5 is ' + result;
document.write(result2);
document.write('<br>');
// division
var sum1 = 3;
var sum2 = 5;
var result =sum1 / sum2;
var result2 ='The division of 3 and 5 is ' + result;
document.write(result2);
document.write('<br>');
// modulus
var sum1 = 3;
var sum2 = 5;
var result =sum1 % sum2;
var result2 ='The modulus of 3 and 5 is ' + result;
document.write(result2);
document.write('<br>');
document.write('<br>');

// Qs No 3
var number ;
number = 'Value after variable declaration is undefined'
document.write(number);
document.write('<br>');
var initialVal = 5;
var initialVal1 ='Initial value : ' +initialVal;
document.write(initialVal1);
document.write('<br>');
var increment=++initialVal;
increment1 ='Value after increment is : ' + increment;
document.write(increment1);
document.write('<br>');
var addition = 7;
var addition1=increment+addition;
var addition2 ='Value after addition is: ' + addition1;
document.write(addition2);
document.write('<br>');
var decrement=--addition1;
var decrement1='Value after decrement is:' + decrement;
document.write(decrement1);
document.write('<br>');
var divider =3;
var remainder=decrement/divider;
var remainder1='The remainder is: ' + remainder;
document.write(remainder1);
document.write('<br>');
document.write('<br>');

// Qs No 4
var price = 600;
var tickets =5;
var cost= price * tickets;
var output='Total cost to buy 5 tickets to a movie is ' +cost +'PKR';
document.write(output);
document.write('<br>');
document.write('<br>');

// Qs No 5
for(var i=1;i<=10;i++){
    document.write('6' + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + '6'* +i+ '<br>')
}
document.write('<br>');
document.write('<br>');


// Qs No 6
var celcius= 28;
var symbol='°C';
var F=(celcius * 9/5)+32;
var symbol1='°F';
var output=celcius+symbol+' is '+F+ symbol1;
document.write(output);
document.write('<br>');

var fahrenhiet= 80;
var symbol='°F';
var C=(fahrenhiet -32)*5/9;
var symbol1='°C';
var output=fahrenhiet+symbol+' is '+C+ symbol1;
document.write(output);
document.write('<br>');
document.write('<br>');

// Qs No 7
var price=650;
var item='Price of item 1 is ' + price;
document.write(item);
document.write('<br>');
var qty = 3;
var mul =price*qty;
var qty1 ='Quantity of item 1 is '+ qty;
document.write(qty1);
document.write('<br>');

var price2=100;
var item='Price of item 2 is ' + price2;
document.write(item);
document.write('<br>');
var qty2 = 7;
var mul2 = price2*qty2;
var qty1 ='Quantity of item 2 is '+ qty2;
document.write(qty1);
document.write('<br>');

var charges=100;
var ship='Shipping Charges '+ charges;
document.write(ship);
document.write('<br>');
document.write('<br>');

var t = mul +mul2+ charges;
var total='Total cost of your order is ' + t;
document.write(total);
document.write('<br>');
document.write('<br>');

// Qs No 8
var totalMarks=980;
var tm='Total marks : ' + totalMarks;
document.write(tm);
document.write('<br>');
var marksObtained=804;
var mo='Marks obtained : ' + marksObtained;
document.write(mo);
document.write('<br>');
var result=marksObtained/totalMarks*100;
var result1= 'Percentage : '+result;
document.write(result1);
document.write('<br>');
document.write('<br>');

// Qs No 9
var exchange=10*104.80 + 25*28;
var result='Total Currency in PKR : ' + exchange;
document.write(result);
document.write('<br>');
document.write('<br>');

// Qs No 10
var num=6;
num1 = ((num+ 5)*10)/2;
document.write(num1);
document.write('<br>');
document.write('<br>');

// Qs No 11
var cy='Current Year: '
var currentYear=prompt('Enter Current Year:' );
document.write(cy,currentYear,'</br>');
var by='Birth Year: '
var birthYear=prompt('Enter Your Birth Year: ');
document.write(by,birthYear,'</br>');
var result=currentYear-birthYear;
var res='Your Age is: '+result;
document.write(res);
document.write('<br>');
document.write('<br>');


// Qs No 12
var radius=25;
var r1='Radius of circle : '+radius;
document.write(r1);
document.write('<br>');
var circumference= 2*3.142*radius;
var output='The circumference is: ' + circumference;
document.write(output);
document.write('<br>');
var area=3.142*radius*radius;
var out='The area is: '+area
document.write(out);
document.write('<br>');

// Qs No 13
var heading = '<h2>The Lifetime Supply Calculator</h2>';
var snack='wavy';
var t1='Favourrite snack : '+snack;
var age =21;
var t2='Current age : '+age;
var maxAge=70;
var t3='Estimated Maximum age : '+maxAge;
var amount=3;
var t4='Amount of snack per day : '+amount;
var total=(maxAge-age)*amount;
var out='You will need '+ total +' '+ snack +' to last you until the ripe old age of '+ maxAge;
document.write(heading,t1,'<br>',t2,'<br>',t3,'<br>',t4,'<br>',out,'<br>','<br>');


// CHP 6 TILL 9
// Qs No 1
var number=20;
var result='Result:'+'<br>'+'The value of a is: '+ number;
document.write(result,'<br>','......................................'+'</br>'+'</br>');

var inc=++number;
var r1='The value of ++a is : '+inc +'</br>'+'Now the value of a is: '+inc+'</br>'+'</br>';
document.write(r1);

var postInc=number++;
postInc1=number;
var r2='The value of a++ is : '+postInc +'</br>'+'Now the value of a is: '+postInc1+'</br>'+'</br>';
document.write(r2);

var dec=--number;
var r3='The value of --a is : '+dec +'</br>'+'Now the value of a is: '+dec+'</br>'+'</br>';
document.write(r3);

var postDec=number--;
postDec1=number;
var r4='The value of a-- is : '+postDec +'</br>'+'Now the value of a is: '+postDec1+'</br>'+'</br>';
document.write(r4);

//  Qs No 2
var a=2;
var b=1;
var result= --a - --b + ++b + b--;
//          1   - 0   + 1   + 1 
//  Answer is 3 
document.write(result,'</br>','</br>');

//  Qs No 3
// var Name=prompt('Enter Your Name');
// var out='Hello...'+Name+ " , "+'Have a nice day:)';
// document.write(out,'</br>','</br>');

//  Qs No 5
var num=prompt('Enter number: ');
if(num== 0){
    for(var i=1;i<=10;i++){
        document.write('5' + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + '5'* +i+ '<br>')
    }
}
else{
    for(var i=1;i<=10;i++){
        document.write(num + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + num* +i+ '<br>')
    }
}
document.write('</br>','</br>');

//  Qs No 6
// const subDescription=document.querySelector('.sub1');
// const subDescription=document.querySelector('.sub2');
// const subDescription=document.querySelector('.sub3');
// var sub1=prompt('Enter Subject 1:');
// var sub2=prompt('Enter Subject 2:');
// var sub3=prompt('Enter Subject 3:');
// var total =100;
// var mo1=prompt('Enter obtained marks for subject 1');
// var mo2=prompt('Enter obtained marks for subject 2');
// var mo3=prompt('Enter obtained marks for subject 3');

// document.write('<table> <tr> <th>Subject</th> <th>Total Marks</th> <th>Obtained Marks</th> <th>Percentage</th> </tr> <tr>  <td>sub1</td> <td>total</td> <td>mo1</td> <td>sub1</td> </tr> </table>')
// var sub1=prompt('Enter subject1: ');
// // var sub2=prompt('Enter subject2: ');
// // var sub3=prompt('Enter subject3: ');
// var total =100;
// var mo1=prompt('Enter obtained marks for subject 1');
// var mo2=prompt('Enter obtained marks for subject 2');
// var mo3=prompt('Enter obtained marks for subject 3');
// var per1=



//  CHP 9 TILL 11
// Qs No 1
var city=prompt('Enter Your City: ');
if(city==='karachi'){
    document.write(' “Welcome to city of lights” '+' <br>'+'<br>')
}

// Qs No 2
// var gender=prompt('Enter Your Gender: ');
// if(gender==='male'){
//     document.write('Good Morning Sir.')
// }
// else{
//     document.write("Good Morning Ma'am.")
// }
// document.write('</br>','</br>');

// Qs No 3
// var signal=prompt('Enter color of traffic signal: ');
// if(signal=='red'){
//     document.write('Must Stop')
// }
// else if(signal=='yellow'){
//     document.write('Ready to move')
// }
// else if (signal=='green') {
//     document.write('Move now')
// } else {
//     alert('Enter appropiate color of traffic signal')
// } 

// Qs No 4
// var fuel=prompt('Enter remaining fuel in car(in liters)');
// if(fuel>=0.25){
//     document.write('Drive safely')
// }
// else{
//     document.write(' “Please refill the fuel in your car” '+'<br>'+'<br>') 
// }

// Qs No 5
// a
// var a = 4; 
// if (++a === 5){ 
//     alert("given condition for variable a is true");
// } 
// // b
// var b = 82;
// if (b++ === 83){ 
//     alert("given condition for variable b is true");
// } 
// // c
// var c = 12;
// if (c++ === 13){
//     alert("condition 1 is true");
// } 
// if (c === 13){ 
//     alert("condition 2 is true");
// } 
// if (++c < 14){ 
//     alert("condition 3 is true"); 
// } 
// if(c === 14){ 
//     alert("condition 4 is true"); 
// } 
// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
//     alert("The cost equals");
// }
// // e
// if (true){ 
//     alert("True"); 
// }  
// if (false){ 
//     alert("False"); 
// } 
// // f
// if("car" < "cat"){ 
//     alert("car is smaller than cat"); 
// } 

// Qs No 6
// var heading='<h2>Marks Sheet</h2>';
// document.write(heading);
// var subs=+prompt('Enter marks obtained in 3 subjects: ');
// var total=300;
// var percent=subs/total*100 +'%';

// Document.write('Total Marks: '+total+'<br>')
// Document.write('Marks obtained: '+subs+'<br>')
// Document.write('Percentage : '+percent+'<br>')

// if(percent>=80 && percent<=100){
//     document.write('Grade : A-one ','Remarks : Excellent');
    
// }
// else if(percent>=70  && percent<=80 ){
//     document.write('Greade : A ','<br>','Remarks: Good');
   
// }
// else if(percent>=60  && percent<=70){
//     document.write('Greade : B ','<br>','Remarks: You need to improve');
    
// }
// else{
//     document.write('Greade : Fail ','<br>','Remarks: Sorry');

// }
 
//  Qs No 7
// var secret=6;
// var num=+prompt('Enter a number: ');
// if(secret===num){
//     document.write('Bingo!Correct answer')
// }
// else if(num==secret+1 ){
//     document.write('Close enough to the correct answer')
// }
// else{
//     document.write('Try again')
// }

//  Qs No 8
// var n=+prompt('Enter a number to check if it is divisible');
// var n1=3;
// if(n%n1==0){
//     document.write('It is divisible')
// }
// else{
//     document.write('It is not')
// }
// document.write('<br>'+'<br>')

//  Qs No 9
// var num=+prompt('Enter number to check if its odd or even');
// var num1=2;
// var n2=3;
// if(num%num1==0){
//     document.write('Its an even number')
// }
// else{
//     document.write('Its an odd number') 
// }
// document.write('<br>'+'<br>')

//  Qs No 10
// var temp=+prompt('Enter the Temperature: ');
// if(temp>40){
//     document.write('Its too Hot outside')
// }
// else if(temp>=30 && temp<=39){
//     document.write('The Weather today is Normal')
// }
// else if(temp>=20 && temp<=29){
//     document.write('Today Weather is cool')
// }
// else if(temp>=10 && temp<=19){
//     document.write("OMG! Today's weather is so cool")
// }
// else{
//     document.write("Its cold")
// }
// document.write('<br>'+'<br>')

//  Qs No 11
// var value1=+prompt('Enter first value')
// var sign=prompt('Enter operation to be performed')
// var value2=+prompt('Enter second value')
// document.write( value1 +' ');
// document.write( sign +' ');
// document.write( value2 + ' ');
// if(sign==='+'){
//     document.write(' '+ '='+' '+ (value1+value2) )
// }
// else if(sign==='-'){
//     document.write(' '+ '='+' '+ (value1-value2)) 
// }
// else if(sign==='*'){
//     document.write(' '+ '='+ ' '+ (value1*value2)) 
// }
// else if(sign==='/'){
//     document.write(' '+ '='+ " "+ (value1/value2) ) 
// }
// else if(sign==='%'){
//     document.write(' '+ '='+' '+ (value1%value2)) 
// }
// else{
//     document.write('Enter valid opertor') 
// }


//  CHP 12 TILL 13
//  Qs No 1
// var input=prompt('Enter a character: ');
// if(input >= 48 && input<= 57){
//     document.write('Its a Digit');
// }
// else if(input >= 65 && input <=90){
//     document.write('Its an Upper case letter');
// }
// else if(input >= 97 && input <= 122){
//     document.write('Its a Lower case letter');
// }




//  Qs No 2
// var input=prompt('Enter 1st integer');
// var input1 = prompt('Enter second integer');
// if (input>input){
//     document.write( input)
// }
// else if (input1>input){
//     document.write(input1)
// }
// else if(input==input1){
//     document.write('The two integers are equal')
// }
// document.write('<br>','<br>')

//  Qs No 3
// var input=prompt('Enter a number either positive,negative or zero');
// if (input == 0){
//     document.write('Its a Zero')
// }
// else if(input < 0){
//     document.write('Its a negative number')
// }
// else{
//     document.write('Its a positive number')
// }
// document.write('<br>','<br>')

//  Qs No 4
// var alpha=prompt('Enter a character of length 1');
// if(alpha=='a'||alpha =='e'||alpha =='i'||alpha=='o' ||alpha=='u'){
//     document.write('True')
// }
// else{
//     document.write('False')
// }
// document.write('<br>','<br>')

//  Qs No 5
// var pass='HelloWorld';
// var pass1=prompt('Enter your password');
// if (pass1==0){
//     alert('Please enter your password')
// }
// else if(pass===pass1){
//     alert('Correct! The password you entered matches the original password')
// }
// else if(pass!==pass1){
//     alert('Incorrect password')
// }
// document.write('<br>','<br>')

//  Qs No 6
// var greeting; 
// var hour = 13; 
// if (hour < 18) { 
//     alert(greeting = "Good day")  
// } 
// else{
//     alert(greeting = "Good evening")
// }

//  Qs No 7
// var time=+prompt('Enter time in 24 hours clock format');
// if(time >=0000  && time<1200){
//     alert('Good Morning')
// }
// else if(time>=1200 && time <1700 ){
//     alert('Good Afternoon')
// }
// else if(time>=1700 && time <2100 ){
//     alert('Good Evening')
// }
// else if(time>=2100 && time <=2359 ){
//     alert('Good Night')
// }


// CHP 14 TILL 16
// Qs No 1
// var arr=new arr();

// Qs No 2
// var arr1=[ ];

// Qs No 3
var array2=[ ];
array2=["A" ," B", " C"]
console.log(array2);

// Qs No 4
var array3=["1", "2", " 3" ]
console.log(array3);

// Qs No 5
// var array4=[];
// var names=4;
// for (var i=0; i<names;i++){
//     alert (false)
// }

// Qs No 6
var array5=[];
array5 [0]=10;
array5[1]='Ruba';
array5 [2]=true;
console.log(array5);

// Qs No 7
var heading='<h2>Qualifications:</h2>'
document.write(heading);
var array6=["1) SSC","2) HSC", "3) BCS","4) BS","5) BCOM","6) MS ","7) M.Phill","8) PhD "];
for (var i=0; i<array6.length;i++){
    document.write(array6[i],'<br>')
}
document.write('<br>');

// Qs No 8
var studentNames=["Micheal","John","Tony"];
var scores=["320","230","480"];
var total =500;
var percentage=[];
percentage[0]=scores[0]/total*100;
percentage[1]=scores[1]/total*100;
percentage[2]=scores[2]/total*100;
for(var i=0;i<studentNames.length;i++){
    document.write('Score of '+studentNames[i]+' is '+scores[i]+'.'+' '+ 'Percentage: '+percentage[i]+"%"+'<br>')
}

document.write('<br>','<br>');

// Qs No 9
var colorArray=[" red "," blue "," green "," yellow "];
// document.write(colorArray);

// part a
// var colorInput=prompt('Enter color which you want to add at the begining of array:');
// colorArray.unshift(colorArray);
// document.write(colorArray);

// part b
// var colorInput=prompt('Enter color which you want to add at the end of array:');
// colorArray.push(colorInput);
// document.write(colorArray);

// part c
colorArray.unshift(' orange ',' murgenda ');
// document.write(colorArray);

// part d
colorArray.shift();
// document.write(colorArray);

// part e
colorArray.pop();
// document.write(colorArray);

// part f
// var colorInput=prompt('Enter at which index you want to add in an array:');
// var colorInput1=prompt('Enter at which color you want to add in an array:');
// colorArray.splice(colorInput,0,colorInput1);
// document.write(colorArray);

// part g
// var colorInput=prompt('Enter at which index you want to delete color in an array:');
// var colorInput1=prompt('Enter how many color you want to delete in an array:');
// colorArray.splice(colorInput,colorInput1);
// document.write(colorArray);

// Qs No 10
var score = [300,430,120,180,310,150,100];
var score1 = [300,430,120,180,310,150,100];
score1.sort(function(a, b){return a-b});
document.write( "score of students"+" "+ score +"<br>");
document.write("ordered score of students"+" "+ score1+"<br>"+"<br>")

// Qs No 11
document.write('<h3>Cities List : </h3>');
var cities=['Karachi','Lahore','Islamabad','Quetta','Peshawar'];
document.write(cities);
document.write('<h3>Selected Cities List : </h3>');
var city=cities.slice(2,4);
document.write(city +"<br>"+"<br>");

// Qs No 12
// const str=[' This ',' is ',' my ',' cat '];
// document.write('<strong>Array: </strong>'+ '<br>'+ str+ '<br>'+ '<br>');
// document.write('<strong>String: </strong>'+'<br>'+str.join(' '));
document.write('<br>'+ '<br>');

// Qs No 13
document.write('<h3>Devices : </h3>');
var newArray=[];
newArray.push('keyboard');
newArray.push('mouse');
newArray.push('printer');
newArray.push('monitor');
document.write(newArray+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.shift()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.shift()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.shift()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray+'<BR>'+'<BR>'+'<BR>');

// Qs No 14
document.write('<h3>Devices : </h3>');
var newArray=[];
newArray.push('keyboard');
newArray.push('mouse');
newArray.push('printer');
newArray.push('monitor');
document.write(newArray+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.pop()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.pop()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray.pop()+'<BR>'+'<BR>');
document.write('OUT :'+'<BR>'+newArray+'<BR>'+'<BR>'+'<BR>');


// Qs No 15
var phone=[' Apple ',' Samsung ',' Motorola ',' Nokia ',' Sony ',' Haier '];
document.write('<form>  <select> <option> Phone  Manufacturers  </option> <option> Apple </option> <option> Samsung </option> <option> Motorola </option> <option> Nokia </option> <option> Sony </option> <option> Haier </option> </select>  </form>');
document.write('<br>','<br>');


// CHP 17 TILL 20
// Qs No 1
// var myArray = [new Array()]
// var newArray =[]

// Qs No 3
var num=[1,2,3,4,5,6,7,8,9,10];
for(i=0;i<num.length;i++){
    document.write(num[i],'<br>')
}
document.write('<br>','<br>');


// Qs No 4
var input=prompt('Enter a number to show its multiplication table');
var input1=prompt('Enter length of multiplication table');
document.write('Multiplication table of '+input+' '+'Length '+input1+'<br>','<br>')
for(var i=1;i<=input1;i++){
    document.write(input + ' ' + 'x' + ' ' + i + ' ' + '=' + ' ' + input* +i+ '<br>')
}
document.write('<br>','<br>');

// Qs No 5
var fruits=['apple','banana','mango','orange','strawberry'];
for(i=0;i<fruits.length;i++){
    document.write(fruits[i],'<br>')
}
document.write('<br>');

document.write('Element at index 0 is '+fruits[0],'<br>');
document.write('Element at index 1 is '+fruits[1],'<br>');
document.write('Element at index 2 is '+fruits[2],'<br>');
document.write('Element at index 3 is '+fruits[3],'<br>');
document.write('Element at index 4 is '+fruits[4],'<br>');
document.write('<br>','<br>');

// Qs No 6
document.write("<strong>Counting</strong>"+"<br>")
for (var i=0; i<=15 ;i++){
    document.write(i + " ")
   
}
document.write("<br>"+"<br>")
document.write(" <strong>Reverse counting</strong>"+"<br>")
for (var a=10 ;a>=1;a--){
    document.write(a + " ")
}
document.write("<br>"+"<br>")
document.write("<strong> Even</strong>"+"<br>")
for (var b=0 ;b<=20;b=b+2){
    document.write(b + " ")
}
document.write("<br>"+"<br>")
document.write("<strong> odd</strong>"+"<br>")
for (var c=1 ;c<=20; c=c+2){
    document.write(c + " ")
}
document.write("<br>"+"<br>")
document.write("<strong> series</strong>"+"<br>")

for (var d=2 ;d<=20;d=d+2){
    document.write(d + "k"+" ")
}
document.write("<br>"+"<br>")

// Qs No 7
var search = prompt("Welcome to Pie In The Sky Bakers ! what do you want to order sir/ma'am")
var delicacy = ["cake", "apple pie", "cookie", "chips", "patties"];
if(search == delicacy[0]){
    document.write (delicacy[0]+" "+"is available at index 0")
}
else if(search == delicacy[1]){
    document.write (delicacy[1]+" "+"is available at index 1")
}
else if(search == delicacy[2]){
    document.write (delicacy[2]+" "+"is available at index 2")
}
else if(search == delicacy[3]){
    document.write (delicacy[3]+" "+"is available at index 3")
}
else if(search == delicacy[4]){
    document.write (delicacy[4]+" "+"is available at index 4")
}
else
{
    alert("sorry! this item is no longer available")
}

// Qs No 8
var A = [24, 53, 78, 91, 12]
document.write("Array items: "+" "+ A+"<br>");
largest = A.sort((a,b)=>a-b).reverse()[0];
document.write("The largest number is: "+" " +largest);
document.write("<br>"+"<br>");

// Qs No 9
var A = [24, 53, 78, 91, 12];
document.write("Array items"+" "+ A+"<br>");
smallest = A.sort((a,b)=>b-a).reverse()[0];
document.write("The smallest number is"+" " +smallest);
document.write("<br>"+"<br>");

//q no 10
document.write("<h4>Multiple of 5 upto 100 are</h4>")
for (var i=5;i<=100;i=i+5){
    document.write(i +" ")
}
