const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require('express-handlebars');
const Cube = require("../models/Cube");
const Accessory = require('../models/Accessory');


module.exports = (app) => {
    app.get('/',  async function (req,res) {
		Cube.find({}).then((cubes)=>{ 
			//console.log(cubes);
            return cubes;
		 });

        res.render("index");
   });
    app.get('/about', function (req,res) {
        res.render("about");
    });
   app.get('/create',  function (req,res) {
    res.render("create");
    });
   app.post("/create", function (req,res){
           console.log(req.body);
           const newCube = new Cube({
               name:req.body.name,
               difficultyLevel: req.body.difficultyLevel,
               imageUrl: req.body.imageUrl,
               description: req.body.description
     });
            console.log('new Cube');
           newCube.save(function (err, newCube) {
               console.log("Cube saved");
             });
          res.send("form submitted");
      });
    app.get('/details/:id', async function (req,res) {
        console.log(req.params.id);
        await Cube.findById(req.params.id).then((cube) =>{
            console.log("I'm a cube", cube);
        });

        res.render("details");
    });
    app.get('/attachAccessory',  function (req,res) {
    //  let path =url.parse(req.url).pathname;
    //  currentID = path.split('/')[3]
     res.render("attachAccessory");
 });
};