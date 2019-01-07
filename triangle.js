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
    var testTriangle=["Input numbers form an Equilateral triangle","Input numbers form an Isosceles triangle","Input numbers form a Scalene triangle","Sides you input don't form a triangle"];

    //Testing types of triangle
    if(((number1+number2)>number3) && ((number1+number3)>number2) && ((number2+number3)>number1))
    {
          
      if((number1===number2) && (number2===number3))
      {
        alert(testTriangle[0]);
         
        //Drawing the equilateral Triangle
        var canvasElement = document.querySelector("#myCanvas");
        var context = canvasElement.getContext("2d");
         
        // the triangle
        context.beginPath();
        context.moveTo(200, 20);
        context.lineTo(100, 200);
        context.lineTo(300, 200);
        context.closePath();
         
        // the outline
        context.lineWidth = 2;
        context.strokeStyle = '#666666';
        context.stroke();
         
        // the fill color
        context.fillStyle = "#FFCC00";
        context.fill();
        
     
   /* for(var k=1; k <=number3; k++)
    {
    
      document.write('*');
     
      document.write('<br>');
    }*/ 
      }
      else if((number1===number2)||(number1===number3)||(number2===number3))
      {
        alert(testTriangle[1]);
        //Drawing the isosceles Triangle
        canvasElement = document.querySelector("#myCanvas");
        context = canvasElement.getContext("2d");
         
        // the triangle
        context.beginPath();
        context.moveTo(400, 20);
        context.lineTo(400, 200);
        context.lineTo(500, 200);
        context.closePath();
         
        // the outline
        context.lineWidth = 2;
        context.strokeStyle = '#666666';
        context.stroke();
         
        // the fill color
        context.fillStyle = "blue";
        context.fill();
       
      }
      else if((number1!=number2!=number3) && ((number1+number2)||(number1+number3)|| (number2+number3))>number3)
      {
        alert(testTriangle[2]);
        //Drawing the scalene Triangle
        canvasElement = document.querySelector("#myCanvas");
        context = canvasElement.getContext("2d");
         
        // the triangle
        context.beginPath();
        context.moveTo(600, 20);
        context.lineTo(600, 150);
        context.lineTo(700, 250);
        context.closePath();
         
        // the outline
        context.lineWidth = 10;
        context.strokeStyle = '#666666';
        context.stroke();
         
        // the fill color
        context.fillStyle = "green";
        context.fill();
      }      
    }
    else
    {
      alert(testTriangle[3]);
    }
   /* //Drawing the input Triangle
    for(var i=1; i <=number1; i++)
    {
     for(var j=1; j<=i; j++)
    {
      
      document.write('*');
     }
      document.write('<br>');
    }*/
    /*   for (var i=1;i<=number1;i++)
     {
     for(var l=0;l<(number1-i);l++)
       // cout<<" ";
     for (var j=0;j<i;j++)
     document.write('*');
     document.write('<br>');
     }*/
    /*
           var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
 
// the triangle
context.beginPath();
context.moveTo(100, 100);
context.lineTo(100, 300);
context.lineTo(300, 300);
context.closePath();
 
// the outline
context.lineWidth = 10;
context.strokeStyle = '#666666';
context.stroke();
 
// the fill color
context.fillStyle = "#FFCC00";
context.fill();
    */
};

function refreshButton(){
    var number1=document.getElementById("side1").value="";
    var number2=document.getElementById("side2").value="";
    var number3=document.getElementById("side3").value="";
};

