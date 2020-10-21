alert("You can also use keyboard keys");
var p1=document.getElementById("p1");
var ac=document.getElementById("bac");
var a=document.getElementById("ba");
var p=document.getElementById("bp");
var z=document.getElementById("b0");
var sl=document.getElementById("bs");
var sev=document.getElementById("b7");
var eig=document.getElementById("b8");
var nin=document.getElementById("b9");
var four=document.getElementById("b4");
var fiv=document.getElementById("b5");
var six=document.getElementById("b6");
var one=document.getElementById("b1");
var two=document.getElementById("b2");
var thr=document.getElementById("b3");
var zer=document.getElementById("b0");
var add=document.getElementById("badd");
var sub=document.getElementById("bsub");
var mul=document.getElementById("bm");
var mod=document.getElementById("bp");
var un=document.getElementById("ba");
var eq=document.getElementById("be");
var bd=document.getElementById("bd");
var c=-1;
var op1="";
var op2="";
var op=""
function clear()
{
       p1.innerText="";
     op1="";
    op2="";
    op="";

}
var t=0;
 var l="";
ac.addEventListener("click",clear);
function unary()
{ t++;
 // var l="";
    if(t%2!=0)
        {  if(c==-1)
           { l=op1;
               op1="-"+op1;
           p1.innerText=op1;}
         else
            {   
                l=op2;
               op2="-"+op2;
           p1.innerText=op2;
            } 
         
        }
    else if(t%2==0)
        { if(c==-1)
           { op1=l;
           p1.innerText=op1;}
         else
            {  op2=l;
              p1.innerText=op2;
            } 
        }
   
}
function dec()
{ 

          if(c==-1)
           { if(op1.charAt(op1.length-1)!=".")
             {  op1=op1+".";
           p1.innerText=op1;}
         }
         else
            {   
            if(op2.charAt(op2.length-1)!=".")
            { op2=op2+".";
           p1.innerText=op2;
         }
            } 
}
function assign(x)
{ if(c===-1)
  {  op1=op1+x;
  p1.innerText=op1
  return op1;}
 else
    { 
        op2=op2+x;
       p1.innerText=op2;
return op2;
    }
}
function operator(y)
{ c=0;
    op=y;

}
sev.addEventListener("click",function()
                    {
    assign("7");
});
eig.addEventListener("click",function()
                    {
    assign("8");
});
nin.addEventListener("click",function()
                    {
    assign("9");
});
four.addEventListener("click",function()
                    {
    assign("4");
});
fiv.addEventListener("click",function()
                    {
    assign("5");
});
six.addEventListener("click",function()
                    {
    assign("6");
});
one.addEventListener("click",function()
                    {
    assign("1");
});
two.addEventListener("click",function()
                    {
    assign("2");
});

thr.addEventListener("click",function()
                    {
    assign("3");
});
z.addEventListener("click",function()
                    {
    assign("0");
});
//operators
sl.addEventListener("click",function()
                   { 
    operator("/")
});
add.addEventListener("click",function()
                   { 
    operator("+")
});
mul.addEventListener("click",function()
                   { 
    operator("*")
});
sub.addEventListener("click",function()
                   { 
    operator("-")
});
mod.addEventListener("click",function()
                   { 
    operator("%")
});
un.addEventListener("click",function()
                   { 
    unary()
});
bd.addEventListener("click",function()
                   { 
    dec()
});
//res
function result()
{ if(op=="/")
        {
            if(op2==="0")
                     p1.innerText="Error";  
        }
    else{
              var res=eval(op1+" "+op+" "+op2);
           p1.innerText=res;

    op1=res;
    res="";
    op2="";
    op="";
c=-1;    
    }
}
eq.addEventListener("click",result);

//key
document.addEventListener("keydown",function(event)
{
  var kc=event.keyCode;
  if(kc>="48" && kc<="57")
  {
    assign(event.key);
  }
  else if((event.shiftKey) && (kc=="37" || kc=="43" || kc=="42")){
operator(event.key);
  }
  else if(kc=="45" || kc=="47")
  {
    operator(event.key);
  }
  else if(kc=="61")
  {
    result();
  }
else if(kc=="46")
{
  dec();

}
else if(kc=="8")
{
 clear(); 
}

});
