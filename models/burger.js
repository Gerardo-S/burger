const orm = require("../config/orm.js");

const burger = {
  all: (cb) => {
    orm.selectAll("burgers", (res) => {
      cb(res);
    });
  },
//   // The variables cols and vals are arrays.
//   create: (newBurger, cb) => {
//     orm.insertOne("burgers", newBurger, (res) => {
//       cb(res);
//     });
//   },
  update: (burgerData, criteria, cb) => {
    orm.updateOne("burgers", burgerData, criteria, (res) => {
      cb(res);
    });
  },
//   delete: (condition, cb) => {
//     orm.deleteOne("burgers", condition, (res) => {
//       cb(res);
//     });
//   },
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
