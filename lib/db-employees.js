// import consola package for console.log() styling
const consola = require('consola');
// import connection to make queries
const connection = require('../config/connection');

// create a function that returns a promise to handle sql query to get all employees
const getAllEmployees = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM employee', (err, employeeData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(employeeData);
    });
    // console.log(getQuery.sql);
  });
};


// create a function that accepts a new employee's information and returns a promise to create a new auction employee with input data
const createEmployee = employeeDataObj => {
  return new Promise((resolve, reject) => {

    console.log("inside db-employee.js file createEmployee method");
    console.log(employeeDataObj);
    
    const postQuery = connection.query('INSERT INTO employee SET ?', employeeDataObj, (err, createEmployeeRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Employee successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the Employee's id and delete the employee
const deleteEmployee = (Id) => {
  return new Promise((resolve, reject) => {
    // run query to "DELTE employees WHERE id = <employee's id>"

    console.log("inside db-employee.js file deleteEmployee method");

    const deleteQuery = connection.query(
      'DELETE FROM employee WHERE id = ?', 
      [{ id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Employee successfully deleted!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};



/*
// create a function that accepts the Employee's id and new high bid price and returns a promise to update it
const updateEmployee = (employeeId, bidPrice) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE employees SET highest_bid = <new high bid> WHERE id = <employee's id>"
    const updateQuery = connection.query(
      'UPDATE employee SET ? WHERE ?',
      [{ highest_bid: bidPrice }, { id: employeeId }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Bid successfully updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

*/
// export functions
module.exports = {
  getAllEmployees,
   createEmployee,
   deleteEmployee
  //,
  // updateEmployee
};
