// The aim of the kata is to decompose n! (factorial n) into its prime factors.
//
//     Examples:
//
// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.
//
//     n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"
//
// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23
// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.
//
// Notes
//
// the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
//     factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


export function decomp(n: number): string {
    const factors = new Map<number, number>();
    let primeFactors = "";

    for (let currFactor = 2; currFactor <= n; currFactor++) {
        let factor = currFactor;
        for (let i = 2; i <= factor/2; i++) {
            while (factor % i === 0) {
                appendFactor(factors, i)
                factor = factor/i
            }
        }
        appendFactor(factors, factor);
    }

    factors.forEach((occurences, factor) => {
        primeFactors += `${factor}`;
        if (occurences > 1) {
            primeFactors += `^${occurences}`;
        }
        primeFactors += ' * ';
    })
    return primeFactors.slice(0, -3);
}

const appendFactor = (factors: Map<number, number>, factor: number) => {
    if (factor === 1) {
        return
    }
    if (factors.has(factor)) {
        const occurences = factors.get(factor) as number;
        factors.set(factor, occurences + 1);
    } else {
        factors.set(factor, 1);
    }
}