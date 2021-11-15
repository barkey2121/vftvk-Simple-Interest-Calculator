function compute()
{
    var principal = document.getElementById("principal").value;
    //validates amount input
    if(principal<=0 || principal=="")
    {
        alert("Enter a positive number")
        return;
    }
    //declares variables
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    //sets dates/years info
    var date = new Date();
    var year = parseInt(date.getFullYear())+parseInt(years);
    //displays output
    var finalOutput = document.getElementById("result");
    finalOutput.innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>."+", <br> at an interest rate of "+"<span class='highlight'>"+rate+"</span>%."+"<br> You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+", <br> in the year "+"<span class='highlight'>"+year+"</span>";
}
    //function to update rate
    function updateRate() 
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }