const { error } = require("console");
const express = require(`express`);
const { request } = require("http");
const mysql = require(`mysql2`);
const config = require("config")

const app = express();
const appForsubcategory = express.Router();

var connection = mysql.createConnection({
    host: config.get("host"),
    port:config.get('mysqlPort'),
    user: config.get("user"),
    password: config.get("password"),
    database: config.get("database"),
  });



//EndPOint For Adding a New SUBCategory
//POST:localhost:5000/subcatgry/2
appForsubcategory.post("/:id",(request,response) =>{
   try {
    var query =    `insert into sub_categories (name,category_id) values ('${request.body.name}',${request.params.id})`;
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

	//EndPoint to get a list of All SUB Categories
	//GET:localhost:5000/subcatgry
	appForsubcategory.get("/",(request,response) =>{
	connection.query("select * from sub_categories",(error,result) =>
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

//EndPoint to get a list of All SUBCategories  where categoryID supplied
//GET:localhost:5000/subcatgry/2
appForsubcategory.get("/:id",(request,response) =>{
    try {
        var query = `select * from sub_categories where category_id=${request.params.id}`;
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

//EndPoint for Editing Subcategory
//PUT:localhost:5000/subcatgry/2/15
appForsubcategory.put('/:category_id/:id',(request,response) =>{
    try {
        var query = `update sub_categories set name = '${request.body.name}' where category_id=${request.params.category_id} and id =${request.params.id}`;
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

//EndPoint For Deleting a Sub_Category
//DELETE:localhost:5000/category/7 
appForsubcategory.delete("/:category_id/:id",(request,response) =>{
    try {
        var query = `delete from sub_categories where category_id=${request.params.category_id} and id = ${request.params.id}`;
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

module.exports = appForsubcategory;
