

var grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

//function maxValue(){
//    if(document.getElementsByName("max") < document.getElementsByName("aplus")){
//        console.log("hello");      
//        document.getElementByName("max").style.borderColor = "red";
//    }
//}
//document.getElementById("max").addEventListener("keyup", maxValue);
function calculate(){
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

    var histogram = [0,0,0,0,0,0,0,0,0,0,0];
    for(var i = 0; i<grades.length; i++){
        for(var j = 0; j<11; j++){
            if(grades[i]>=bounds[j] && grades[i]<bounds[j+1]){
                histogram[j]++;
                break;
            }
        }
        
    }
    
    document.getElementById("graph").innerHTML="";
    for(var i = histogram.length-1; i>=0; i--){
        var ul = document.getElementById("graph");
        var li = document.createElement("li");
        li.innerHTML = "O".repeat(histogram[i]);
        ul.appendChild(li);
    }
}

function checkBounds(){
    console.log(document.getElementById("max").value.length);
//    console.log(document.getElementById("max").value);
    console.log(document.getElementById("max").value);
    console.log(document.getElementById("aplus").value);
    if(parseInt(document.getElementById("max").value) <= parseInt(document.getElementById("aplus").value) || document.getElementById("max").value.length == 0){
        document.getElementById("max").style.backgroundColor="red";
        document.getElementById("graph").innerHTML="";
    }
    else{
        document.getElementById("max").style.backgroundColor="white";
    
        calculate();
    }
    
}