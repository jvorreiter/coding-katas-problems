/*
 * Task: 
 * Below is buggy and incomplete code that needs to be fixed and refactored.
 * Also, there are no tests for the implementation at the moment, so focus on these first
 * to identify bugs/missing implementation, then fix, refactor, and complete the implementation 
 * using test-driven development.
 * 
 * The function should return a list of "fizz-buzzed" numbers in a specified range (inclusive).
 * The rules for the fizz-buzzed number are:
 * - if the number is divisable by 3, then output "Fizz"
 * - if the number is divisable by 5, then output "Buzz"
 * - if the number is divisable by 8, then output "Razz"
 * - if the number contains the digit 3, then output "Fuww"
 * - if the number contains the digit 5, then output "Baww"
 * - if the number contains the digit 8, then output "Riww"
 * - otherwise: output the number as is
 * If multiple rules apply, then all should be applied, 
 * and the output strings for the number should be ordered alphabetically.
 * 
 * Bonus task: Make the numbers and strings for the rules above configurable.
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