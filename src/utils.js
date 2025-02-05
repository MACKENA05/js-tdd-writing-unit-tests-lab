// Your code here
export function isPalindrome(word){
    if(!word) return false;
 let reversedWord = word.split('').reverse().join('');
 return word === reversedWord;
}