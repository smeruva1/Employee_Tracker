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


//==========================================
// Role methods
//==========================================

// create a function that returns a promise to handle sql query to get all roles
const getAllRoles = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM role', (err, roleData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(roleData);
    });
    // console.log(getQuery.sql);
  });
};

// create a function that accepts a new role's information and returns a promise to create a new  role with input data
const createRole = roleDataObj => {
  return new Promise((resolve, reject) => {

    // console.log("inside db-role.js file createRole method");
    // console.log(roleDataObj);

    const postQuery = connection.query('INSERT INTO role SET ?', roleDataObj, (err, createRoleRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Role successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the Role's id and delete the role
const deleteRole = (Id) => {
  return new Promise((resolve, reject) => {
    // run query to "DELTE roles WHERE id = <role's id>"

    //console.log("inside db-role.js file deleteRole method");

    const deleteQuery = connection.query(
      'DELETE FROM role WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
const updateRoleSalary = (Id, new_val) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE roles WHERE id = <role's id>"

    //console.log("inside db-role.js file updateRole Role method");

    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{ salary: new_val }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role Salary successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};

// create a function that accepts the Role's id and updates the role
const updateRoleDepartment = (Id, new_val) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE roles WHERE id = <role's id>"

    //console.log("inside db-role.js file updateRole manager method");

    const updateQuery = connection.query(
      'UPDATE role SET ? WHERE ?',
      [{ department_id: new_val }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Role department successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};


//==========================================
// Department methods
//==========================================

// create a function that returns a promise to handle sql query to get all Departments
const getAllDepartments = () => {
  // creates a new "thenable" promise
  return new Promise((resolve, reject) => {
    const getQuery = connection.query('SELECT * FROM Department', (err, DepartmentData) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve(DepartmentData);
    });
    // console.log(getQuery.sql);
  });
};

// create a function that accepts a new Department's information and returns a promise to create a new  Department with input data
const createDepartment = DepartmentDataObj => {
  return new Promise((resolve, reject) => {

    // console.log("inside db-Department.js file createDepartment method");
    // console.log(DepartmentDataObj);

    const postQuery = connection.query('INSERT INTO Department SET ?', DepartmentDataObj, (err, createDepartmentRes) => {
      if (err) {
        consola.error(err);
        reject(err);
        return;
      }
      resolve({ message: 'Department successfully posted!' });
    });
    consola.info(postQuery.sql);
  });
};

// create a function that accepts the Department's id and delete the Department
const deleteDepartment = (Id) => {
  return new Promise((resolve, reject) => {
    // run query to "DELTE Departments WHERE id = <Department's id>"

    //console.log("inside db-Department.js file deleteDepartment method");

    const deleteQuery = connection.query(
      'DELETE FROM Department WHERE id = ?',
      Id,
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Department successfully deleted!' });
      }
    );

    consola.info(deleteQuery.sql);
  });
};

// create a function that accepts the Department's id and updates the Department
const updateDepartment = (Id, name) => {
  return new Promise((resolve, reject) => {
    // run query to "UPDATE Departments WHERE id = <Department's id>"

    //console.log("inside db-Department.js file updateDepartment Department method");

    const updateQuery = connection.query(
      'UPDATE Department SET ? WHERE ?',
      [{ name: name }, { id: Id }],
      (err, updateRes) => {
        if (err) {
          consola.error(err);
          reject(err);
          return;
        }
        resolve({ message: 'Department title successfully Updated!' });
      }
    );

    consola.info(updateQuery.sql);
  });
};


// export functions
module.exports = {getAllEmployees, createEmployee, deleteEmployee, updateEmployeeRole, updateEmployeeManager,
  getAllRoles, createRole, deleteRole, updateRoleSalary, updateRoleDepartment,
  getAllDepartments, createDepartment, deleteDepartment, updateDepartment
};
