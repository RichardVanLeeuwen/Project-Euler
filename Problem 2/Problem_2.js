let result = 0;
let fibNums = [1, 2];
for (let i = 0; true; i++) {
    fibNums.push(fibNums[i] + fibNums[i + 1]);

    if (fibNums[i + 1] >= 4000000) break;
}

for (let i = 0; i < fibNums.length + 1; i++) {
    if (fibNums[i] % 2 === 0) {
        result += fibNums[i];
    }
}
console.log(result);