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