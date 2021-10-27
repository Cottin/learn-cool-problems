
// Write a function that returns the even numbers in a given list.
// eg. [1, 2, 3, 4, 5] -> [2, 4]

export const even = (xs) => {

	return xs.filter(n => n % 2 === 0)
}

const tests = [
	[even, [[1, 2, 3, 4, 5]], [2, 4]],
	[even, [[2, 4, 6]], [2, 4, 6]],
	[even, [[1, 5, 9]], []],
	[even, [[9, 13, 17, 99]], []],
	[even, [[0, 2, 5, 182391, 283182372]], [0, 2, 283182372]],
]

export default tests

