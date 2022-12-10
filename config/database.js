const mysql = require('mysql');

const koneksi = 
mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: '',
    database: 'denah',
    multipleStatement: true
});

koneksi.connect((err)=> {
    if(err) throw err;
    console.log('Koneksi Berhasil')
});

module.exports = koneksi;