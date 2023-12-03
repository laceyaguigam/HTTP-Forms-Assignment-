// 1. Write code to allow visitors of the page to customize it to their liking. There is a
// form on the page that accepts a name (to be used in a greeting when the user visits
// the page) and a color picker to allow the user to choose their preferred background
// color/foreground color combination. 

//Write the necessary code to capture these values
// when the form is submitted (prevent the default action on the form submission button to
// achieve this) and store these values in localStorage (so that it persists on the user’s
// computer and their preferences are saved indefinitely).

//Next, write a function to apply
// the preferences if they have been set and call it each time the page loads. You may
// also want to call this function again when the user saves their preferences to
// immediately apply them. Make sure you also notify the user somehow that the preferences
// were saved.



//greet users, when user visits page
    //id= "greeting" for the greeting at the top of the page?
   
let greeting = document.getElementById("greeting");    

    //id="name" for the text input field

let textInput = document.getElementById("name");   


//color picker to choose background 
    //id="background-color" for the background color picker 


//color picker to choose foreground
    //id="foreground-color" for the foreground picker


//when form submitted, prevent default 
 //id="submit" for submit button 
let form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("textInput.value"); //works but is it supposed to produce the value of the name that the user input? 
    alert("Your preferences have been saved!");
});

   


//store info in local storage 
greeting.innerText += localStorage.getItem("name");


//write function to apply preferences 
function applyPreference() {

}
//call function again when user saves preferences and apply them 

//notify user when preferences are saved
