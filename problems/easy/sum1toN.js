
// Write a program that takes an argument n and returns the sum of the numbers 1 to n (inclusive)
export const sum1toN = (n) => {
	// Your code here...
	let sum = 0
	for(let i = 0; i <= n; i++){
		sum += i
	}
	return sum
}

const tests = [
	[sum1toN, [3], 6],
	[sum1toN, [4], 10],
	[sum1toN, [9], 45],
	[sum1toN, [80], 3240],
	[sum1toN, [231], 26796],
	[sum1toN, [4021], 8086231],
]

export default tests


