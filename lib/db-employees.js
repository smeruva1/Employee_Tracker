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

    // console.log("inside db-employee.js file createEmployee method");
    // console.log(employeeDataObj);

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

    //console.log("inside db-employee.js file deleteEmployee method");

    const deleteQuery = connection.query(
      'DELETE FROM employee WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Employee successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that accepts the Employee's id and updates the employee
const updateEmployeeRole = (Id, new_id) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE employees WHERE id = <employee's id>"

    //console.log("inside db-employee.js file updateEmployee Role method");

    const updateQuery = connection.query(
      'UPDATE employee SET ? WHERE ?',
      [{ role_id: new_id }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Employee successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// create a function that accepts the Employee's id and updates the employee
const updateEmployeeManager = (Id, new_id) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE employees WHERE id = <employee's id>"

    //console.log("inside db-employee.js file updateEmployee manager method");

    const updateQuery = connection.query(
      'UPDATE employee SET ? WHERE ?',
      [{ manager_id: new_id }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Employee successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// export functions
module.exports = {
  getAllEmployees,
  createEmployee,
  deleteEmployee,
  updateEmployeeRole,
  updateEmployeeManager
};
