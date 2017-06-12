/* Class */
var clsGreeter = (function () {
    /* Constructor which sets value to private variables */
    function clsGreeter(numHour) {
        this._numHour = numHour;
    }
    /* greet method as per assignment */
    /* Depending on time entered on UI function calculates message to greet */
    clsGreeter.prototype.greet = function () {
        var strMessage;
        if (this._numHour >= 5 && this._numHour < 12)
            strMessage = "Good Morning";
        else if (this._numHour >= 12 && this._numHour < 16)
            strMessage = "Good Afternoon";
        else if (this._numHour >= 16 && this._numHour < 22)
            strMessage = "Good Evening";
        else if (this._numHour >= 22 && this._numHour < 24)
            strMessage = "Good Night";
        else
            strMessage = "Hello, Have a nice time";
        return strMessage;
    };
    return clsGreeter;
}());
/* Function called by button on HTML */
function callGreetMethod() {
    // Define variables
    var numHour;
    var strGreetMessage;
    //Read values from HTML
    numHour = parseFloat(document.getElementById("txtHour").value);
    //Create class and call method
    var clsGreeterObject = new clsGreeter(numHour);
    strGreetMessage = clsGreeterObject.greet();
    //display output in HTML
    document.getElementById("lblMessage").innerHTML = strGreetMessage;
}
