const express = require('express');
const path = require('path');
const app = express();
const files = path.join( __dirname,'/vistas');
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', (req, res) => {
  res.sendFile(`${files}/index.html`);
});

app.route('/perfil').get( (req, res) =>{
    res.sendFile(`${files}/perfil.html`)
    })
app.route('/experiencia').get((req, res)=>{
  res.sendFile(`${files}/experiencia.html`)
})
app.route('/referencia').get( (req, res) =>{
  res.sendFile(`${files}/referencia.html`)
  })
app.route('/estudio').get((req, res)=>{
res.sendFile(`${files}/estudio.html`)
})

app.route('/login/?').get( (req, res) =>{
  if ( req.query.nombre === 'gabriel' && req.query.password === '123' ){
    res.sendFile(`${files}/bienvenido.html`)
  }else{
    res.status(404).send('Sorry cant find that!');
  }
} )

app.route('/formulario/?').get((req, res) =>{
if( req.query.nombre === '' && req.query.apellido === '' && req.query.mensaje === ''){
res.sendFile(`${files}/camposVacios.html`);
}

})

app.listen(3000);

/*
app.use(express.static(path.join(__dirname, '/public')))
app.get('/', (req, res)=>{
    res.sendFile( `${files}/index.html`)
    
res.sendFile("aca llegamos");
})*/