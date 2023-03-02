const isPalindrome = require('../palindrome');

test('racecar is palindrome ' , () =>{
  expect(isPalindrome('racecar')).toBe(true);
});
text('hello is not a palindrome',() => {
  expect(isPalindrome('hello')).toBe(false);
});
