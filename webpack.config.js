const path = require('path')
module.exports ={
    entry :{
        app:'./server.js'
    },
    output :{
        path: path.resolve(__dirname, 'build'),
        filename: 'app.buil.js'

    }
};