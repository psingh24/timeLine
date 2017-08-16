// Node Dependencies
var express = require("express");
var router = express.Router();


// Create routes
// ----------------------------------------------------


router.get("/", function(req, res) {
  res.render("homepage");
});

router.get("/localweather", function(req, res) {
  res.render("localweather");
});


router.get("/portfolio", function(req, res) {
  res.render("portfolio");
});

router.get("/quotemachine", function(req, res) {
  res.render("quotemachine");
});

router.get("/tribute", function(req, res) {
  res.render("tribute");
});

router.get("/wiki", function(req, res) {
  res.render("wiki");
});



// router.get("/index", function(req, res) {
 
//   models.Burger.findAll({}).then(function(data) {
    
//     var hbsObject = { burgers: data };
   
//     res.render("index", hbsObject);
//   });
// });

// // Create a New Burger
// router.post("/", function(req, res) {
  
//   models.Burger
//     .create({
//       burger_name: req.body.name
//     })
//     .then(function() {
     
//       res.redirect("/index");
//     });
// });

// // Devour a Burger
// router.post("/:id", function(req, res) {
//   models.Burger.update(
//     {
//       devoured: true
//     },
//     { where: { id: req.params.id } }
//   ).then(function(){
//     res.redirect("/index");
//   })
// });

// //Delete burger
// router.delete("/:id", function(req, res) {
//   models.Burger.destroy({
//     where: {
//       id: req.params.id
//     }
//   }).then(function(data){
//     res.json(data);
//   })
// })

// ----------------------------------------------------


module.exports = router;
