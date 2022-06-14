export feladat01(szinek) {
    let res = 1
    for (let n = 0; n < szinek.length; n++) {
        res *= 2
    }
    return res - 1 - szinek.length
}
