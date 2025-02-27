// Given an array of integers, find the one that appears an odd number of times.
//
//     There will always be only one integer that appears an odd number of times.
//
//     Examples
//     [7] should return 7, because it occurs 1 time (which is odd).
//     [0] should return 0, because it occurs 1 time (which is odd).
//     [1,1,2] should return 2, because it occurs 1 time (which is odd).
//     [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
//     [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

export const findOdd = (xs: number[]): number => {
    const occurrencesMap = new Map<number, number>();
    for (const x of xs) {
        if (occurrencesMap.has(x)) {
            const occurrences: number = occurrencesMap.get(x) as number;
            occurrencesMap.set(x, occurrences + 1);
        } else {
            occurrencesMap.set(x, 1);
        }
    }
    for (const num of occurrencesMap.keys()) {
        const occurrences = occurrencesMap.get(num) as number;
        if (occurrences % 2 === 1) return num;
    }
    return 0;
};
