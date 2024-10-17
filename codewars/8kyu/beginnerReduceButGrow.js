// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x) {
    let res = 1;
    for (i = 0; i < x.length; i++) {
        res = res * x[i];
    }
    return res;
}

arr = [1, 2, 3, 4];
console.log(grow(arr));