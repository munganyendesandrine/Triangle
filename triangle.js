function side1(){
    var number1=document.getElementById("side1").value;
    //alert(number1);
};
function side2(){
    var number2=document.getElementById("side2").value;
   // alert(number2);
};
function side3(){
    var number3=document.getElementById("side3").value;
  //alert(number3);

};

function triangleType(){
    var number1=parseInt(document.getElementById("side1").value);
    var number2=parseInt(document.getElementById("side2").value);
    var number3=parseInt(document.getElementById("side3").value);
    //Testing if sides are Triangle or not
    if(((number1+number2)>number3) && ((number1+number3)>number2) && ((number2+number3)>number1))
    {
        alert("All sides form a triangle");
    }
    else{
        alert("Sides you input don't form a triangle");
    }
        // if((number1===number2) && (number2===number1)){
    // alert("Equilateral triangle");
    
   // }
    // else if((number1&&number2)===number3)){
    //     alert("Equilateral triangle");
};