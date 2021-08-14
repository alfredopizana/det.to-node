//Inicializa
//server
//Conexion a la DB
const server = require('./src/server')
const dbConnect = require('./src/lib/db')
dbConnect()
.then(()=>{
    console.log('Database connected')
    server.listen(8080,()=>{
        console.log("Server listening...")
})
}).catch(err=>console.log(err))


//Requerimiento 
//Endpoint Get Koders
//1. Asegurarnos que nuestro modelo exista
//2. Crear caso de uso necesario.
//3. Crear Endpoint



// Practica casi final

//Kodemia necesita poder gestionar mentores
// Crear mentores
// Actualizar 
// Eliminar
// Obtener el detalle de un mentor por id
// Obtener todos los datos de los mentores

//Segunda parte Plus
//Referencias

//Kodemia tambien necesitar gestionar sus celulas
// Que es una celular de mentores? es un grupo de mentores que pueden ser asignados a un grupo
// Tiene un nombre que identifica
// Tiene mentores que pertenecen a dicha celular
// Actualizar
// Eliminar
// Obtener detalle

// name
// lastName
// module : [ 'Maquetado','JS','Cloud','Backend','React']
// gender


// ---- Middlewares
/*
    Crear un middleware que muestre en la terminal las peticiones
    que se van realizando


    METHOD [ruta] [body]
    GET /koders {}
    POST /koders {...}
*/