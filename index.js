
document.querySelectorAll(".faren")[0].addEventListener("click",function(){
    
    farenUpdate();

});

document.querySelectorAll(".cel")[0].addEventListener("click",function(){
    
    updateCel();

});

document.querySelectorAll(".kel")[0].addEventListener("click",function(){
    
    Kelupdate();
});


document.getElementById("ct").onchange=function(){

    updateCel();
   
};
document.getElementById("kt").onchange=function(){

    Kelupdate();
   
};
document.getElementById("ft").onchange=function(){

    farenUpdate();
   
};
function updateCel()
{
    let cel=document.querySelectorAll(".ct")[0].value;
    
    let faren=parseFloat((cel*9/5)+32).toFixed(2);
    let kel=parseInt(cel)+(parseInt(273));
  
    if(cel!="")
    {
        document.querySelectorAll(".ft")[0].value=faren;
        document.querySelectorAll(".kt")[0].value=kel;
    }
}

function farenUpdate()
{
    let faren=document.querySelectorAll(".ft")[0].value;
    let cel=parseFloat((faren-32)*5/9).toFixed(2);
    let kel=parseFloat(cel)+parseFloat(273);

    if(faren!="")
    {
        document.querySelectorAll(".ct")[0].value=cel;
        document.querySelectorAll(".kt")[0].value=kel; 
    }

}

function Kelupdate()
{
    let kel=document.querySelectorAll(".kt")[0].value;

   
    let cel=kel-273;
    let faren=parseFloat((cel*9/5)+32).toFixed(2);

    if(kel!="")
    {
        document.querySelectorAll(".ct")[0].value=cel;
        document.querySelectorAll(".ft")[0].value=faren;
    }
}


