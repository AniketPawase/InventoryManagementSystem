const express = require('express');
const appForClass= express.Router();
const mysql = require('mysql2');
const config = require("config")

var connection = mysql.createConnection({
    host: config.get("host"),
    port:config.get('mysqlPort'),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
  });

  appForClass.get("/:id",(request,response)=>{
    var query = `select * from supplier_addrs where id = ${request.params.id}`;
    connection.query(query,(error,result)=>{
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
    })
})
    appForClass.post("/:id",(request,response)=>{
        var query=`insert into supplier_addrs (adr_line1 ,adr_line2,city,country,state,zip_code ,supplier_id,id) values('${request.body.adr_line1}','${request.body.adr_line2}','${request.body.city}','${request.body.country}','${request.body.state}','${request.body.zip_code}',${request.body.supplier_id},${request.params.id})`;
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

 })
 
 appForClass.put("/:id",(request,response)=>{
            response.setHeader("Content-Type","application/json");
            var query=`update supplier_addrs set adr_line1='${request.body.adr_line1}',adr_line2='${request.body.adr_line2}',city='${request.body.city}',country='${request.body.country}',state='${request.body.state}',zip_code='${request.body.zip_code}',supplier_id=${request.body.supplier_id} where id=${request.params.id} `;
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
 })

module.exports=appForClass;
