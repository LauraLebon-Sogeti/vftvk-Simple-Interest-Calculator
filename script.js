function compute()
{
    // Performs computations

    // Get element references 
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate");
    var years = document.getElementById("years");
    var result = document.getElementById("result");

    // Perform validation
    if (principal.value <= 0) {
        // On error send alert
        window.alert("Enter a positive number");

        // Focus the element that didn't pass the test
        principal.focus();

        return;
    }

    // Calculate interest
    var interest = (principal.value * years.value * rate.value) / 100;

    // Get year of collect
    var year = new Date().getFullYear() + parseInt(years.value);

    // Write result on screen
    result.innerHTML = "If you deposit <span class='yellow'>" + principal.value + 
        "</span>,<br>at an interest rate of <span class='yellow'>" + rate.value + 
        "</span>.<br>You will receive and amount of <span class='yellow'>" + interest + "</span>,<br>in the year <span class='yellow'>" + year + "</span><br>";

}

function updateRate()
{
    // Updates input range result span on input range change, to show selected rate

    // Get reference
    var rateval = document.getElementById("rate").value;

    // Write selected value in corresponding span
    document.getElementById("rate_val").innerText = rateval + "%";
}
        
