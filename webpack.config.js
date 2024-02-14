// Monitors our index.js file and bundles any changes to our bundle.js file.

const path = require('path')

module.exports = {                                  // Exports an object from this file. 
    mode: 'development',                            // There is just needed.
    entry: './src/index.js',                        // Is the start of the path, what is monitored.
    output: {
        path: path.resolve(__dirname, 'dist'),      // Creates path and desination, uses ln3. 
        filename: 'bundle.js'                       // Specifies the output property.
    },
    watch: true                                     // Monitors any changes that occur in the index file.
}