// Challenge 3
        // Goldilocks
        // For a given array (ie: [2, 5, 6, 1, 2, 9, 2, 9, 9])
        // determine the average value of the numbers in the array
        // For each number in the array
        // print to the console "too small!" if the number is below the average
        // print to the console "too big!" if the number is above the average
        // print to the console "just right!" if the number is exactly equal to the average
        // expected output for the array above:
        // too small!   
        // just right!
        // too big!
        // too small!
        // too small!
        // too big!
        // too small!
        // too big!
        // too big!
        let array = [2, 5, 6, 1, 2, 9, 2, 9, 9];
let average = 0;
        for (i=0; i < array.length; i++){
average = average + array [i];
        }
average = average/ array.length;

        for (i=0; i < array.length; i++){
if (array[i] < average){
    console.log ("too small");
}
if (array[i] > average){
    console.log ("too big");
}
        }




        // EXTENSION
        // for a given array, determine what integer can be added to the end of the array
        // such that the average of the values of the array including this new number is an integer 
        // expected output
        // for the array [1, 1, 2];
        // answer -> 4