



//1.Kilo To Meter Conversion
function kilometerToMeter(kilo) {
    if (typeof kilo == "number") {
        if (kilo === 0 || kilo === typeof (String)) {
            console.log("Error Input");
        } else {
            var meter = Math.round(kilo * 1000);
            return meter;
        }
    }
    return "Wrong Input!!!!! insert a number";
}



//2.Budget Calculator
function budgetCalculator(watch, mobile, tv) {
    if ((typeof watch == "number") && (typeof mobile == "number") && (typeof tv == "number")) {
        var watchCost = watch * 50;
        var mobileCost = mobile * 100;
        var tvCost = tv * 500;
        var totalCost = watchCost + mobileCost + tvCost;
        return totalCost;
    }
    return "Wrong Input ....... Inset numbers";
}

//3.Hotel Cost function
function hotelCost(days) {
    if (typeof days == "number") {
        var oneToTenDaysCost = 10 * 100;
        var elevenToNiteenCost = 9 * 80;

        if (days > 0 && days <= 10) {
            //1 to 10 days hotel cost
            var oneDayCost = 100;
            var firstFinalCost = oneDayCost * days;
            return firstFinalCost;
        } else if (days > 10 && days <= 19) {
            //11 -19 days hotel cost
            var secondOneDayCost = 80;
            var SecondRemaningDays = days - 10;
            var SecondRemaningDaysCost = SecondRemaningDays * secondOneDayCost;
            var secondFinalCost = SecondRemaningDaysCost + oneToTenDaysCost;
            return secondFinalCost;
        } else {
            //20 and More than 20 days cost
            var thirdOneDayCost = 50;
            var ThirdRemaingDays = days - 19;
            var ThirdRemaingDaysCost = ThirdRemaingDays * thirdOneDayCost;
            var thirdFinalCost = oneToTenDaysCost + elevenToNiteenCost + ThirdRemaingDaysCost;
            return thirdFinalCost;
        }
    }
    return "Wrong input!!!!!!!!! Assign a number";
}



//4.Largest name finding method(megaFriend)
function megaFriend(names) {
    //Type Checking 
    var isTrue;
    for (var j = 0; j < names.length; j++) {
        if (typeof names[j] == "string") {
            isTrue = true;
        }
    }
    //main code
    if (isTrue) {
        var maxName = names[1];
        for (var i = 0; i < names.length; i++) {
            if (maxName.length < names[i].length) {
                maxName = names[i];
            }
        }
        return maxName;
    }
    return "Wrong input ... Assign string";
}


// console.log(megaFriend([1,2,2]));
// console.log(kilometerToMeter(10));
// console.log(hotelCost("pra"));
// console.log(budgetCalculator(1,2,"f"));