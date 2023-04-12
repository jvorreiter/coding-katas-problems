package org.inmediasp.codingKatasProblems.fizzBuzzExtended;

import java.util.ArrayList;
import java.util.List;

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
public class FizzBuzzerExtended {
    public List<String> fizzBuzz(int fromInclusive, int toInclusive) {
        if(fromInclusive != toInclusive) {
        var result = new ArrayList<String>();

        var fizzBuzzedNumber = fromInclusive % 3 == 0 ? "Fizz"
                    : fromInclusive % 5 == 0 ? "Buzz"
                    : fromInclusive % 8 == 0 ? "Razz"
                    : Integer.toString(fromInclusive).indexOf('3') != -1 ? "Fuww"
                    : Integer.toString(fromInclusive).indexOf('5') != -1 ? "Baww"
                    : Integer.toString(fromInclusive).indexOf('8') != -1 ? "Riww"
                    : Integer.toString(fromInclusive);

            result.add(fizzBuzzedNumber);

            var nextFizzedNumbers = this.fizzBuzz(fromInclusive + 1, toInclusive);
            nextFizzedNumbers.forEach(fizz -> result.add(fizz));

            return result;
        } else {
            var str = fromInclusive % 3 == 0 ? "Fizz"
                    : fromInclusive % 5 == 0 ? "Buzz"
                    : fromInclusive % 8 == 0 ? "Razz"
                    : Integer.toString(fromInclusive).indexOf('8') != -1 ? "Riww"
                    : Integer.toString(fromInclusive).indexOf('5') != -1 ? "Baww"
                    : Integer.toString(fromInclusive).indexOf('3') != -1 ? "Fuww"
                    : Integer.toString(fromInclusive);
            var result = new ArrayList<String>();
            result.add(str);

            return result;
        }
    }
}
