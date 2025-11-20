let rRange = document.querySelector(".rRange");
let gRange = document.querySelector(".gRange");
let bRange = document.querySelector(".bRange");
let body = document.querySelector("body");
let rand = document.querySelector(".random");


rRange.addEventListener("input", function(){
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;
    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue +"," + blueValue + ")";
})

gRange.addEventListener("input", function(){
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;
    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue +"," + blueValue + ")";
})

bRange.addEventListener("input", function(){
    let redValue = rRange.value;
    let greenValue = gRange.value;
    let blueValue = bRange.value;
    body.style.backgroundColor = "rgb(" + redValue + "," + greenValue +"," + blueValue + ")";
})

rand.addEventListener("click", function(){
    rRange.value = Math.random()*255;
    gRange.value = Math.random()*255;
    bRange.value = Math.random()*255;
    body.style.backgroundColor = "rgb(" + rRange.value + "," + gRange.value + "," + bRange.value + ")";

})