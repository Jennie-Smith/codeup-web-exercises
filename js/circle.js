(function() {
    "use strict";

    // create a circle object
    let circle = {
        radius: 3,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            //console.log((Math.pow(rad, 2) * Math.PI));
            return Math.pow(this.radius, 2) * Math.PI;
            // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding === true){
                let area = (Math.round(circle.getArea(circle.radius)));
                console.log("Area of a circle with radius: " + this.radius + ", is: ");
                console.log(area);
            } else {
                console.log(circle.getArea(circle.radius))
            }

        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    //console.log(circle.getArea(circle.radius));
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();