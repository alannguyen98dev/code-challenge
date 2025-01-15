// Iterative Approach
function SumLoop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Formula Approach
function SumFormula(n) {
    return (n * (n + 1)) / 2;
}

// Array Reduce Approach
function SumArray(n) {
    return Array.from({ length: n }, (_, i) => i + 1).reduce(
        (sum, num) => sum + num,
        0
    );
}

// Test the functions
const testValue = 4;

console.log(`Iterative: Sum to ${testValue} =`, SumLoop(testValue));
console.log(`Formula: Sum to ${testValue} =`, SumFormula(testValue));
console.log(`Array with Reduce: Sum to ${testValue} =`, SumArray(testValue));
