//Get the string from the page.
//Controller function.
function getValue() {

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementsByID("userString").value;

    let revString = reverseString(userString);

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

    */
    //Reverse a string using a for loop.
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
    }


}

//Display the reversed string to the user.
//View function.
function displayString() {
    
}