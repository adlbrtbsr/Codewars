// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
//     Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
//
//         []                                -->  "no one likes this"
//         ["Peter"]                         -->  "Peter likes this"
//         ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
//         ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
//         ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

export const likes = (a : string[]) : string => {
    let likes: string;
    const peopleLiked: number = a.length

    switch (peopleLiked) {
        case 0: {
            likes = "no one likes this"
            break;
        }
        case 1: {
            likes = a[0] + " likes this"
            break;
        }
        case 2: {
            likes = a[0] + " and " + a[1] + " like this"
            break;
        }
        case 3: {
            likes = a[0] + ", " + a[1] + " and " + a[2] + " like this"
            break;
        }
        default: {
            const others: number = peopleLiked - 2
            likes = a[0] + ", " + a[1] + " and " + others + " others like this"
        }
    }

    return likes
}