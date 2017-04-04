function tripLength([x1, y1, x2, y2, x3, y3]) {
    [x1, y1, x2, y2, x3, y3] = [x1, y1, x2, y2, x3, y3].map(Number);
    let firstToSecond = Math.sqrt(Math.pow(Math.abs(x1 - x2),2) + Math.pow(Math.abs(y1 - y2),2));
    let firstToThird = Math.sqrt(Math.pow(Math.abs(x1 - x3),2) + Math.pow(Math.abs(y1 - y3),2));
    let secondToThird = Math.sqrt(Math.pow(Math.abs(x2 - x3),2) + Math.pow(Math.abs(y2 - y3),2));

    if ((firstToSecond <= firstToThird) && (firstToThird => secondToThird)) {
        let a = firstToSecond + secondToThird;
        console.log('1->2->3: ' + a);
    }
    else if ((firstToSecond <= secondToThird) && (firstToThird < secondToThird)) {
        let b = firstToThird + firstToSecond;
        console.log('2->1->3: '+ b);
    }
    else {
        let c = secondToThird + firstToThird;
        console.log('1->3->2: ' + c);
    }
}
tripLength([5, 1, 1, 1, 5, 4]);
