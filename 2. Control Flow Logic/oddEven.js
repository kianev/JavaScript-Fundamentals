function oddEven(num) {
    let resid = num % 2;
    if(resid == 0){
        console.log("even");
    }else if(resid == Math.round(resid)) {
        console.log("odd");
    }else{
            console.log("invalid");
        }
    console.log(resid);
    console.log(Math.round(resid));
}

oddEven(110);