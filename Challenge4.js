function Challenge4 (apple){
let bracketCounter = 0; 
let array = apple;
for(i = 0; i<apple.length; i++){
if(array[i] = ")"|| array[i] == "("){
bracketCounter = bracketCounter +1;
}
}
console.log("number of brackets" + bracketCounter);
}

