
// Write a function that takes a number and returns a list of its digits.
// So for 2342 it should print [2,3,4,2].

export const digits = (n) => {
	// Your code here...
	return []
}

const tests = [
	[digits, [2342], [2,3,4,2]],
	[digits, [123456], [1, 2, 3, 4, 5, 6]],
	[digits, [1], [1]],
	[digits, [981092830912], [9, 8, 1, 0, 9, 2, 8, 3, 0, 9, 1, 2]],
]

export default tests

