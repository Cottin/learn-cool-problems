
// Write a program that takes an argument n and returns the product of 1,…,n.
export const prod1toN = (n) => {
	if (n < 1) { return -1 }

	let sum = 1

	for (let i = 2; i <= n; i++) {
		sum *= i
	}

	return sum
}

const tests = [
	[prod1toN, [5], 120],
	[prod1toN, [9], 362880],
	[prod1toN, [13], 6227020800],
	[prod1toN, [1], 1],
]

export default tests


