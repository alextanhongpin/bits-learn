const YES = 1
const NO = 2
const OKAY = 4
const CANCEL = 8

function main () {
  // Example 1: Checking odd or even number.
  for (let i = 0; i < 10; i += 1) {
    console.log(`${i} is odd = ${odd(i)}`)
  }

  // Example 2: For a given array of repeated elements, exactly one element is
  // not repeated. You need to return the non-repeated element.
  console.log('non-repeat:', nonRepeat([1, 2, 5, 4, 6, 8, 9, 2, 1, 4, 5, 8, 9]))

  // Example 3: Handling multiple if-else.
  console.log(showPopup(NO | OKAY | CANCEL))
  console.log(showPopup(YES | OKAY | CANCEL))
  console.log(showPopup(NO | CANCEL))
  console.log(showPopup(NO | YES | OKAY | CANCEL))
  console.log(showPopup(NO | YES))

  // Example 4: Find possible subsets. The solution found length is always 2^N,
  // where N is the length of the input.
  console.log(possibleSubsets(['a', 'b', 'c']))
  console.log(possibleSubsets(['a', 'b', 'c', 'e', 'f']))
}

function odd (n) {
  return n & 1
}

function nonRepeat (arr = []) {
  let n = 0
  arr.forEach(i => {
    // XOR operator
    // n ^ n = 0
    // n ^ 0 = n
    // 0 ^ 0 = 0
    n ^= i
  })
  return n
}

function showPopup (buttons) {
  let result = []
  if (buttons & YES) {
    result.push('YES')
  }
  if (buttons & NO) {
    result.push('NO')
  }
  if (buttons & OKAY) {
    result.push('OKAY')
  }
  if (buttons & CANCEL) {
    result.push('CANCEL')
  }
  if (buttons === YES + NO) {
    console.log('YES + NO')
  }
  // Or buttons === YES + NO + OKAY + CANCEL
  // Or buttons === (YES|NO|OKAY|CANCEL)
  // Or buttons === 1 + 2 + 4 + 8
  if (buttons === 15) {
    result.push('ALL')
  }
  return result.join('|')
}

function possibleSubsets (arr = []) {
  let n = arr.length
  for (let i = 0; i < 1 << n; i += 1) {
    let str = ''
    for (let j = 0; j < n; j += 1) {
      if (i & (1 << j)) {
        console.log(i & (1 << j))
        str += arr[j]
      }
    }
    console.log('str:', str)
  }
}

main()
