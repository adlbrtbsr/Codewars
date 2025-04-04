// Once upon a time, on a way through the old wild mountainous west,…
//      … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST".
//      Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too.
//
//      Going to one direction and coming back the opposite direction right away is a needless effort. Since this is the
//      wild west, with dreadful weather and not much water, it's important to save yourself some energy, otherwise
//      you might die of thirst!
//
//      How I crossed a mountainous desert the smart way.
//      The directions given to the man are, for example, the following:
//
//      ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"].
//
//      You can immediately see that going "NORTH" and immediately "SOUTH" is not reasonable, better stay to the same
//      place! So the task is to give to the man a simplified version of the plan. A better plan in this case is simply:
//
//      ["WEST"]
//
// Other examples:
//     In ["NORTH", "SOUTH", "EAST", "WEST"], the direction "NORTH" + "SOUTH" is going north and coming back right away.
//
//     The path becomes ["EAST", "WEST"], now "EAST" and "WEST" annihilate each other, therefore,
//     the final result is [].
//
//     In ["NORTH", "EAST", "WEST", "SOUTH", "WEST", "WEST"], "NORTH" and "SOUTH" are not directly opposite but they
//     become directly opposite after the reduction of "EAST" and "WEST" so the whole path is reducible to ["WEST", "WEST"].
//
// Task
//      Write a function dirReduc which will take an array of strings and returns an array of strings with the
//      needless directions removed (W<->E or S<->N side by side).
//
//      The Haskell version takes a list of directions with data Direction = North | East | West | South.
//      The Clojure version returns nil when the path is reduced to nothing.
//      The Rust version takes a slice of enum Direction {North, East, West, South}.
//      The OCaml version takes a list of type direction = | North | South | East | West.
// Notes
//      Not all paths can be made simpler. The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
//      "NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite of each other and
//      can't become such. Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
const checkOpposite = (direction: string) => {
    switch(direction) {
        case 'NORTH': return 'SOUTH';
        case 'SOUTH': return 'NORTH';
        case 'EAST': return 'WEST';
        case 'WEST': return 'EAST';
        default: return '';
    }
}

export function dirReduc(arr: string[]): string[] {
    let passAgain: boolean;
    do {
        passAgain = false;
        let reducedArr: string[] = [];
        for (let i = 0; i < arr.length; i++) {
            if (i < arr.length - 1 && arr[i] === checkOpposite(arr[i+1])) {
                passAgain = true;
                i++;
            } else {
                reducedArr.push(arr[i]);
            }
        }
        arr = reducedArr;
    } while (passAgain);
    return arr
}
