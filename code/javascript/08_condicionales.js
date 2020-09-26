var persona = {
    nombre: 'Erick',
    apellido: 'Pisco',
    edad: 24,
    universidad: 'Universidad Politecnica Salesiana',
    correoElectronico: 'episcom@est.ups.edu.ec',
    ingenierio: true,
    master: false,
    doctor: false
}

function imprimirPersona(objeto){
    console.log(`${objeto.nombre} ${objeto.apellido}`)
    console.log(`Edad: ${objeto.edad} años.`)
    console.log(`Universidad: ${objeto.universidad}`)
    console.log(`Correo electronico: ${objeto.correoElectronico}`)
    if( objeto.ingenierio ){
        console.log( `Es ingeniero.` )
    }
    if( objeto.master ){
        console.log( `Es Magister.` )
    }
    if( objeto.doctor ){
        console.log( `Es Doctor.` )
    }
}

// SWITCH
opcion = 2

switch(opcion) {
    case 1: 
        console.log('Caso 1')
        break
    case 2:
        console.log('Caso 2')
        break
}

imprimirPersona( persona )