//Get the string from the page.
//Controller function.
function getValue() {
    //Check to make sure the alert is invisble
    document.getElementById("alert").classList.add("invisible");
    //Getting value from user input on app.html
    let userString = document.getElementById("userString").value;
    //Calling reverseString function and setting it to revString variable.
    let revString = reverseString(userString);
    //Taking revString variable and sending it to displayString function.
    displayString(revString);
}

//Reverse the string.
//Logic function.
function reverseString(userString) {
    
    let revString = [];
    /*
    let name = Carlos
    name[0] = C;
    name[5] = s;
    name.length - 1 (This will find the last position in the array)
    */

    //Reverse a string using a for loop.
    //This is a decrementing for loop.
    for (let index = userString.length - 1; index >= 0; index--) {
    //+= will add to revString each iterantion of the loop until it gets to 0
        revString += userString[index];        
    }
    //Once the loop is complete it will return revString to the controlling function.
    return revString;

}

//Display the reversed string to the user.
//View function.
function displayString(revString) {

    //Write to the page.
                                                //This is a temerate literal.
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;
    //Show the alert box.
    document.getElementById("alert").classList.remove("invisible");
}