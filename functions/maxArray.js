// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function PaliString(a) 
{
    let n = a.length;
    console.log(n);
   let max =0 ;
   for(i=0;i<n;i++){
       if(a[i]>max){
           max=a[i];
       }
      
   }
     return max;

  
}
let arr = [1,2,4,6,7,8,9,11,2,5]
console.log(PaliString(arr));