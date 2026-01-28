
function fetchUser(userId){
    return new Promise((resolve)=>{

        setTimeout(()=>{
           resolve( [{id:userId, name:"Shree", age:25}])
        },1000);
    });
}

function fetchPosts(userId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([{id:userId,post:"keepuP"}]);
        },1500)
    })
}

function fetchComments(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([{id:1,comment:"Nice post!"}]); 
        },2000);
    });
}

async function allFun(){
    try{

        const [user,post,comm]= await Promise.all([
            fetchUser(1),
            fetchPosts(1),
            fetchComments()
        ]);
        console.log(user,post,comm);
    }catch(error){
        console.log(error,"error");
    }

}

allFun();