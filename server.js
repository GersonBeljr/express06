//instalar Mysql2 e executar uma query

const express = require('express');
const mysql = require('mysql2');
const sqlConfig = require('./mysql_config');
const fun = require('./functions');
const cors = require('cors');

const server = express();

server.listen(3000,()=>{
    console.log('Servidor vivo e operante');
});

server.use(cors());

const mySQLconnected = mysql.createConnection(sqlConfig);

server.get('/',(req,res)=>{
    mySQLconnected.query('SELECT * FROM tasks',(err,results)=>{
        if(err){
            res.json(fun.reponse('error','Erro encontrado: '+err.message))
        }else{
            res.json(fun.reponse('Tudo nos conformes','tasks listadas com sucesso',results))
        }
    })
})

// //criado a conexão com o banco e o server
// mySQLconnected.connect(error=>{
//     if (error) {
//         console.log("Erro de conexão SQL "+ error.message);
//         return
//     }
//     console.log("Festa total");
    
// })

// //criando a rota que executa a query

// server.get('/',(req,res)=>{
//     //objt para todos end points
//     let resul ={
//         status: 'sucesso',
//         message: null,
//         data: null
//     };

//     //fazendo a conexão

//     mySQLconnected.query('SELECT * FROM tasks',(err,resultados)=>{
//         if(err){
//             resul.status = 'erro';
//             resul.message = 'erro na obtenção das tarefas';
//             resul.data = [];
//            // res.send(resul);
//            res.json(resul);
//             // console.log(err.message);
//             // res.send("Erro ao acessar os dados");
//         }else{
//             resul.status = 'sucesso';
//             resul.message = 'sucesso na obtenção das tarefas';
//             resul.data = resultados;
//             res.send(resul);
//         }
//     })
// })