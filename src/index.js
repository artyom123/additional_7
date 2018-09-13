module.exports = function solveSudoku(matrix) {
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix.length; j++) {
            if(matrix[i][j] === 0) {        
                for(let x = 1; x < 10; x++){
                    if(elementVaild(x, i, j, matrix)){
                        matrix[i][j] = x;
                        let arrVailid = solveSudoku(matrix);
                        if(arrVailid) return arrVailid;
                    }
                }
                matrix[i][j] = 0;
                    
                return false;
            }
        }
    }
    return matrix;
}

function elementVaild(num, i, j, matrix) {
    let iM = Math.floor(i / 3) * 3, 
        jM = Math.floor(j / 3) * 3;
        
    for (let y = 0; y < matrix.length; y++){
        if (matrix[y][j] === num || matrix[i][y] === num) return false;
    }
            
    for (let a = iM; a < iM + 3; a++) {
        for (let b = jM; b < jM + 3; b++){
            if (matrix[a][b] === num) return false;
        }
    }
      
    return true;
}
