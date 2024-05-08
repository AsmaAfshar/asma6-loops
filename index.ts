#! /usr/bin/env node
import promptSync from "prompt-sync";
const prompt =promptSync();


// ================== While Loops ==================
//Requirements  1-Condition,
 // ================= methode 1 dowhile===================
// let i = 0;
// do{
//     console.log('Hello');
//     console.log(('World'));
//     i = i + 1;

// }while (i < 4);

// ==================== method 2 while==============
// let i = 0;
// while (i < 4){
    // console.log('Hello');
//    console.log(('World'));
//    i = i + 1;
// }

// let x = 0;
// while( x < 4 ){
    // console.log('Hello', x);
    // console.log('World', x)
//     // x++;
// }

//  ============= table of a number ===============
// let i = 1;
// while(i <= 10){
//     console.log(i*3);
//     i++;
// }

// let i = 1;
// while(i <= 10){
    // console.log(`4 x ${i} = ${i*4}`);
    //  i++;
// }

// ============= print values up to 100 ===================
// let p = 1;
// while(p <= 100){
    // console.log(p);
    // p++;
// }
//============== print Backword counting ====================
// let q  = 100;
// while(q > 0){
    // console.log(q)
    // q--;
// }
// let y = 100;
// while(y > -10){
    // console.log(y);
    // y--;
// }

// let i = 1;                    //2,4,6,10,20,       10/2 = 5 remainder =0
// while(i <= 100){
    // if(i%2 === 0){
        // console.log('Even Number' , i);
    // }else {
        // console.log('Odd Number', i);
    // }
    // i++;
// }
// ===================== true method================
// let i = 1;
// while(true){
    // if(i%2 === 0){
        // console.log('Even Number= ' , i);
    // }else{
        // console.log('Odd Number= ', i);
    // }
    // i++;

    // if(i === 100){
        // break;
    // }
//  }

// let sum = 0;
// let input = Number(prompt('Enter how many first n numbers you want to add?'));
// for(let i = 1; i<=input; i++){
    //  sum = sum + i;
// }
// console.log(sum);

// ======================= count vowels of a string =====================
// let inputString =prompt('Enter any string: ');    // like  java
// let inputLength = inputString.length;
let vowels  = 'aeiou'
// ================ includes methods for string ================
let vowelsCount = 0;
// for(let i = 0; i<=inputLength; i++){
// console.log(inputString[i]);
// }
// console.log(vowels.includes('j'));
// console.log(vowels.includes('e'));
//   ============== other example ================
// for (let i = 0; i<=inputLength; i++){
    // let letters = inputString[i];
    // if(vowels.includes(letters)){
        vowelsCount++;
        // console.log('It is a vowel ', letters);
    // } 
    // else 
    // {
        // console.log('It is not a vowel ', letters);
    // }
    // console.log(vowels.includes(letters));
// }
console.log(vowelsCount)

// ======================= count index of string =================
// let myName:string = 'asma'
// console.log(myName.indexOf('a'))
// console.log(myName.indexOf('m'))
// console.log(myName.indexOf('s'))
