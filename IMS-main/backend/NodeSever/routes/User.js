const express = require('express');
const appForUser= express.Router();
const mysql = require('mysql2');
const config = require("config")

var connection = mysql.createConnection({
    host: config.get("host"),
    port:config.get('mysqlPort'),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
  });

appForUser.put("/approve/:id",(request,response)=>{
    try {
        var query=`update users set status = "APPROVED" where id = ${request.params.id}; `;
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

appForUser.put("/approve/:id",(request,response)=>{
    try {
    var query=`update users set status = "APPROVED" where id = ${request.params.id}; `;
    connection.query(query,(error,result)=>
    {
        
            if(error==null)
        {
            var data = JSON.stringify(result);
            console.log("in approve")
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
        
    })} catch (error) {
        console.error('An error occurred:', error.message);
    }
 })
 
 appForUser.put("/remove/:id",(request,response)=>{
    try {
        var query=`update users set status = "REMOVED" where id = ${request.params.id}; `;
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

module.exports=appForUser;
