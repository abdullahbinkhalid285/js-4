let cities = ['Faisalabad' , 'Lahore' , 'Karachi' , 'Peshawar' , 'Quetta' , 'Islamabad' , 'Multan']

function printCities() {

    document.getElementById('output').innerHTML = ""
    for (let i = 0; i < cities.length; i++) {
        let num = i + 1;
        document.getElementById('output').innerHTML += num + ')' + cities[i] + '<br>'
    }
}

function addCity(){
    document.getElementById('output').innerHTML=""
    let city = document.getElementById('input1').value
    if(!city){
        alert('Please enter the city')
        return
    }else{
        document.getElementById('output').innerHTML='<span style="text-transform: capitalize; color:green;">' + city + '</span> Your city is successfully added' 
        }
        cities.push(city)


}

function checkCity(){
  
}

function clearOutput(){
    document.getElementById('output').innerHTML = ""
}


let originalString = "I love my country Pakistan.<br> I love my city Faisalabad.<br> I love my homeland.<br>"
document.getElementById('original-string').innerHTML = originalString


function lowerCase(){
    let lowercase = originalString.toLowerCase()
    document.getElementById('output').innerHTML = lowercase
    }

function upperCase(){
    let uppercase = originalString.toUpperCase()
    document.getElementById('output').innerHTML = uppercase
    
}

function capitalize(){
    let capital = '<span style="text-transform: capitalize;" >' + originalString + '</span>'
    document.getElementById('output').innerHTML = capital
}


function betterFormatting(){
    let world = document.getElementById('input1').value
    if(!world){
        Toastify({
            text: "Please enter world for formatting",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
          return
    }else{
        let better = '<span style="text-transform: capitalize;" >' + world    + '</span>'
        document.getElementById('output').innerHTML = better
    }
}

function findWord() {

    let findWord = document.getElementById("input1").value;

    if (!findWord) {
        alert('Please Enter a Word.');
        return;
    }

    document.getElementById("output").innerHTML = "";
    let newString = originalString.toLowerCase();
    let wordIndex = newString.indexOf(findWord.toLowerCase());

    if (wordIndex !== -1) {
        document.getElementById("output").innerHTML = 'Word found at index: <span class="text-success" style="font-size:20px">"' + wordIndex + '"</span>'
    } else {
        document.getElementById("output").innerHTML = '<p class="text-danger fs-5">"Word not found"</p>';
    }

}


// Replace a word function
function replaceWord() {

    let newOriginalString = originalString.toLowerCase();

    let word = document.getElementById("input1").value;

    if (!word) {
        alert('Type a word you want to change from original string.');
        return;
    }

    let replaceWith = prompt('Enter the word you want to change it with.');

    if (!replaceWith) {
        alert('Please type a word to replace it with "' + word + "\".");
        return;
    }
    document.getElementById("output").innerHTML = "";

    word = word.toLowerCase();

    word = new RegExp(word, 'g');

    replaceWith = replaceWith.toLowerCase();

    let replaceWord = newOriginalString.replace(word, replaceWith);

    document.getElementById("output").style.textTransform = 'capitalize';
    document.getElementById("output").innerHTML = replaceWord;

}


document.getElementById('remove').onclick=function(){
    document.getElementById('input1').innerHTML= ""
}


function checkCity() {

    let cityInput = document.getElementById('input1').value;
    
    if (!cityInput) {
        alert('Please enter a city name.');
        return;
    }
    document.getElementById("output").innerHTML = "";

    let city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

    if (cities.includes(city)) {
        document.getElementById("output").innerHTML = '<span class="text-success" style="font-size:20px">"' + city + '"</span> is already in the list.<br />Please press "Print all cities" to check it.';
    } else {
        document.getElementById("output").innerHTML = 'Sorry &#128524 we couldn\'t find your city <span class="text-danger" style="font-size:20px">"' + city + '"</span> in the list.<br />Press "Add your city to the list" button to add it.';
    }

}






