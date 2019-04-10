require('babel-register')({
    presets:[
        [
            "env", {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
})

// Fichier import rste de l'application.
module.exports = require('./server.js')