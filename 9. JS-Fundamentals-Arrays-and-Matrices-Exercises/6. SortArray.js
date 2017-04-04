function sortArray(arr) {
    arr.sort((a,b) => a.localeCompare(b));
    arr.sort((a,b) => a.length - b.length);
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

sortArray(["Isacc","Theodor", "Jack", "Harrison", "George"]);
