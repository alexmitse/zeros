module.exports = function getZerosCount(number) {
    let result = 0;
    let delitel = 5;
    for(let i = 0; i<=10;i++){
        let perem = number / delitel;
        perem = Math.floor(perem);
        result += perem;
        delitel *= 5;
    }

    return result;

}
