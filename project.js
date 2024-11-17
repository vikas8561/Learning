let arr = [2, 6, 8, 9];

for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
        console.log("Even Number");
    }else if(arr[i] % 2 !== 0){
        console.log("Odd Number");
    }else{
        console.log("Invalid Number");
    }
}

console.log(arr);