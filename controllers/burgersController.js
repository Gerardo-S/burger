const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
      imageLink: "/assets/images/hamburger.png",
      alt: "Cheese Burger",
      width: "10%",
      height: "10%",
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.create({ burger_name: req.body.name }, (result) => {
    res.json({ id: result.insertId });
  });
});

// using put to replace the value of devoured for a
// specific burger resource
router.put("/api/burgers/:id/devoured", (req, res) => {
  const condition = { id: req.params.id };
  const update = { devoured: req.body.value };

  burger.update(update, condition, (result) => {
    if (result.affectedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

router.delete("/api/burgers", (req, res) => {
   const condition = {devoured: true}
    burger.delete(condition, (result) => {
      if (result.affectedRows === 0) {
        return res.status(404).end();
      } 
      res.status(200).end();
    });

  

});

module.exports = router;