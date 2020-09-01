function numinput(val)
{
    
    document.getElementById("screen").value=document.getElementById("screen").value+val;
}
function numclr(val)
{
    
    document.getElementById("screen").value=""

}
function numequal()
{
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result;
}
function operation()
{
    document.getElementById("screen").value+=val;
}




