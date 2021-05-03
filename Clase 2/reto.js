n = 8
var s0 = 0;
var s1 = 1;

if (n == 1) {
    console.log(s0)
} else if (n == 2) {
    console.log(s0)
    console.log(s1)
} else {
    console.log(s0)
    console.log(s1)

    for (var i = 0; i < n - 2; i++) {
        var aux = s1
        s1 = s1 + s0
        s0 = aux

        console.log(s1)
    }
}

// 0 (1 1) 2 3 5