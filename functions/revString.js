function reverseString(str) 
{
//   let n = str.length;
//   let s= "";
  
//   for(i=n;i>0;i--){
    
//       s=s+str.charAt(i);
//   }
//   return s;
  
return str.split("").reverse().join("");

}

console.log(reverseString("GeeksForGeeks"));