import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dburl = "mongodb://omarski:yaKareem69@ds113668.mlab.com:13668/smoothiecure";

mongodb.MongoClient.connect(dburl, (err,db) =>{
    app.get("/appData", (req,res) =>{
        db.collection("appdata").findOne({"userInit":{'$exists': 1}},(err,data) => {
            if (err){
                console.log("Error networking: "+err);
            }
            console.dir(data);
            res.json(data);
        });
    });

    app.listen(3000,()=> console.log("Listening on 3000!"));
});
