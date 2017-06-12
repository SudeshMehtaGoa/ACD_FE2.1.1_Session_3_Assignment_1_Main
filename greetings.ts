/* Class */
class clsGreeter {

    /* Private Variables */
    private _numHour: number;
    
    /* Constructor which sets value to private variables */
    constructor(numHour: number) {
        this._numHour = numHour;
    }

    /* greet method as per assignment */
    /* Depending on time entered on UI function calculates message to greet */
    public greet() : string {
        let strMessage :string;

        if(this._numHour>=5 && this._numHour < 12 )
            strMessage=`Good Morning`;
        else if(this._numHour>=12 && this._numHour < 16 )
            strMessage=`Good Afternoon`;
        else if(this._numHour>=16 && this._numHour < 22 )
            strMessage=`Good Evening`;
        else if(this._numHour>=22 && this._numHour < 24 )
            strMessage=`Good Night`;
        else
            strMessage=`Hello, Have a nice time`;

        return strMessage;
    }
}

/* Function called by button on HTML */
function callGreetMethod() {

    // Define variables
    let numHour : number;
    let strGreetMessage : string;

    //Read values from HTML
    numHour = parseFloat((<HTMLInputElement>document.getElementById("txtHour")).value);

    //Create class and call method
    let clsGreeterObject = new clsGreeter(numHour);
    strGreetMessage = clsGreeterObject.greet();

    //display output in HTML
    (<HTMLInputElement>document.getElementById("lblMessage")).innerHTML = strGreetMessage;
}