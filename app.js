const express = require('express')
const app = express();
const bodyparser = require('body-parser');
const konekksi = require('./config/database');
const PORT = process.env.PORT || 5000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:false
}));


app.listen(PORT, () => {
    console.log(`Server Running: ${PORT} `)
})

app.get('/denah',  (req,res) =>{
    const querySql = 'SELECT nama_ruang,kode_ruang,lokasi_ruang FROM denah_kampus';

    konekksi.query(querySql,(err,rows,field) =>{
        if(err){
            return res.status(500).json({message : 'Something When Wrong ', error : err});
        }
        res.status(200).json({data:rows});

    })

})