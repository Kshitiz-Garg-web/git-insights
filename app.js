console.log('js code is running 200ok')
let count = 0;
const intervalId = setInterval(() => {
  console.log(count++)
  if (count === 6) {
    clearInterval(intervalId)
    console.log("your setTimeInterval is killed")
  }
}, 1000)
console.log('backend is powered by the nodejs')
console.log('___________________________________backend power by kshitiz 456_______________________________')
