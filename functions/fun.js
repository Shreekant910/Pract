function makeTea(typeofTea){
     return `Making ${typeofTea}`
}

let teaOrder = makeTea("green tea")


function orderTea(teaType){
    function confirmOrder(){
        return `Order confirmed for chai`;
    }
    return confirmOrder();
}

let orderConfirmation = orderTea("chai");

const calulateTotal =(price,quantity)=>{

    return price*quantity;
}
let totalCost = calulateTotal(5,10);
// console.log(totalCost);


function processTeaOrder(teaFunction){
   return teaFunction("earl gray");
}
let finalOrder = processTeaOrder(makeTea);
// console.log(finalOrder);

function createTeaMaker(){
    
    return function (teaType){
        return `making ${teaType}`
    }
}
let teaMaker = createTeaMaker();
console.log(teaMaker());