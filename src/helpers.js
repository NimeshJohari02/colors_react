let chooseColor=(arr)=>{
    return (arr[Math.floor(Math.random()*arr.length)]);
}

let filterColor=(arr,colour)=>{
    let newarray=arr.filter((o1)=>{
        return (o1===colour? false:true);
    });
    return newarray;
}
export {chooseColor,filterColor};

