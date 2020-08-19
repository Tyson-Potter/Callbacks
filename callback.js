console.log("hELLO,WORLD!");

console.log("here 1");

console.log("here 2");

//JavaScript is single threaded
//one thing at a time
// call backs alow more then one thing to run at a time (Kinda)

console.log("here 4");
const interval = setInterval(function () {
  console.log("hereAgain");
}, 1000);

setTimeout(function () {
  console.log("here 3111111111111111111111111");
  clearInterval(interval);
  console.log("Done");
}, 10000);
