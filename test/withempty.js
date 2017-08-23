var untar = require('../lib/untar.js')
var fs = require('fs')

// Should list both empty.txt and nonempty.txt.
untar.untar(fs.readFileSync(__dirname + '/' + 'withempty.tar')).forEach(function(file){
    console.log(file.name, file.fileData.length)
})
