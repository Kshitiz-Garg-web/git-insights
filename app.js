console.log('js code is running 200ok')
let count = 0;
const intervalId = setInterval(() => {
  console.log(count++)
}, 1000)

if (count === 6) {
  clearInterval(intervalId)
  console.log("your setTimeInterval is killed")
}