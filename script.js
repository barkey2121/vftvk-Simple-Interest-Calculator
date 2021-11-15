function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal <= 0 || principal == "")
    {
        alert("Re-enter a valid number <= 0");
        //document.getElementById("principal").focus();
        return;
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var dateNow = new Date();
    var yearNow = parseInt(dateNow.getFullYear())+parseInt(years);

    var finalOutput = document.getElementById("result");
    finalOutput.innerHTML="If you deposit "+"<span class='highlight'>"+principal+"</span>"+","
        "at an interest rate of "+"<span class='highlight'>"+rate+"</span>%."+""
        "You will receive an amount of "+"<span class='highlight'>"+interest+"</span>"+","
        "in the year "+"<span class='highlight'>"+yearNow+"</span>";
}
    function updateRate() 
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }

