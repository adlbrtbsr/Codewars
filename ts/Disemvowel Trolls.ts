// Trolls are attacking your comment section!
//
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.

export class Kata {
    static disemvowel(str: string): string {
        const vowels: string = "aeiou"
        let disemvoweled: string = "";
        for (let index = 0; index < str.length; index++) {
            const char = str.charAt(index);
            if (!vowels.includes(char.toLowerCase())) {
                disemvoweled += char;
            }
        }
        return disemvoweled;
    }
}