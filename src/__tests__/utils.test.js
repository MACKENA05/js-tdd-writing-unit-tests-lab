// Your tests here
import { isPalindrome } from '../utils'

describe ('isPalindrome', ()=>{

    it ("should return true if the current test is a palindrome", ()=>{
        const test = isPalindrome
        expect (isPalindrome('racecar')).toBeTruthy()
    })

    it ("should return false if the current test is not a palindrome", ()=>{
        const test = isPalindrome
        expect (isPalindrome('car')).toBeFalsy()
    })
})