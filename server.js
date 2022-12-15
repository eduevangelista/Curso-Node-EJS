const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res){
    const itens =  [
        {   
            title: 'D',
            message: 'esenvolver aplicaçoes com Nodejs e EJS'  
        },

        {
            title: 'E',
            message: 'JS usa JS para renderizar HTML'   
        },

        {
            title: 'M',
            message: 'elhor controle das páginas'   
        },

        {
            title: 'A',
            message: 'gilidade no desenvolvimento'   
        },

        {
            title: 'I',
            message: 'nstalação facil de fazer'   
        },

        {
            title: 'S',
            message: 'ervidor pelo JS'   
        },
                   ]


const subtitle = 'Linguagem de modelagem para criaçao de paginas HTML'

    res.render('pages/index', {
        qualidades: itens,
        subtitle: subtitle
    })
})

app.get('/sobre', function(req, res){
    res.render('pages/about')
})

app.listen(8080)

console.log('running')