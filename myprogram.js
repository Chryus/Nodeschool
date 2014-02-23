var fs = require('fs');


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

//*********MY FIRST ASYNC I/O!


// function countNewLines() {
//   var fs = require('fs');
//   var buf = fs.readFile(process.argv[2], 
//     function callback (err, data) { 
//     if (err == true) {
//       console.log(err);
//     } else {
//       console.log(data.toString().split('\n').length-1);
//     }
//   });
// }

// countNewLines();


// Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

// For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt.

// The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

var path = require('path');

fs.readdir(process.argv[2], 
  function callback (err, list) {
    if (err == true) {
      console.log(err);
    } else {
      for (i=0; i<list.length; i++) {
        if (path.extname(list[i]) === '.' + process.argv[3]){
        console.log(list[i]);
        }
      }
    }
}); 



