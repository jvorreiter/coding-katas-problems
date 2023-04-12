/*
 * TODO: describe assignment, refactoring and find bugs
 * 
 * divisable by 3: Fizz
 * divisable by 5: Buzz
 * divisable by 8: Razz
 * has digit 3: Fuww
 * has digit 5: Baww
 * has digit 8: Riww
 * 
 * otherwise: output the number as is
 * 
 * if multiple apply, then these should be ordered alphabetically (e.g. 35 becomes 'BawwBuzzFaww')
 * 
 * Bonus points: make these numbers configurable
 */

export function fizzBuzzExtended(from: number, to: number): string[] {
    if(from != to) {
        const result: string[] = [];

        const fizzBuzzedNumber = from % 3 == 0 ? 'Fizz'
            : from % 5 == 0 ? 'Buzz'
            : from % 8 == 0 ? 'Razz'
            : from.toString().indexOf('3') != -1 ? 'Fuww'
            : from.toString().indexOf('5') != -1 ? 'Baww'
            : from.toString().indexOf('8') != -1 ? 'Riww'
            : from.toString();

        result.push(fizzBuzzedNumber);

        const nextFizzedNumbers = fizzBuzzExtended(from + 1, to);
        nextFizzedNumbers.forEach(fizz => result.push(fizz));

        return result;
    } else {
        const str = from % 3 == 0 ? 'Fizz'
            : from % 5 == 0 ? 'Buzz'
            : from % 8 == 0 ? 'Razz'
            : from.toString().indexOf('8') != -1 ? 'Riww'
            : from.toString().indexOf('5') != -1 ? 'Baww'
            : from.toString().indexOf('3') != -1 ? 'Fuww'
            : from.toString();
        const result: string[] = [];
        result.push(str);

        return result;
    }
}