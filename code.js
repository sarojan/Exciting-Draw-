/*II.typ zachycovani eventy*/
/*pristoupi k prvku a zapise do neho ANO*/
//document.getElementById("vystup").value="ANO";
/*tedka odychtit hover a zapsat NE*/

document.getElementById("nepise").value=document.getElementById("kresleni").offsetTop;
var paintX=document.getElementById("kresleni").offsetLeft;
var paintY=document.getElementById("kresleni").offsetTop;
var kruh=document.getElementById("kruh");



/*zaregistruji eventy na platno zde v js*/      
document.getElementById("kresleni").onmousemove=function(){SetValues();};
document.getElementById("kresleni").onmouseover=function(){mOver();};
document.getElementById("kresleni").onmouseout=function(){mOut();};
document.getElementById("telo").onload=function(){nacteni();};

/*normalni funkce na zobrazovani*/  
function nacteni()
{
 var platenko=document.getElementById("kresleni");
platenko.removeChild(kruh);
}   
                                                       
function displayDate()
{
document.getElementById("vystup").value="NE";
}
function mOver()
{
 var platenko=document.getElementById("kresleni");
       platenko.appendChild(kruh); 
document.getElementById("vystup").value="NO";
document.getElementById("pole").innerHTML="Mouse Over Me";
}

function mOut()
{
var platenko=document.getElementById("kresleni");
      platenko.removeChild(kruh);
document.getElementById("vystup").value="ANO";
document.getElementById("pole").innerHTML="Thank you" ;
}    
                                                             
function SetValues()
{
    var s = 'X=' +(window.event.clientX-paintX)  +  ' Y=' + (window.event.clientY-paintY) ;
    document.getElementById('pozition').value = s;
    addElement();
    /*zde kresli caru na SVG pozadi*/
    //document.getElementById("kresleni").              
}  
/*funkce, ktera vytvori novy element*/
function addElement() {
   //  zde vytvorim kruhovy prvek
  var newdiv = document.createElement("circle");
  newdiv.setAttribute("cx","50");
  newdiv.setAttribute("cy","50");
  newdiv.setAttribute("r","50");
  //platno element
 
 // <circle id="redcircle" cx="50" cy="50" r="50" fill="red" />

}



