const { crearArchivo } = require("./helpers/multiplicar")
const color = require("colors")
const  argv  = require('./config/yargs')

console.log(argv)


console.clear()


crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(`archivo: ${nombreArchivo} creado!`.green))
    .catch(err => console.log(err))





