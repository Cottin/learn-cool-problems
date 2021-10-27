
// Write a function that returns the odd numbers in a given list.
// eg. [1, 2, 3, 4, 5] -> [1, 3, 5]

export const odd = (xs) => {
	// Your code here...
	return []
}

const tests = [
	[odd, [[1, 2, 3, 4, 5]], [1, 3, 5]],
	[odd, [[2, 4, 6]], []],
	[odd, [[9, 13, 17, 99]], [9, 13, 17, 99]],
	[odd, [[0, 2, 5, 182391, 283182372]], [5, 182391]],
]

export default tests

