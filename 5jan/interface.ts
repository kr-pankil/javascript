interface Vehicle
{
    color:string;
    modelName:string;
    price?:number;
}

const car : Vehicle ={
    color:"red",
    modelName:"baleno",
    price:700000,
    //ownerName:"me"// not allowed
}