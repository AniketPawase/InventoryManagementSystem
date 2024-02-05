const express = require('express');
const appForClass= express.Router();
const mysql = require('mysql2');
const config = require('config');


var connection = mysql.createConnection({
    host: config.get('host'),
    port:config.get('mysqlPort'),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
  });

appForClass.get("/",(request,response)=>{
    connection.query("select * from suppliers",(error,result)=>{
        try {
            if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
        } catch (error) {
            console.error('An error occurred:', error.message);
        }
    })
})
    appForClass.post("/",(request,response)=>{
        try {
            var query=`insert into suppliers (email,mobile,name,status) values('${request.body.email}','${request.body.mobile}','${request.body.name}','PENDING')`
            connection.query(query,(error,result)=>{
            if(error==null)
            {
                var data =JSON.stringify(result)
                response.setHeader("Content-type","application/json");
                response.write(data);
            }
            else{
                console.log(error);
                response.setHeader("Content-Type","application/json");
                response.write(error);
            }
            response.end();
     })
        } catch (error) {
            console.error('An error occurred:', error.message);
        }

 })
 
 appForClass.put("/:id",(request,response)=>{
   try {
    var query=`update suppliers set email='${request.body.email}',mobile='${request.body.mobile}',name='${request.body.name}' where id=${request.params.id} `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
   } catch (error) {
    console.error('An error occurred:', error.message);
   }
 })

 appForClass.put("/approve/:id",(request,response)=>{
   try {
    var query=`update suppliers set status='APPROVED' where id=${request.params.id} `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
   } catch (error) {
    console.error('An error occurred:', error.message);
   }
 })

module.exports=appForClass;
