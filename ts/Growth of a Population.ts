export const nbYear = (p0:number, percent:number, aug:number, p:number): number => {
    let yearsNumber: number = 0;
    const percentDecimal: number = percent/100;

    while (p0 < p) {
        p0 = Math.floor(p0 + p0 * percentDecimal + aug);
        yearsNumber++;
    }

    return yearsNumber;
}