// 1. Problem: Find Two Numbers Adding to Target
// Description: Given an array of integers and a target sum, return indices of two numbers that add up to the target.
// Input: nums: number[], target: number
// Output: number[]
// Time Complexity Requirement: 𝑂(𝑛)

const number: number[] = [1, 4, 2, 5, 8, 7, 9, 0, 3, 6]
const target: number = 9

///O(n^2) Can be improved to O(n)

function twoSum(nums: number[], target: number) {
    let sol: number[] = []
    for (let index = 0; index < number.length; index++) {
        const n1 = number[index];
        for (let index2 = index + 1; index2 < number.length; index2++) {
            const n2 = number[index2];
            if (n1 + n2 === target) {
                sol = [index, index2 + index]
                console.log('sol', sol)
                return sol;
            }
        }
    }
    console.log('No solution found')
    return null;
}
twoSum(number, target);


