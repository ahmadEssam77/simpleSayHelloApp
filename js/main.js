// ==================== Old Way ====================
// var firstName = document.getElementById("userName");
// var myDemo = document.getElementById("demo");

// function welcoming() {
//     myDemo.innerHTML = "Welcome " + firstName.value;
// }


// ==================== Enhance My Code ====================
let myBtn = document.querySelector('.btn');
let display = document.getElementById('demo');
let myInput = document.getElementById('userName');

myBtn.addEventListener('click', function() {
    display.innerHTML = `Welcome ${myInput.value}`;
    myInput.value = "";
})

