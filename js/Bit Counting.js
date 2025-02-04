// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
// You can guarantee that input is non-negative.
//
//     Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

const countBits = function (n) {
    let bits = 0;
    let nBinaryOnes = n.toString(2)
    for (let i = 0; i < nBinaryOnes.length; i++) {
        if (nBinaryOnes[i] === '1') bits += 1;
    }
    return bits;
};