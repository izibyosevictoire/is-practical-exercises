function gcd(a, b) {
    while(a != b){
        if(a > b) {
            a=Math.abs(a- b);
        }
        else {
            b=Math.abs(b- a);
        }
    }
    return a;
}
console.log(gcd(50,30));
