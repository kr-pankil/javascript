let p=new Promise((resolve,reject)=>{
    let a=90;
    if(Math.cbrt(90)>9)
    {
        resolve("success");
    }
    else{
        reject("failed")
        
    }
})
p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})
async function myFunction(){
    
}
myFunction.then(
    function(   ){
        console.log("SUCEESS");
    },
    function()
    {
        console.log("FAILED");
    }
);