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
   
// let greeting = document.getElementById("greeting");   //doesnt work 
// greeting.innerText += localStorage.getItem("name");


    //id="name" for the text input field

// let textInput = document.getElementById("name");   




                    //THIS WORKS!!!!!!!


//color picker to choose background 
    //id="background-color" for the background color picker 
// let bg = document.getElementById("background-color");
// bg.addEventListener('input', () => {
//    document.body.style.backgroundColor = bg.value 
//     localStorage.setItem("background-color"); //not sure if this is right 
// });



                //DOES NOT WORK!!!


//color picker to choose foreground
    //id="foreground-color" for the foreground picker
//  let fg = document.getElementById("foreground-color");
//     fg.addEventListener('input', () => {
//      document.style.color = fg.value
//  });

const name = document.getElementById('name');
const background = document.getElementById('background-color');
const foreground = document.getElementById('foreground-color');


                    // THIS WORKS!!!!!!


//when form submitted, prevent default 
 //id="submit" for submit button 
let form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("name: " + name.value);
    console.log("background-color: " + background.value);
    console.log("foreground-color " + foreground.value); 
    alert("Your preferences have been saved!"); //alerts user that preferences were saved when form submitted

    localStorage.setItem('name', name.value);    //(key (how you name your variables), value (the value variable given))
    localStorage.setItem('background', background.value);  
    localStorage.setItem('foreground', foreground.value);  
    applyPreference();
});

   








//write function to apply preferences 
function applyPreference() {

    // name.value = localStorage.getItem("name");
    greeting.textContent(localStorage.getItem("name"));
    body.background.style.backgroundColor = localStorage.getItem("background");
    body..style.foregroundColor = localStorage.getItem("foreground");

}

window.onload = (event)  => {
    applyPreference();
}

//in class notes 

// const name =document.getElementById('name');
// const bg = document.getElementById('background-color');
// const fg = document.getElementById('foreground-color');

// //greeting
// const greeting = getElementById('greeeting');