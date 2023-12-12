  // doesn't work need to fix
const name = document.getElementById('name');
const background = document.getElementById('background-color');
const foreground = document.getElementById('foreground-color');
const body = document.querySelector('body');
const greeting = getElementById('greeting');


//background

background.addEventListener('input', () => {
   document.body.style.background = background.value 
    localStorage.setItem("background-color"); //not sure if this is right 
});



//foreground
   
    foreground.addEventListener('input', () => {
     document.body.style.color = foreground.value
 });




//submits form and gives alert
let form = document.querySelector("form");
form.addEventListener("submit", event => {
    event.preventDefault();
    console.log("name: " + name.value);
    console.log("background: " + background.value);
    console.log("foreground: " + foreground.value); 
    window.alert("Your preferences have been saved!"); //alerts user that preferences were saved when form submitted
    applyPreference();


    localStorage.setItem('name', name.value);    //(key (how you name your variables), value (the value variable given))
    localStorage.setItem('background', background.value);  
    localStorage.setItem('foreground', foreground.value);  
    
});

   

//write function to apply preferences 
function applyPreference() {

    // name.value = localStorage.getItem("name");
    greeting.textContent(localStorage.getItem("name"));
    body.style.backgroundColor = localStorage.getItem("background");
    body.style.color = localStorage.getItem("foreground");

    name.value = localStorage.getItem("name");
    background.value = localStorage.getItem("background");
    foreground.value = localStorage.getItem("foreground");
};

window.onload = (event)  => {
    applyPreference();
};







//in class notes 

// const name =document.getElementById('name');


// //greeting
