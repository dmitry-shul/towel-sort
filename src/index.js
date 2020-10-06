
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let i = 0;
    let k = 0;
    let c;
    let p = [];
    let d;
    if (matrix === undefined) {
        let t = [];
        return t;
    } else {
        while (i < matrix.length) {
            c = matrix[i];
            
            if (i % 2 === 0 || i === 0) {
                k=0;
                while (k < c.length) {
                    p.push(c[k]);
                    k++;
                }
            } else {
                k=c.length-1;
                while (k >= 0) {
                    p.push(c[k]);
                    k--;
                }
            }
            
            i++;
        }
    }
    return p;
} 
