function getUser(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                id:1,
                name:"Ankita"
            })
        },1000)
    })
}

async function displayResult(){
    try{
        const user= await getUser();
        console.log(user);
    }
    catch(err){
console.log(err.message);
    }
}

displayResult();