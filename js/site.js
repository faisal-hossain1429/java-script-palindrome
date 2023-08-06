//Collect values from page (string)
//controller function
function getValue(){

    document.getElementById("alert").classList.add("invisible");

    let userString = document.getElementById("formPalindrome").value;

    //remove spacing from user input
    userString = userString.replace(/ /g, "");


    let revString = reverseString(userString); // allows next function to see the private variable
    displayString(userString, revString); 
}

//reverse the string
//logic function

function reverseString(userString){

    let revString = "";

    //reverse a string using a for loop

    for (let index =(userString.length - 1); index >= 0; index--) {
        
        revString += userString[index];

    }

    return revString;
}



//display message to the user
//view function

function displayString(userString, revString){

    //write message, then open alert
    //user string an rev string need to be equal to be a sucess

    if (userString == revString) {
        document.getElementById("msg").innerHTML = `Your string reversed is ${revString}`;  
        document.getElementById("alert").classList.remove("invisible");

        document.getElementById("alert").classList.remove("alert-warning");
        document.getElementById("alert").classList.add("alert-success");
    } else {
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-warning");
        document.getElementById("msg").innerHTML = `Your string is not a palindrome`;  
        document.getElementById("alert").classList.remove("invisible");

    }
    
}


