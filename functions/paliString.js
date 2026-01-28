// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

function PaliString(str) 
{
    let n = str.length;
    let i=0;
    let j=n-1;
    
    while(i<j){
        
        if(str.charAt(i)!=str.charAt(j)) return false;
        i++;
        j--;
    }
    return true;
    

  
}

console.log(PaliString("SOSm"));