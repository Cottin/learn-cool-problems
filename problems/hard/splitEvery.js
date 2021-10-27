
// Given an array of numbers, and a number n, split the array into slices of lenght n
// eg. [1, 2, 3, 4, 5, 6, 7], 2 -> [[1, 2], [3, 4], [5, 6], [7]]
export const splitEvery = (xs, n) => {
	// Your code here...
	return []
}

const tests = [
	[splitEvery, [[1, 2, 3, 4, 5, 6, 7], 2], [[1, 2], [3, 4], [5, 6], [7]]],
	[splitEvery, [[1], 1], [[1]]],
	[splitEvery, [[1, 2, 3, 4, 5, 6, 7], 3], [[1, 2, 3], [4, 5, 6], [7]]],
]

export default tests
