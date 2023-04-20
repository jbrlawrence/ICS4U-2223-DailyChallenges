# Worksheet for Challenge 6
## Step 1:
- Create a function with the name rotLetter and the inputs named ```s``` and ```n```, representing the input character and the number for the rotation
- **reminder**, the syntax for creating a function is:
```javascript
function ~functionName~ (~input1~, ~input2~){
}
```
## Step 2:

- create a variable within the function named `outLetter`.
- for now set this variable to the letter "A".
- use the return key word to return the variable `outLetter`
- **reminder** the syntax for returning a value from a function is:

```return ~value or variable name~```

## Step 3:

- Test your function with any two inputs and console logging the output
- the form for this would be ```console.log(~nameofmyfunction~(~value1~, ~value2~));```
- your function should print "A" to the console.

## Step 4:

- Inside your function, create a for loop that will run for each entry of the alphabet (the string in variable ```letters```)
- **reminder** strings are considered arrays, and the ```~array~.legnth``` property can be used to access the number of elements in the array

## Step 5:

- Inside your for loop, check if the input string ```s``` matches the current index of the ```letters``` array.
- **reminder** the syntax of an if statement is: ``` if(~condition to check~){~action to take if true~}```
- If it does match, print out the following to the console ``` console.log(`found string ${s} at position ${i}`)```
- **reminder** that you can access the elements of the array using the syntax ```~array~[~index~]```

## Step 6:

- Inside your if statement (where you have found the input letter in the array), set the variable ```outLetter``` to the value of the `letters` array, at the index `i` plus the rotation value `n`, modulo by the length of the `letters` array ie:

- ``` javascript
  outLetter = letters[(i+n)%letters.length];

## Step 7

- Test your function by running running the function with the inputs "a", 8, and cosole logging the output.
- If done correctly the code should print "i" to the console
