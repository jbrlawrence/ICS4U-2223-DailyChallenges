let array = [2, 5, 6, 1, 2, 9, 2, 9, 9];
let average = 0;
for (let i = 0; i < array.length; i++){
    average+=array[i];
}
average /= array.length;

for (let i = 0; i < array.length; i++){
    if (array[i] === average){
        console.log("just right!")
    }
    else if (array[i] > average){
        console.log("too big!")
    }
    else{
        console.log("too small!")
    }
}