function restOpen(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const isOpen= true;
            if(isOpen){
                resolve("Restaurnt is open")
            }else{
                reject("not open");
            }
        },1000)
    })
}

function orderFood(food){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`${food} order complete`);
        },1000);
    })
}

function confirmOrder(food){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`order confirmed ${food}`);
        },1000);
    })
}

async function orderProcess(){
    try{
            const step1 = await restOpen();
            console.log(step1);

            const step2 = await orderFood("Burger");
            console.log(step2);

            const step3 = await confirmOrder("Burger");
            console.log(step3);
            
        console.log("Order process completed!");

    }catch (error){
        console.log(error,"error");
    }
}

orderProcess();