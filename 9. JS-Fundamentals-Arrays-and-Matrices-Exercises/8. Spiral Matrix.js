
function spiralMatrix(arr) {
    let splitedArr = arr[0].split(" ");
    let n = splitedArr[0];
    let total = n * n;

}
spiralMatrix(["5 5"]);

function generateMatrix(input) {
    let splittedInput = input[0].split(' ');
    let n = splittedInput[0];
    var total = n*n;
    var result= [];

    for(var i=0;i<n;i++) {
        var rs = [];
        for(var j=0;j<n;j++) {
            rs.push(0);
        }
        result.push(rs);

    }

    var x=0;
    var y=0;
    var step = 0;
    for(var i=0;i<total;){
        while(y+step<n){
            i++;
            result[x][y]=i;
            y++;

        }
        y--;
        x++;

        while(x+step<n){
            i++;
            result[x][y]=i;
            x++;
        }
        //console.log(result.join(', '));
        x--;
        y--;

        while(y>=step){
            i++;
            result[x][y]=i;
            y--;
        }
        //console.log(result.join(', '));
        y++;
        x--;
        step++;

        while(x>=step){
            i++;
            result[x][y]=i;
            x--;
        }
        //console.log(result.join(', '));
        x++;
        y++;
    }
    printMatrix(result);
    function printMatrix(matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i].join(' '))
        }
    }
}

generateMatrix(['5 5']);