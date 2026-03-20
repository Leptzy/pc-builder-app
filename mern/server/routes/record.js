import express from "express";

// helps connect to database
import db from "../db/connection.js";

// helps convert the id from string to ObjectId for the _id
import { ObjectId } from "mongodb";

// router is an instance of express router
// used to define routes
// router is added as a middleware and will take control of requests starting wiht path /record
const router = express.Router();

// this sections helps get a list of all records
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
})

// helps get a single record by id
router.get("/:id", async (req, res) => {
    let collection = await db.collection("records");
    let query = { _id: new ObjectId(req.param.id) };
    let result = await collection.findOne(query);

    if (!result) res.send("Not Found").status(404);
    else res.send(result).status(200);
});

// this helps create a new record
router.post("/", async (req, res) => {
    try {
        let newDocument = {
            name: req.body.name,
            position: req.body.position,
            level: req.body.level,
        };
        let collection = await db.collection("records");
        let result = await collection.insertOne(newDocument);
        res.send(result).status(204);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error adding record");
    }
});

// this helps update a record by id
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.param.id) };
        const updates = {
            $set: {
                name: req.body.name,
                position: req.body.position,
                level: req.body.level,
            },
        };

        let collection = await db.collection("records");
        let result = collection.updateOne(query, updates);
        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating record");
    }
});

// helps you delete a record
router.delete("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.param.id) };

        const collection = db.collection("records");
        let result = await collection.deleteOne(query);

        res.send(result).status(200);
    } catch (err) {
        console.log(err);
        res.status(500).send("Error deleting record");
    }
});

export default router;