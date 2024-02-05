const express = require('express');
const mysql = require(`mysql2`);
const app= express();
const config = require(`config`)

const supplierRelatedRoutes= require('./routes/suppliers');
const supplierAddrsRelatedRoutes= require('./routes/supplier_addrs');
const categoryRoute = require('./routes/Category');
const subcategoryRoute = require('./routes/SubCategory');
const subsubcategoryRoute = require('./routes/SubSubCategory');
const userRelatedRoute = require('./routes/User');


app.use((request,response,next)=>{
    response.setHeader('Access-Control-Allow-Origin',"*");
    response.setHeader('Access-Control-Allow-Headers',"*");
    response.setHeader('Access-Control-Allow-Methods',"*")
    next();
})
app.use(express.json());
app.use('/supplier',supplierRelatedRoutes)
app.use('/suppliers_addrs',supplierAddrsRelatedRoutes)
app.use('/catgry',categoryRoute);
app.use('/subcatgry',subcategoryRoute);
app.use('/subsubcatgry',subsubcategoryRoute)
app.use('/users',userRelatedRoute)

const PortNo=config.get("PORT");
app.listen(PortNo,()=>{
    console.log("Server Started On Port : "+PortNo);
});
