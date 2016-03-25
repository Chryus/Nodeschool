var fs = require('fs')
var path = require('path')

module.exports.filterByExt = function(dir, ext, logMatches) {
                  fs.readdir(dir, function callback(err, files) {
                    if (err) {
                      return logMatches(err) // early return
                    } else {
                      list = files.filter(function (file) {
                               return path.extname(file) === '.' + ext
                             })
                      logMatches(null, list)
                    }
                  })
                }


     //             function bar (callback) {
     //   foo(function (err, data) {
     //     if (err)
     //       return callback(err) // early return

     //     // ... no error, continue doing cool things with `data`

     //     // all went well, call callback with `null` for the error argument

     //     callback(null, data)
     //   })
     // }