require("dotenv").config();
const express= require("express");
const cors = require("cors");
const db = require("./db");
const morgan = require("morgan");
const app = express();

app.use(cors());
app.use(express.json());

//get all data
app.get("/api/v1/data", async (req,res)=>{
    try{
        const results = await db.query("select * from data");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                data: results.rows
            }
        });
    }catch(err){
        console.log(err);
    }
});

//get one data
app.get("/api/v1/data/:id",async (req,res)=>{
    try{
        const results = await db.query("select * from data where id = $1",[req.params.id]);
        console.log(results);
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                data: results.rows[0]
            }
        });
    }catch(err){
        console.log(err);
    }
});

//create data
app.post("/api/v1/data",async (req,res)=>{
    try{
        const results = await db.query("insert into data (data) values ($1) returning *",[req.body.data])
        console.log(results);
        res.status(201).json({
            status: "success",
            data: {
                data: results.rows[0],
        }
        });
    }catch(err){
        console.log(err);
    }
    
});

//update data
app.put("/api/v1/data/:id", async (req,res)=>{
    try{
        const results = await db.query("update data set data = $1 where id = $2 returning *",[req.body.data,req.params.id])
        console.log(results);
        res.status(200).json({
            status: "success",
            data: {
                data: results.rows[0],
        }
        });
    }catch(err){
        console.log(err);
    }
});

//delete data
app.delete("/api/v1/data/:id", async (req,res)=>{
    try{
        const results = await db.query("delete from data where id = $1",[req.params.id])
        console.log(results);
        res.status(204).json({
            status: "success",
        });
    }catch(err){
        console.log(err);
    }
});

const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});