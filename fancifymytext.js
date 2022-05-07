function biggerButton()
{
    document.getElementById("text").style.fontSize = "24pt";
}

function fancyDot()
{
    document.getElementById("boring").checked  = false; 
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}

function boringDot()
{
    document.getElementById("fancy").checked  = false; 
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
	document.getElementById("text").style.fontSize = "10pt";
    document.getElementById("text").style.textDecoration = "none";
    
}


function mooButton() {  
    let mooButton = document.getElementById("text");
    mooButton.style.textTransform = "uppercase";
    let parts = mooButton.value.split(".");
    mooButton.value = parts.join("-Moo");
}