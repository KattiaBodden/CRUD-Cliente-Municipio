import mysql from 'mysql2'

 // creando una conexion con las credenciales para conectarnos
const cnn = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
})

// conectandonos
// levantara una conexion con el servidor con las credenciales
cnn.connect(err => {
    if (err) {
        console.log(`${err}`)
        return
    }

    console.log(`Connected to database ${process.env.DB_DATABASE}`)
})

// exportandola para poderla importar donde sea que la ocupemos
export default cnn