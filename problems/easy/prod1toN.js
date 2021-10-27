
// Write a program that takes an argument n and returns the product of 1,…,n.
export const prod1toN = (n) => {
	let product = 1
  if (n < 1) return 'invalid'
  for (let i = 1; i <= n; i++) {
    product *= i
  }
  return product
}

const tests = [
	[prod1toN, [5], 120],
	[prod1toN, [9], 362880],
	[prod1toN, [13], 6227020800],
	[prod1toN, [1], 1],
]

export default tests


