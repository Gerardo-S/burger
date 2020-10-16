const connection = require("../config/connection.js");

// Object for all our SQL statement functions.
const orm = {
    selectAll: (tableInput, cb) => {
     
    },

    insertOne: (table, newRowData, cb) => {
      
    },
  
    // Example of updateValues: { name: "panther", sleepy: true }
    // Example of condition: { id: 1 }
    updateOne: (table, updateValues, condition, cb) => {
      
    },
    // Delete row(s) from table with given condition.
    // Example condition: { id: 1 }
    deleteOne: (table, condition, cb) => {
     
    },
  };
  
  // Export the orm object
  module.exports = orm;