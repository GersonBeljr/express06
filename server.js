//instalar Mysql2 e executar uma query

const express = require('express');
const mysql = require('mysql2')

const server = express();

server.listen(3000,()=>{
    console.log('Servidor ONLINE');
});

//Criação dp banco;

const CampoLargoConectada = mysql.createConnection({
    host:'localHost',
    user: 'user_bd_tasks',
    password: 'QL0P4TDcQGB2R97Djet7vXYHggatTZE4',
    database: 'nodejs_tasks'
})

//criado a conexão com o banco e o server
CampoLargoConectada.connect(error=>{
    if (error) {
        console.log("Erro de conexão SQL "+ error.message);
        return
    }
    console.log("Festa total");
    
})

//criando a rota que executa a query

server.get('/',(req,res)=>{
    CampoLargoConectada.query('SELECT * FROM tasks',(err,resultados,fields)=>{
        if(err){
            console.log(err.message);
            res.send("Erro ao acessar os dados");
        }else{
            res.send(resultados);
        }
    })
})