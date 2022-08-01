// Iteration 1: Names and Input
let hacker1 = "John", hacker2 = "Bob";
console.log(`The driver's name is  ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);
//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters. `);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length}  characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`);
}

// Iteration 3: Loops
let auxPrint = "";

for (let x = 0; x < hacker1.length; x++) {

    auxPrint += hacker1[x].toUpperCase() + " ";
}
console.log(auxPrint);

auxPrint = "";
for (let x = hacker1.length - 1; x >= 0; x--) {

    auxPrint += hacker1[x].toUpperCase() + " ";
}
console.log(auxPrint);

let phrase = ["The driver's name goes first.", "Yo, the navigator goes first definitely.", "What?! You both have the same name?"];
phrase.sort((a, b) => a.localeCompare(b));

console.log(phrase);

//Bonus 1
let lore = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis commodo tortor sapien, vel ullamcorper felis gravida nec. Nam dictum turpis sit amet ipsum tristique vehicula vitae at enim. Praesent a magna id eros posuere commodo. Nam vehicula commodo enim. Ut in vestibulum eros. Mauris sed augue fringilla, porta augue nec, porta neque. Morbi dictum finibus justo, in ullamcorper nisl vulputate in. Morbi non ligula volutpat, auctor magna ac, tincidunt nisi.Curabitur lacus nulla, volutpat vel nibh ac, sagittis faucibus justo. Aliquam dignissim id odio non bibendum. Fusce sapien metus, euismod in bibendum non, rhoncus vel tortor. Sed et est id justo scelerisque laoreet. Fusce quis viverra massa, vel vulputate lorem. Cras sagittis ultricies felis at aliquam. Fusce sed neque at dui cursus consectetur. Integer in lectus sem. Maecenas gravida vestibulum laoreet. Nulla facilisi. Donec faucibus ligula at porta porta.Aliquam ullamcorper eget lectus non imperdiet. Quisque nunc turpis, fermentum vel dapibus at, efficitur non turpis. Aenean congue nisi at odio ullamcorper, a aliquam magna ultrices. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet tellus magna. Integer quis laoreet felis. Proin ultrices sem eget urna vestibulum, sit amet laoreet lacus volutpat. Mauris laoreet, purus ut eleifend vestibulum, tortor eros scelerisque felis, et porta erat ante vitae urna. Maecenas quis sem fringilla, consectetur est eget, porta magna. Quisque aliquet felis sed nunc egestas, ut ultrices urna placerat. Mauris ultrices ipsum a posuere faucibus. Nunc dictum tellus ac ante ultrices, nec aliquam leo finibus. Cras dictum augue ut lacus aliquam gravida. Donec ac pellentesque metus."

let counterWord = 0, counterET = 0;
counterWord = lore.split(" ").length - 1;
console.log(`Words : ${counterWord}`);
console.log("Repeat et :" + (lore.match(/et/g) || []).length);

//Bonus 2

let phraseToCheck = "race car", auxPhase = "";
let isPalindrome = true;
console.log(`Check : ${phraseToCheck}`);
phraseToCheck = phraseToCheck.replace(' ', '');

for (let x = phraseToCheck.length - 1; x >= 0; x--) {

    auxPhase += phraseToCheck[x];

}

for (let x = 0; x < phraseToCheck.length; x++) {

   if(phraseToCheck[x] != auxPhase[x]){
    isPalindrome = false;
    break;
   }   
}

if(isPalindrome)
console.log("Is a palindrome");
else
console.log("it's not a palindrome");



