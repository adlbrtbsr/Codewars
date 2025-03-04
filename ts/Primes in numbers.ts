// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with
// the following form :
//
//     "(p1**n1)(p2**n2)...(pk**nk)"
//     with the p(i) in increasing order and n(i) empty if n(i) is 1.
//
//     Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

export const primeFactors = (n:number): string => {
    const factors = new Map<number, number>();
    let primeFactors = "";

    for (let i = 2; i <= n/2; i++) {
        while (n % i === 0) {
            appendFactor(factors, i)
            n = n/i
        }
    }

    appendFactor(factors, n);

    factors.forEach((occurences, factor) => {
        primeFactors += `(${factor}`;
        if (occurences > 1) {
            primeFactors += `**${occurences}`;
        }
        primeFactors += ')';
    })
    return primeFactors;
}

const appendFactor = (factors: Map<number, number>, factor: number) => {
    if (factors.has(factor)) {
        const occurences = factors.get(factor) as number;
        factors.set(factor, occurences + 1);
    } else {
        factors.set(factor, 1);
    }
}