let letters = "abcdefghijklmnopqrstuvwxyz"

function rotLetter(s, n) {
        for (let i=0; i < letters.length; i++){
            if (s === letters[i]){
                return letters[(i+n)%letters.length];
            }
        }
}
console.log(rotLetter("z",1));