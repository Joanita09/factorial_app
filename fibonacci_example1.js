/**
 var yourself = {
    fibonacci : function(n) {
        if (n === 0) {
            return 0;
        }
        if (n === 1) {
            return 1;
        }
        
        var a = 0;
        var b = 1;
        var value = null;
        
        for (var i=2; i<=n; i++) {
            value = a + b;
            a = b;
            b = value;
        }
        
        return value;
    }
};
 */

function getNthfibonacci(n){
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

}

module.exports = getNthfibonacci();