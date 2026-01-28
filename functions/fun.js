// function makeTea(typeofTea){
//      return `Making ${typeofTea}`
// }

// let teaOrder = makeTea("green tea")


// function orderTea(teaType){
//     function confirmOrder(){
//         return `Order confirmed for chai`;
//     }
//     return confirmOrder();
// }

// let orderConfirmation = orderTea("chai");

// const calulateTotal =(price,quantity)=>{

//     return price*quantity;
// }
// let totalCost = calulateTotal(5,10);
// // console.log(totalCost);


// function processTeaOrder(teaFunction){
//    return teaFunction("earl gray");
// }
// let finalOrder = processTeaOrder(makeTea);
// // console.log(finalOrder);

// function createTeaMaker(){
    
//     return function (teaType){
//         return `making ${teaType}`
//     }
// }
// let teaMaker = createTeaMaker();
// console.log(teaMaker());

// function nonrepeate(str){
//     const obj={};
//     for(let char of str){
//         obj[char]=(obj[char]||0)+1;
        
//     }
    
//    console.log()
//     for (let key in obj) {
//         if (obj[key] === 1) {
//             console.log(key);
//         }
//     }
// }
// console.log(nonrepeate("ssrrhheekkaattz")); 



// function firstnonrepeate(str){
//     const obj={};
//     for(let char of str){
//         obj[char]=(obj[char]||0)+1;
        
//     }
    
//    console.log()
//     for (let key in obj) {
//         if (obj[key] === 1) {
//             console.log(key);
//             return;
//         }
//     }
// }
// console.log(firstnonrepeate("fssrrhheekkaattz")); 


// function checkPalindrome(string){
//     const reversed = string.split('').reverse().join('');
//     console.log(string.split('').reverse().join(''))
//     if(reversed === string){
//         return true;
//     }
//     return false;
// }

// console.log(checkPalindrome("mamd"));



// const arr = [1, 2, 2, 3, 4, 4] ;

// function removeDupli(arr){
//     const obj={}
//     for(let num of arr){
//         obj[num]=(obj[num]||0)+1;
//     }
//     const uniqueArr = [];
//     for(let key in obj){
//         uniqueArr.push(Number(key));
//     }
//     return uniqueArr;
// }
// console.log(removeDupli(arr));

// function largestNum(arr){
//     console.log(arr)
//     let largest;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]<arr[i+1]){
//             largest = arr[i+1];
//         }
//     }
//     return largest;
// }
// const newarr=[2,3,4,5,6,7,8,9]
// console.log(largestNum(newarr));


// function reverseString(newString){
//     const arr=[];
//     const reverse = newString.split('');
//     console.log(reverse)
//     for(i=newString.length;i>=0;i--){
//         arr.push(reverse[i]);
//     }
//     return arr.join('');
// }

// console.log(reverseString("abcde"));

function sayHi() {
  console.log(name);
//   console.log(age);
  var name = 'Lydia';
  let age = 21;
}

sayHi();

