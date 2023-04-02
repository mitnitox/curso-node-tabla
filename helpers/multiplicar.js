const fs = require("fs")
const colors = require('colors');
//let colors = require('colors/safe');
//const { setTimeout } = require("timers/promises")

async function crearArchivo(base = 5, listar = false, hasta = 10) {

    try {

        if (typeof (base) !== "number")
            return `No se pudo crear el archivo`


        let data = ""
        let consola = ""

        for (let i = 1; i <= hasta; i++){
            consola += `${base}`.cyan + ' x '.yellow + `${i}`.cyan + ' = ' + `${base * i}\n`.red
            data += `${base} x ${i} = ${base * i}\n`
        }

        if (listar) {

            console.log(`=======================`.green)
            console.log(' Tabla del'.underline.bgYellow.bold + ` ${base} `.underline.bgYellow.bold)
            console.log(`=======================`.green)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-del-${base}.txt`, data)

        return `tabla-del-${base}.txt`
    }
    catch (err) {
        trow`Error capturado: ${err}`
    }

}

module.exports = {
    crearArchivo
}
