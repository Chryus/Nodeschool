
//*********Hello World

// console.log("HELLO WORLD");


//*********Baby Steps
//[ 'node', '/path/to/your/program.js', '1', '2', '3' ]
// console.log(process.argv);
//like gets.chomp in ruby

// function addNums() {
//   sum = 0
//   for (i=2; i<process.argv.length; i++) {
//     sum += +process.argv[i];
//   }
//   return sum;
// }

// console.log(addNums());


//*********MY FIRST I/O

// function countNewLines() {
//   var fs = require('fs');
//   var buf = fs.readFileSync(process.argv[2]);
//   var str = buf.toString().split('\n').length-1;
//   return str;
// }

// console.log(countNewLines());

//*********MY FIRST I/O


function countNewLines() {
  var fs = require('fs');
  var buf = fs.readFile(process.argv[2], 
    function callback (err, data) { 
    if (err == true) {
      console.log(err);
    } else {
      console.log(data.toString().split('\n').length-1);
    }
  });
}

countNewLines();

