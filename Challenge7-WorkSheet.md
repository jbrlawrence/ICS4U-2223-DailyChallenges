# Worksheet for Challenge 7

## Step 1:
- Create a function with the name `mather` that will take in two inputs `a` and `b`
- **reminder**, the syntax for creating a function is:
```javascript
function ~functionName~ (~input1~, ~input2~){
}
```
## Step 2:

- create a variable **within** the function named `mathArray`.
- for now set this variable to be an empty array `[]`.
- use the return key word to return the variable `mathArray`
- **reminder** the syntax for returning a value from a function is:

```return ~value or variable name~```

## Step 3:

- Test your function with any two inputs and console logging the output
- the form for this would be ```console.log(~nameofmyfunction~(~value1~, ~value2~));```
- your function should print an empty array to the console.

## Step 4:

- Inside your function, add the result of each operation (`a+b, a-b, b-a, a*b, a/b, b/a`) to the end of the `mathArray` array
- **reminder** you can append values to an array using the syntax `~array~.push(~value~)`

## Step 5

- Test your function by running running the function with the inputs 2, 3, and cosole logging the output.
- If done correctly the code should print `[5, -1, 1, 6, 0.66666666666, 1.5]` to the console

## Extension:

Notes- first try to perform the above operations with the first two elements of the provdided array. This should lead to an array access for the values to be used in the operations

Second, try to perform the above operations with the first element and the other elements in the array (ie 1st and 2nd, 1st and 3rd, 1st and 4th ...) - this should lead to a loop structure to access the elements

Third, try to perform the operations for each pair of elements (1st and 2nd, 1st and 3rd, 1st and 4th ... then 2nd and 3rd, 2nd and 4th etc...). — This should lead to a outer/inner loop structure.

