// Given this function:
// Use the call3Times function to print "Hello, world!" 3 times.

function call3Times(fun) {
  fun();
  fun();
  fun();
}

call3Times(() => console.log("Hello, world"))