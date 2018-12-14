function side1(){
    var number1=document.getElementById("side1").value;
};
function side2(){
    var number2=document.getElementById("side2").value;
};
function side3(){
    var number3=document.getElementById("side3").value;

};

function triangleType(){
    var number1=parseInt(document.getElementById("side1").value);
    var number2=parseInt(document.getElementById("side2").value);
    var number3=parseInt(document.getElementById("side3").value);
    //Testing if sides are Triangle or not
    if(((number1+number2)>number3) && ((number1+number3)>number2) && ((number2+number3)>number1))
    {
        alert("All sides form a triangle");
             if((number1===number2) && (number2===number3))
             {
               alert("Input numbers form an Equilateral triangle");
             }
             else if((number1===number2)||(number1===number3)||(number2===number3))
             {
                alert("Input numbers form an Isosceles triangle");
             }
             else if((number1!=number2!=number3) && ((number1+number2)||(number1+number3)|| (number2+number3))>number3)
             {
                alert("Input numbers form a Scalene triangle");
             }
             
   }
   else if((((number1+number2)||(number1+number3)|| (number2+number3))===number3)||(((number1+number2)||(number1+number3)|| (number2+number3))<number3))
             {
                alert("Sides you input don't form a triangle");
             }
    
    else
    {
        alert("May be there is some input box you didn't fill, Please Refresh!");
    }
   
};
function refreshButton(){
    var number1=document.getElementById("side1").value="";
    var number2=document.getElementById("side2").value="";
    var number3=document.getElementById("side3").value="";
};