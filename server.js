//instalar Mysql2 e executar uma query

const express = require('express');
const mysql = require('mysql2');

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
    //objt para todos end points
    let resul ={
        status: 'sucesso',
        message: null,
        data: null
    };

    //fazendo a conexão

    CampoLargoConectada.query('SELECT * FROM tasks',(err,resultados)=>{
        if(err){
            resul.status = 'erro';
            resul.message = 'erro na obtenção das tarefas';
            resul.data = [];
           // res.send(resul);
           res.json(resul);
            // console.log(err.message);
            // res.send("Erro ao acessar os dados");
        }else{
            resul.status = 'sucesso';
            resul.message = 'sucesso na obtenção das tarefas';
            resul.data = resultados;
            res.send(resul);
        }
    })
})