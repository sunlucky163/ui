const a = 4;
function f() {
    if (a) {
        console.log(a);
        var a = 10;
    }
}
