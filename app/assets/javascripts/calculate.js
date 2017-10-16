/*
CMPT276 Assignment 1
calculate.js
Purpose: Dynamically calculate and display histogram given an array of grades and inputs of lower bounds
Name: Derek So
Date: September 28, 2017
*/

//Array of grades
var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];
//gg

//function to calculate and display histogram
function calculate(){
    //store the bounds in an array
    var bounds = [document.getElementById("f").value,
                 document.getElementById("d").value,
                 document.getElementById("cminus").value,
                 document.getElementById("c").value,
                 document.getElementById("cplus").value,
                 document.getElementById("bminus").value,
                 document.getElementById("b").value,
                 document.getElementById("bplus").value,
                 document.getElementById("aminus").value,
                 document.getElementById("a").value,
                 document.getElementById("aplus").value,
                 document.getElementById("max").value];
    //initialize histogram values
    var histogram = [0,0,0,0,0,0,0,0,0,0,0];
    //loop through grades and check if they are between bounds
    for(var i = 0; i<grades.length; i++){
        for(var j = 0; j<11; j++){
            if(grades[i]>=bounds[j] && grades[i]<bounds[j+1]){
                histogram[j]++;
                break;
            }
        }
        
    }
    //clear histogram
    document.getElementById("graph").innerHTML="";
    //loop through histogram array and print out histogram by appending li elements to graph ul
    for(var i = histogram.length-1; i>=0; i--){
        var ul = document.getElementById("graph");
        var li = document.createElement("li");
        li.innerHTML = "&#9636;".repeat(histogram[i]);
        ul.appendChild(li);
    }
}

//function that checks if bounds are between the bound before and after, and if bound is empty
//calls calculate if there is no error
//changes input box to red if there is an error
function checkBounds(){
    //variable to store whether there is an error in the bounds
    var isError = 0;
    
    //check if max > aplus
    if(parseFloat(document.getElementById("max").value) <= parseFloat(document.getElementById("aplus").value) || document.getElementById("max").value.length == 0){
        document.getElementById("max").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("max").style.backgroundColor="white";
        calculate();
    }
    
    //check if max>aplus>a
    if(parseFloat(document.getElementById("aplus").value) <= parseFloat(document.getElementById("a").value) || 
       parseFloat(document.getElementById("aplus").value) >= parseFloat(document.getElementById("max").value) ||
       document.getElementById("aplus").value.length == 0){
        document.getElementById("aplus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("aplus").style.backgroundColor="white";
        calculate();
    }
    
    //check if aplus>a>aminus
    if(parseFloat(document.getElementById("a").value) <= parseFloat(document.getElementById("aminus").value) || 
       parseFloat(document.getElementById("a").value) >= parseFloat(document.getElementById("aplus").value) ||
       document.getElementById("a").value.length == 0){
        document.getElementById("a").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("a").style.backgroundColor="white";
        calculate();
    }
    
    //check if a>aminus>bplus
    if(parseFloat(document.getElementById("aminus").value) <= parseFloat(document.getElementById("bplus").value) || 
       parseFloat(document.getElementById("aminus").value) >= parseFloat(document.getElementById("a").value) ||
       document.getElementById("aminus").value.length == 0){
        document.getElementById("aminus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("aminus").style.backgroundColor="white";
        calculate();
    }
    
    //check if aminus>bplus>b
    if(parseFloat(document.getElementById("bplus").value) <= parseFloat(document.getElementById("b").value) || 
       parseFloat(document.getElementById("bplus").value) >= parseFloat(document.getElementById("aminus").value) ||
       document.getElementById("bplus").value.length == 0){
        document.getElementById("bplus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("bplus").style.backgroundColor="white";
        calculate();
    }
    
    //check if bplus>b>bminus
    if(parseFloat(document.getElementById("b").value) <= parseFloat(document.getElementById("bminus").value) || 
       parseFloat(document.getElementById("b").value) >= parseFloat(document.getElementById("bplus").value) ||
       document.getElementById("b").value.length == 0){
        document.getElementById("b").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("b").style.backgroundColor="white";
        calculate();
    }
    
    //check if b>bminus>cplus
    if(parseFloat(document.getElementById("bminus").value) <= parseFloat(document.getElementById("cplus").value) || 
       parseFloat(document.getElementById("bminus").value) >= parseFloat(document.getElementById("b").value) ||
       document.getElementById("bminus").value.length == 0){
        document.getElementById("bminus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("bminus").style.backgroundColor="white";
        calculate();
    }
    
    //check if bminus>cplus>c
    if(parseFloat(document.getElementById("cplus").value) <= parseFloat(document.getElementById("c").value) || 
       parseFloat(document.getElementById("cplus").value) >= parseFloat(document.getElementById("bminus").value) ||
       document.getElementById("cplus").value.length == 0){
        document.getElementById("cplus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("cplus").style.backgroundColor="white";
        calculate();
    }    
    
    //check if cplus>c>cminus
    if(parseFloat(document.getElementById("c").value) <= parseFloat(document.getElementById("cminus").value) || 
       parseFloat(document.getElementById("c").value) >= parseFloat(document.getElementById("cplus").value) ||
       document.getElementById("c").value.length == 0){
        document.getElementById("c").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("c").style.backgroundColor="white";
        calculate();
    }
    
    //check if c>cminus>d
    if(parseFloat(document.getElementById("cminus").value) <= parseFloat(document.getElementById("d").value) || 
       parseFloat(document.getElementById("cminus").value) >= parseFloat(document.getElementById("c").value) ||
       document.getElementById("cminus").value.length == 0){
        document.getElementById("cminus").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("cminus").style.backgroundColor="white";
        calculate();
    }
    
    //check if cminus>d>f
    if(parseFloat(document.getElementById("d").value) <= parseFloat(document.getElementById("f").value) || 
       parseFloat(document.getElementById("d").value) >= parseFloat(document.getElementById("cminus").value) ||
       document.getElementById("d").value.length == 0){
        document.getElementById("d").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("d").style.backgroundColor="white";
        calculate();
    }
    
    //check if d>f
    if(parseFloat(document.getElementById("f").value) >= parseFloat(document.getElementById("d").value) ||
       document.getElementById("f").value.length == 0){
        document.getElementById("f").style.backgroundColor="red";
        isError = 1;
    }
    else{
        document.getElementById("f").style.backgroundColor="white";
        calculate();
    }
    
    //empties histogram if there is an error
    if(isError){
        document.getElementById("graph").innerHTML="";
    }
}

//calculate and display histogram with initialized bounds
window.onload=calculate;