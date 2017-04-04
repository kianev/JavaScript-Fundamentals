function addRemove(arr) {
    let number = 1;
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == "add"){
            result.push(number);
            number++;
        }else if(arr[i] == "remove"){
            result.pop();
            number++;
        }
    }
    if(result.length > 0) {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }else{
        console.log("Empty");
    }
}

addRemove(["add","add", "add","add"]);