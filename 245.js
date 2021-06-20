/*
Sums of Digit Factorials
Problem 254

Define f(n) as the sum of the factorials of the digits of n. For example, f(342) = 3! + 4! + 2! = 32.

Define sf(n) as the sum of the digits of f(n). So sf(342) = 3 + 2 = 5.

Define g(i) to be the smallest positive integer n such that sf(n) = i. Though sf(342) is 5, sf(25) is also 5, and it can be verified that g(5) is 25.

Define sg(i) as the sum of the digits of g(i). So sg(5) = 2 + 5 = 7.

Further, it can be verified that g(20) is 267 and ∑ sg(i) for 1 ≤ i ≤ 20 is 156.

What is ∑ sg(i) for 1 ≤ i ≤ 150?
*/

const fact = {
  0: BigInt(0),
  1: BigInt(1),
  2: BigInt(2),
  3: BigInt(6),
  4: BigInt(24),
  5: BigInt(120),
  6: BigInt(720),
  7: BigInt(5040),
  8: BigInt(40320),
  9: BigInt(362880),
};

const gns = [
  0, 1, 3, 8, 14, 21, 24, 28, 33, 39, 46, 54, 62, 71, 84, 93, 103, 114, 127,
  141, 156, 172, 189, 207, 220, 234, 249, 258, 268, 279, 291, 304, 318, 330,
  343, 357, 372, 391, 419, 443, 468, 505, 536, 568, 613, 659, 709, 775, 842,
  913, 997, 1086, 1176, 1290, 1408, 1542, 1696, 1854, 2047, 2278, 2513, 2760,
  3077, 3398,
];

function g(n) {
  let maxDigit = BigInt((n % 9 || '') + '9'.repeat(parseInt(n / 9)));
  let total = BigInt(0);
  for (let i = 9; i > 0; i--) {
    if (maxDigit >= fact[i]) {
      total += (maxDigit / fact[i]) * BigInt(i);
      maxDigit = maxDigit % fact[i];
    }
  }
  return total;
}

function processData(n) {
  if (n < gns.length) {
    process.stdout.write(`${gns[n]}\n`);
  } else {
    let total = BigInt(gns[gns.length - 1]);
    for (let i = gns.length; i <= n; i++) {
      total += g(i);
    }
    process.stdout.write(`${total}\n`);
  }
}

processData(150);
