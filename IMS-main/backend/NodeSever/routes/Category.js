const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql2`);
const config = require("config")
const app = express();
const appForcategory = express.Router();

// DBUtils.js
var connection = mysql.createConnection({
    host: config.get("host"),
    port:config.get('mysqlPort'),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
  });

       //EndPoint to get a list of All Categories
       //GET:localhost:5000/category
       appForcategory.get("/",(request,response) =>{
    connection.query("select * from categories",(error,result) =>
    {
        try {
            if(error==null)
            {
                var data = JSON.stringify(result)
                response.setHeader("Content-Type","application/json");
                response.write(data);
            }
            else
            {
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

//EndPOint For Adding a New Category
//POST:localhost:5000/catgry
appForcategory.post("/",(request,response) =>{
    try {
        var query =    `insert into categories (name) values ('${request.body.name}')`;
    connection.query(query,(error,result) =>
    {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else
        {
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

//EndPoint for Editing category
//PUT:localhost:5000/catgry/1
appForcategory.put("/:id",(request,response) =>{
    try {
        var query = `update categories set name = '${request.body.name}' where id=${request.params.id}`;
    connection.query(query,(error,result) =>
    {

        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else
        {
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

//EndPoint For Deleting a Category
//DELETE:localhost:5000/catgry/7 
appForcategory.delete("/:id",(request,response) =>{
    try {
        var query = `delete from categories where id = ${request.params.id}`;
    connection.query(query,(error,result) =>
    {
       try {
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
     else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
       } catch (error) {
        console.error('An error occurred:', error.message);
       }
    })
    } catch (error) {
        
    }
    
})


module.exports = appForcategory;
