const express = require("express");
const router = express.Router();
const models = require("../models");

// Post
router.post("/post", (req, res) => {
    // Params
    // let name = req.body.name;
});

// Get
router.get("/get", (req, res) => {
});


// Get By Id
router.get("/getById/:id", (req, res) => {
    //Params
    // let id = req.params.id;
});


// Update
router.put("/updateById/:id", (req, res) => {
    // Params
    // let id = req.params.id;
    // let field = req.body.field;
});


// Delete
router.delete("/deleteById/:id", (req, res) => {
    // Params
    // let userId = req.params.id;
});

module.exports = router;
