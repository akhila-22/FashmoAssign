function calculateTotalCost() {
    var cars = {
        "Polo Trendline": 870000,
        "Polo Highline": 1009000,
        "Virtus Treadline": 1105000,
        "Virtus Highline": 1308000,
        "Taigun Trendline": 1489000,
        "Taigun Highline": 1542000,
        "Taigun Topline": 1771000
    };

    var additionalcost = {
        "RTO": 113990,
        "Insurance": 47300,
        "TCS charges": 11000,
        "Additional Accessories": 15000
    };

    var carmodel = document.getElementById("carmodel").value;
    var carcost = cars[carmodel];
    var insurance = document.getElementById("insurance").checked;
    var accessor = document.getElementById("accessor").checked;
    var discount = parseFloat(document.getElementById("discount").value) || 0;

    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    if (!insurance && !accessor && discount > 0) {
        errorMessages.innerHTML = "Any one of the additional features have to be addded to avail the discount";
        return;
    }
    if (discount > 30000) {
        errorMessages.innerHTML = "Maximum discount to be applied should not cross 30,000.Only 30,000 will be applied as discount";
        discount = 30000;
    }
    var totalcost = carcost + additionalcost["RTO"];
    totlcost += additionalcost["TCS charges"];
    totalcost += insurance ? additionalcost["Insurance"] : 0;
    totalcost += accessor ? additionalcost["Additional Accessories"] : 0;
    totalcost -= discount;
    console.log(totalcost)
    document.getElementById("totalcost").value = totalcost.toFixed(2);
}